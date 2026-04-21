import re
import requests
from urllib.parse import urlparse
from app.config import YOUTUBE_API_KEY
from datetime import datetime, timedelta, timezone
import json

# Optional Redis cache (future scaling)
try:
    import redis
    REDIS_AVAILABLE = True
    redis_client = redis.Redis(host="localhost", port=6379, db=0, decode_responses=True)
except Exception:
    REDIS_AVAILABLE = False
    redis_client = None

YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3"


class YouTubeServiceError(Exception):
    pass


# Redis cache helpers (optional, non-breaking)
def get_redis_cache(key: str):
    if not REDIS_AVAILABLE:
        return None
    try:
        value = redis_client.get(key)
        return json.loads(value) if value else None
    except Exception:
        return None


def set_redis_cache(key: str, value: dict, ttl: int = 3600):
    if not REDIS_AVAILABLE:
        return
    try:
        redis_client.setex(key, ttl, json.dumps(value))
    except Exception:
        pass


def extract_channel_input(query: str) -> dict:
    q = query.strip()

    if q.startswith("@"):
        return {"type": "handle", "value": q[1:]}

    if q.startswith("http://") or q.startswith("https://"):
        parsed = urlparse(q)
        path = parsed.path.strip("/")

        if path.startswith("@"):
            return {"type": "handle", "value": path[1:]}

        if path.startswith("channel/"):
            parts = path.split("/")
            if len(parts) >= 2 and parts[1]:
                return {"type": "channel_id", "value": parts[1]}

        if path.startswith("c/") or path.startswith("user/"):
            parts = path.split("/")
            if len(parts) >= 2 and parts[1]:
                return {"type": "legacy_name", "value": parts[1]}

        return {"type": "url", "value": q}

    # Basic guess for channel IDs like UCxxxxxxxx...
    if re.fullmatch(r"UC[a-zA-Z0-9_-]{20,}", q):
        return {"type": "channel_id", "value": q}

    # Treat common short inputs as handles (IMPORTANT)
    if re.fullmatch(r"[a-zA-Z0-9._-]{2,50}", q):
        return {"type": "handle", "value": q}

    return {"type": "text", "value": q}


def youtube_get(endpoint: str, params: dict) -> dict:
    params["key"] = YOUTUBE_API_KEY
    response = requests.get(f"{YOUTUBE_BASE_URL}/{endpoint}", params=params, timeout=20)

    if response.status_code != 200:
        raise YouTubeServiceError(
            f"YouTube API error {response.status_code}: {response.text}"
        )

    return response.json()


# --- Helper functions for fetching videos and metrics ---
def get_channel_videos(uploads_playlist_id: str, max_results: int = 50) -> list[str]:
    video_ids = []
    next_page_token = None
    remaining = min(max_results, 150)

    while remaining > 0:
        batch_size = min(50, remaining)

        params = {
            "part": "snippet",
            "playlistId": uploads_playlist_id,
            "maxResults": batch_size,
        }

        if next_page_token:
            params["pageToken"] = next_page_token

        data = youtube_get("playlistItems", params)

        items = data.get("items", [])
        for item in items:
            vid = item.get("snippet", {}).get("resourceId", {}).get("videoId")
            if vid:
                video_ids.append(vid)

        remaining -= len(items)
        next_page_token = data.get("nextPageToken")

        if not next_page_token or not items:
            break

    return video_ids


def get_channel_videos_last_30d(uploads_playlist_id: str, max_pages: int = 5) -> list[str]:
    video_ids = []
    next_page_token = None

    cutoff = datetime.now(timezone.utc) - timedelta(days=30)
    pages_fetched = 0

    while True:
        params = {
            "part": "snippet",
            "playlistId": uploads_playlist_id,
            "maxResults": 50,
        }

        if next_page_token:
            params["pageToken"] = next_page_token

        data = youtube_get("playlistItems", params)
        items = data.get("items", [])

        for item in items:
            snippet = item.get("snippet", {})
            published_at = snippet.get("publishedAt")

            if not published_at:
                continue

            dt = datetime.fromisoformat(published_at.replace("Z", "+00:00"))

            # stop when older than 30 days
            if dt < cutoff:
                return video_ids

            vid = snippet.get("resourceId", {}).get("videoId")
            if vid:
                video_ids.append(vid)

        pages_fetched += 1

        if pages_fetched >= max_pages:
            break

        next_page_token = data.get("nextPageToken")

        if not next_page_token or not items:
            break

    return video_ids


from concurrent.futures import ThreadPoolExecutor

def get_video_stats(video_ids: list[str]) -> list[dict]:
    if not video_ids:
        return []

    # Split into chunks of 50 (YouTube limit)
    chunks = [video_ids[i:i+50] for i in range(0, len(video_ids), 50)]

    def fetch(chunk):
        data = youtube_get(
            "videos",
            {
                "part": "statistics,snippet",
                "id": ",".join(chunk),
            },
        )
        return data.get("items", [])

    all_videos = []

    # Run API calls in parallel
    with ThreadPoolExecutor(max_workers=5) as executor:
        results = executor.map(fetch, chunks)

    for res in results:
        all_videos.extend(res)

    return all_videos


def compute_channel_metrics(videos: list[dict]) -> dict:
    now = datetime.now(timezone.utc)
    thirty_days_ago = now - timedelta(days=30)

    total_views = 0
    count = 0
    uploads_30d = 0

    for video in videos:
        stats = video.get("statistics", {})
        snippet = video.get("snippet", {})

        views = int(stats.get("viewCount", 0))
        total_views += views
        count += 1

        published = snippet.get("publishedAt")
        if published:
            try:
                published_dt = datetime.fromisoformat(published.replace("Z", "+00:00"))
            except Exception:
                continue
            if published_dt >= thirty_days_ago:
                uploads_30d += 1

    avg_views = total_views // count if count > 0 else None

    return {
        "uploads_last_30d": uploads_30d,
        "avg_views_per_video": avg_views,
    }


def get_channel_by_id(channel_id: str) -> dict | None:
    data = youtube_get(
        "channels",
        {
            "part": "snippet,statistics,contentDetails",
            "id": channel_id,
        },
    )
    items = data.get("items", [])
    return items[0] if items else None


def get_channel_by_handle(handle: str) -> dict | None:
    data = youtube_get(
        "channels",
        {
            "part": "snippet,statistics,contentDetails",
            "forHandle": handle,
        },
    )
    items = data.get("items", [])
    return items[0] if items else None


def search_channel_by_text(query: str) -> str | None:
    data = youtube_get(
        "search",
        {
            "part": "snippet",
            "q": query,
            "type": "channel",
            "maxResults": 1,
        },
    )
    items = data.get("items", [])
    if not items:
        return None

    return items[0]["snippet"]["channelId"]


def resolve_channel(query: str) -> dict:
    parsed = extract_channel_input(query)
    value = parsed["value"]

    # 1. Try channel ID directly
    if parsed["type"] == "channel_id":
        channel = get_channel_by_id(value)
        if channel:
            return channel

    # 2. ALWAYS try handle first (important for cnn, foxnews, etc.)
    channel = get_channel_by_handle(value)
    if channel:
        return channel

    # 3. Fallback to search for everything else
    channel_id = search_channel_by_text(value)
    if channel_id:
        channel = get_channel_by_id(channel_id)
        if channel:
            return channel

    # 4. Final failure
    raise YouTubeServiceError("Could not resolve channel from the provided input.")


def transform_channel_data(channel: dict) -> dict:
    snippet = channel.get("snippet", {})
    statistics = channel.get("statistics", {})

    uploads_playlist_id = (
        channel.get("contentDetails", {})
        .get("relatedPlaylists", {})
        .get("uploads")
    )

    uploads_last_30d = None
    avg_views_per_video = None

    if uploads_playlist_id:
        try:
            video_ids = get_channel_videos_last_30d(uploads_playlist_id)
            videos = get_video_stats(video_ids)
            metrics = compute_channel_metrics(videos)
            uploads_last_30d = metrics.get("uploads_last_30d")
            avg_views_per_video = metrics.get("avg_views_per_video")
        except Exception as e:
            # silently fail metrics to avoid breaking main flow
            uploads_last_30d = None
            avg_views_per_video = None

    return {
        "youtube_channel_id": channel.get("id"),
        "title": snippet.get("title"),
        "description": snippet.get("description"),
        "custom_url": snippet.get("customUrl"),
        "published_at": snippet.get("publishedAt"),
        "thumbnail_url": (
            snippet.get("thumbnails", {})
            .get("high", {})
            .get("url")
            or snippet.get("thumbnails", {})
            .get("default", {})
            .get("url")
        ),
        "country": snippet.get("country"),
        "subscriber_count": int(statistics["subscriberCount"])
        if "subscriberCount" in statistics
        else None,
        "video_count": int(statistics["videoCount"])
        if "videoCount" in statistics
        else None,
        "view_count": int(statistics["viewCount"])
        if "viewCount" in statistics
        else None,
        "hidden_subscriber_count": statistics.get("hiddenSubscriberCount", False),
        "uploads_last_30d": uploads_last_30d,
        "avg_views_per_video": avg_views_per_video,
        "raw_channel_json": channel,
    }
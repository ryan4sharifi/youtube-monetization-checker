import re
import requests
from urllib.parse import urlparse
from app.config import YOUTUBE_API_KEY

YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3"


class YouTubeServiceError(Exception):
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
        "raw_channel_json": channel,
    }
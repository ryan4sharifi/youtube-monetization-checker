from app.utils.normalize import normalize_query, detect_query_type
from app.services.youtube_service import resolve_channel, transform_channel_data
from app.services.db_service import (
    upsert_channel,
    insert_channel_snapshot,
    insert_channel_score,
    insert_search_log,
)
from app.services.earnings import estimate_earnings
from app.services.insights import build_insights

import time
import json

# Optional Redis cache (production-ready)
try:
    import redis
    REDIS_AVAILABLE = True
    redis_client = redis.Redis(host="localhost", port=6379, db=0, decode_responses=True)
except Exception:
    REDIS_AVAILABLE = False
    redis_client = None


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


CACHE = {}
CACHE_TTL = 3600  # 1 hour


def build_real_score(channel_data: dict) -> dict:
    subs = channel_data.get("subscriber_count") or 0
    views = channel_data.get("view_count") or 0
    videos = channel_data.get("video_count") or 0

    positive_signals = []
    negative_signals = []

    score = 0

    if subs >= 1000:
        score += 30
        positive_signals.append("Channel has at least 1,000 subscribers")
    else:
        negative_signals.append("Subscriber count appears below 1,000")

    if views >= 100000:
        score += 20
        positive_signals.append("Channel has meaningful lifetime views")
    else:
        negative_signals.append("Lifetime views appear relatively low")

    if videos >= 10:
        score += 15
        positive_signals.append("Channel has an established upload history")
    else:
        negative_signals.append("Channel has a limited upload history")

    if score >= 55:
        status = "possibly_monetized"
    elif score >= 30:
        status = "likely_not_monetized"
    else:
        status = "insufficient_data"

    return {
        "status": status,
        "confidence": min(score + 20, 95),
        "positive_signals": positive_signals,
        "negative_signals": negative_signals,
        "reasons_summary": "Estimate based on public channel size and activity signals only.",
    }


def process_check_query(query: str) -> dict:
    cache_key = query.lower().strip()

    # 1. Check Redis cache (shared across instances)
    redis_cached = get_redis_cache(cache_key)
    if redis_cached:
        return redis_cached

    # 2. Fallback to in-memory cache
    cached = CACHE.get(cache_key)
    if cached:
        if time.time() - cached["timestamp"] < CACHE_TTL:
            return cached["data"]

    detected_type = detect_query_type(query)
    normalized_query = normalize_query(query)

    channel = resolve_channel(normalized_query)
    channel_data = transform_channel_data(channel)

    # 3. Check cache by canonical channel_id (unifies all inputs)
    channel_cache_key = f"channel:{channel_data['youtube_channel_id']}"

    redis_channel_cached = get_redis_cache(channel_cache_key)
    if redis_channel_cached:
        # also hydrate query cache for faster future lookups
        set_redis_cache(cache_key, redis_channel_cached, CACHE_TTL)
        return redis_channel_cached

    score = build_real_score(channel_data)
    earnings = estimate_earnings(channel_data)
    insights = build_insights(channel_data)

    # Attach additional computed metrics (ensure they are always present)
    uploads_last_30d = channel_data.get("uploads_last_30d", None)
    avg_views_per_video = channel_data.get("avg_views_per_video", None)

    # Ensure insights is always a dict
    if not isinstance(insights, dict):
        insights = {}

    # Explicitly attach metrics
    insights["uploads_last_30d"] = uploads_last_30d
    insights["avg_views_per_video"] = avg_views_per_video


    saved_channel = upsert_channel(channel_data)
    snapshot = insert_channel_snapshot(saved_channel["id"], channel_data)
    insert_channel_score(saved_channel["id"], snapshot["id"], score)
    insert_search_log(
        query_text=query,
        normalized_query=normalized_query,
        channel_id=saved_channel["id"],
        resolved_youtube_channel_id=channel_data["youtube_channel_id"],
    )

    result = {
        "channel": {
            "input_query": query,
            "normalized_query": normalized_query,
            "detected_type": detected_type,
            "youtube_channel_id": channel_data["youtube_channel_id"],
            "title": channel_data["title"],
            "custom_url": channel_data["custom_url"],
            "thumbnail_url": channel_data["thumbnail_url"],
            "subscriber_count": channel_data["subscriber_count"],
            "video_count": channel_data["video_count"],
            "view_count": channel_data["view_count"],
        },
        "score": score,
        "earnings": earnings,
        "insights": insights,
    }
    # Save to in-memory cache (query key)
    CACHE[cache_key] = {
        "data": result,
        "timestamp": time.time(),
    }

    # Save to Redis (query key)
    set_redis_cache(cache_key, result, CACHE_TTL)

    # Save to Redis (channel key - canonical cache)
    set_redis_cache(channel_cache_key, result, CACHE_TTL)

    return result
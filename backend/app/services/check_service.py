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
    normalized_query = normalize_query(query)
    detected_type = detect_query_type(normalized_query)

    channel = resolve_channel(normalized_query)
    channel_data = transform_channel_data(channel)
    score = build_real_score(channel_data)
    earnings = estimate_earnings(channel_data)
    insights = build_insights(channel_data)

    saved_channel = upsert_channel(channel_data)
    snapshot = insert_channel_snapshot(saved_channel["id"], channel_data)
    insert_channel_score(saved_channel["id"], snapshot["id"], score)
    insert_search_log(
        query_text=query,
        normalized_query=normalized_query,
        channel_id=saved_channel["id"],
        resolved_youtube_channel_id=channel_data["youtube_channel_id"],
    )

    return {
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
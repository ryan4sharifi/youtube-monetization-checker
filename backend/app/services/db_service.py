from app.config import supabase


def upsert_channel(channel_data: dict) -> dict:
    payload = {
        "youtube_channel_id": channel_data["youtube_channel_id"],
        "handle": channel_data.get("custom_url"),
        "custom_url": channel_data.get("custom_url"),
        "title": channel_data["title"],
        "description": channel_data.get("description"),
        "thumbnail_url": channel_data.get("thumbnail_url"),
        "country": channel_data.get("country"),
        "channel_url": f"https://www.youtube.com/channel/{channel_data['youtube_channel_id']}",
    }

    response = (
        supabase.table("channels")
        .upsert(payload, on_conflict="youtube_channel_id")
        .execute()
    )

    if not response.data:
        raise ValueError("Failed to upsert channel.")

    youtube_channel_id = channel_data["youtube_channel_id"]

    fetch_response = (
        supabase.table("channels")
        .select("*")
        .eq("youtube_channel_id", youtube_channel_id)
        .limit(1)
        .execute()
    )

    if not fetch_response.data:
        raise ValueError("Channel upsert succeeded but fetch failed.")

    return fetch_response.data[0]


def insert_channel_snapshot(channel_id: str, channel_data: dict) -> dict:
    payload = {
        "channel_id": channel_id,
        "subscriber_count": channel_data.get("subscriber_count"),
        "video_count": channel_data.get("video_count"),
        "view_count": channel_data.get("view_count"),
        "raw_channel_json": channel_data.get("raw_channel_json"),
    }

    response = supabase.table("channel_snapshots").insert(payload).execute()

    if not response.data:
        raise ValueError("Failed to insert channel snapshot.")

    return response.data[0]


def insert_channel_score(channel_id: str, snapshot_id: str, score_data: dict) -> dict:
    payload = {
        "channel_id": channel_id,
        "snapshot_id": snapshot_id,
        "status": score_data["status"],
        "confidence_score": score_data["confidence"],
        "positive_signals": score_data["positive_signals"],
        "negative_signals": score_data["negative_signals"],
        "reasons_summary": score_data["reasons_summary"],
        "model_version": "v1",
    }

    response = supabase.table("channel_scores").insert(payload).execute()

    if not response.data:
        raise ValueError("Failed to insert channel score.")

    return response.data[0]


def insert_search_log(query_text: str, normalized_query: str, channel_id: str | None, resolved_youtube_channel_id: str | None) -> None:
    payload = {
        "query_text": query_text,
        "normalized_query": normalized_query,
        "channel_id": channel_id,
        "resolved_youtube_channel_id": resolved_youtube_channel_id,
    }

    supabase.table("search_logs").insert(payload).execute()
# backend/scripts/seed_featured_channels.py
from pathlib import Path
from datetime import datetime, timezone
import sys

ROOT_DIR = Path(__file__).resolve().parents[1]
if str(ROOT_DIR) not in sys.path:
    sys.path.insert(0, str(ROOT_DIR))

from app.config import supabase
from app.services.check_service import process_check_query

CHANNELS = [
    "@PewDiePie",
    "@tseries",
    "@cocomelon",
    "@SETIndia",
    "@KidsDianaShow",
    "@LikeNastyaofficial",
    "@vladandniki",
    "@zeemusiccompany",
    "@WWE",
    "@dudeperfect",
]


def get_or_create_channel(channel_data: dict) -> dict:
    channel_payload = {
        "youtube_channel_id": channel_data["youtube_channel_id"],
        "handle": channel_data.get("normalized_query"),
        "custom_url": channel_data.get("custom_url"),
        "title": channel_data.get("title"),
        "description": channel_data.get("description"),
        "thumbnail_url": channel_data.get("thumbnail_url"),
        "country": channel_data.get("country"),
        "channel_url": f"https://www.youtube.com/channel/{channel_data['youtube_channel_id']}",
        "updated_at": datetime.now(timezone.utc).isoformat(),
    }

    existing = (
        supabase.table("channels")
        .select("*")
        .eq("youtube_channel_id", channel_data["youtube_channel_id"])
        .limit(1)
        .execute()
    )

    if existing.data:
        channel_id = existing.data[0]["id"]
        supabase.table("channels").update(channel_payload).eq("id", channel_id).execute()
        refreshed = (
            supabase.table("channels")
            .select("*")
            .eq("id", channel_id)
            .single()
            .execute()
        )
        return refreshed.data

    created = supabase.table("channels").insert(channel_payload).execute()
    return created.data[0]


def insert_snapshot(channel_row: dict, result: dict) -> dict:
    channel = result["channel"]

    snapshot_payload = {
        "channel_id": channel_row["id"],
        "subscriber_count": channel.get("subscriber_count"),
        "video_count": channel.get("video_count"),
        "view_count": channel.get("view_count"),
        "raw_channel_json": result,
        "raw_videos_json": None,
        "fetched_at": datetime.now(timezone.utc).isoformat(),
    }

    snapshot = supabase.table("channel_snapshots").insert(snapshot_payload).execute()
    return snapshot.data[0]


def insert_score(channel_row: dict, snapshot_row: dict, result: dict) -> None:
    score = result["score"]

    score_payload = {
        "channel_id": channel_row["id"],
        "snapshot_id": snapshot_row["id"],
        "status": score.get("status"),
        "confidence_score": score.get("confidence"),
        "ypp_readiness_score": None,
        "eligibility_estimate": None,
        "positive_signals": score.get("positive_signals", []),
        "negative_signals": score.get("negative_signals", []),
        "reasons_summary": score.get("reasons_summary"),
        "model_version": "v1",
        "calculated_at": datetime.now(timezone.utc).isoformat(),
    }

    supabase.table("channel_scores").insert(score_payload).execute()


def main():
    for query in CHANNELS:
        print(f"Processing {query}...")
        result = process_check_query(query)

        channel_row = get_or_create_channel(result["channel"])
        snapshot_row = insert_snapshot(channel_row, result)
        insert_score(channel_row, snapshot_row, result)

        print(f"Saved: {channel_row['title']}")


if __name__ == "__main__":
    main()
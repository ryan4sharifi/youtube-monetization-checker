# Update create_feedback to upsert instead of insert
from app.utils.supabase_client import supabase

VALID_RATINGS = {"very_accurate", "somewhat", "not_accurate"}
ALLOWED_FIELDS = {"channel_handle", "rating", "user_id"}

async def create_feedback(data: dict):
    # Keep only allowed fields
    data = {k: v for k, v in data.items() if k in ALLOWED_FIELDS}

    # Normalize handle
    if "channel_handle" in data and isinstance(data["channel_handle"], str):
        data["channel_handle"] = data["channel_handle"].lstrip("@").lower()

    # Require user_id for upsert logic
    if not data.get("user_id"):
        raise ValueError("user_id is required")

    # Validate rating
    if data.get("rating") not in VALID_RATINGS:
        raise ValueError("Invalid rating")

    # UPSERT instead of insert (prevents duplicates)
    response = (
        supabase
        .table("feedback")
        .upsert(data, on_conflict="channel_handle,user_id")
        .execute()
    )

    return response.data[0] if response.data else None

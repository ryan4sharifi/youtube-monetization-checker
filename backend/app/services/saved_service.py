from app.utils.supabase_client import supabase

async def save_channel(data: dict):
    data = {
        "user_id": data["user_id"],
        "channel_handle": data["channel_handle"].lstrip("@").lower()
    }

    res = (
        supabase
        .table("saved_channels")
        .upsert(data, on_conflict="user_id,channel_handle")
        .execute()
    )

    return res.data[0] if res.data else None


async def remove_saved_channel(user_id: str, channel_handle: str):
    handle = channel_handle.lstrip("@").lower()

    res = (
        supabase
        .table("saved_channels")
        .delete()
        .eq("user_id", user_id)
        .eq("channel_handle", handle)
        .execute()
    )

    return True


async def get_saved_channels(user_id: str):
    res = (
        supabase
        .table("saved_channels")
        .select("*")
        .eq("user_id", user_id)
        .execute()
    )

    return res.data
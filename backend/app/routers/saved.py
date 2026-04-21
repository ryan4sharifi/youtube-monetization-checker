from fastapi import APIRouter, HTTPException
from app.services.saved_service import save_channel, remove_saved_channel, get_saved_channels

router = APIRouter()


@router.post("/save-channel")
async def save(data: dict):
    try:
        return await save_channel(data)
    except Exception:
        raise HTTPException(status_code=500, detail="Failed to save channel")


@router.delete("/save-channel")
async def unsave(user_id: str, channel_handle: str):
    try:
        await remove_saved_channel(user_id, channel_handle)
        return {"success": True}
    except Exception:
        raise HTTPException(status_code=500, detail="Failed to remove")


@router.get("/saved-channels")
async def list_saved(user_id: str):
    try:
        return await get_saved_channels(user_id)
    except Exception:
        raise HTTPException(status_code=500, detail="Failed to fetch saved")
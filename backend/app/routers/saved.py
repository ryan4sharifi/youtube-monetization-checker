import logging

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel

from app.services.saved_service import save_channel, remove_saved_channel, get_saved_channels
from app.utils.auth import AuthenticatedUser, get_current_user
from app.utils.rate_limit import enforce_rate_limit

router = APIRouter()
logger = logging.getLogger(__name__)


class SaveChannelRequest(BaseModel):
    channel_handle: str


@router.post("/save-channel")
async def save(
    payload: SaveChannelRequest,
    user: AuthenticatedUser = Depends(get_current_user),
):
    enforce_rate_limit(f"save:user:{user.id}", limit=60, window_seconds=3600)

    try:
        return await save_channel(
            {
                "user_id": user.id,
                "channel_handle": payload.channel_handle,
            }
        )
    except Exception:
        logger.exception("Failed to save channel")
        raise HTTPException(status_code=500, detail="Failed to save channel")


@router.delete("/save-channel")
async def unsave(
    channel_handle: str,
    user: AuthenticatedUser = Depends(get_current_user),
):
    enforce_rate_limit(f"save:user:{user.id}", limit=60, window_seconds=3600)

    try:
        await remove_saved_channel(user.id, channel_handle)
        return {"success": True}
    except Exception:
        logger.exception("Failed to remove saved channel")
        raise HTTPException(status_code=500, detail="Failed to remove")


@router.get("/saved-channels")
async def list_saved(
    user: AuthenticatedUser = Depends(get_current_user),
):
    enforce_rate_limit(f"saved:list:user:{user.id}", limit=120, window_seconds=3600)

    try:
        return await get_saved_channels(user.id)
    except Exception:
        logger.exception("Failed to fetch saved channels")
        raise HTTPException(status_code=500, detail="Failed to fetch saved")

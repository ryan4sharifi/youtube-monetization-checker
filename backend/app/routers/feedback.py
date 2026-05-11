import logging

from fastapi import APIRouter, Depends, HTTPException, Request

from app.schemas.feedback import FeedbackCreate
from app.services.feedback_service import create_feedback
from app.utils.auth import AuthenticatedUser, get_current_user
from app.utils.rate_limit import enforce_rate_limit, get_client_identifier
from app.utils.supabase_client import supabase

router = APIRouter()
logger = logging.getLogger(__name__)


@router.post("/feedback")
async def submit_feedback(
    payload: FeedbackCreate,
    user: AuthenticatedUser = Depends(get_current_user),
):
    enforce_rate_limit(f"feedback:user:{user.id}", limit=5, window_seconds=86400)

    try:
        data = payload.dict()
        data["user_id"] = user.id
        result = await create_feedback(data)
        return {"success": True, "data": result}
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid feedback request")
    except Exception:
        logger.exception("Failed to submit feedback")
        raise HTTPException(status_code=500, detail="Failed to submit feedback")


@router.get("/feedback")
async def get_feedback(
    channel_handle: str,
    user: AuthenticatedUser = Depends(get_current_user),
):
    enforce_rate_limit(f"feedback:get:user:{user.id}", limit=120, window_seconds=3600)

    try:
        handle = channel_handle.lstrip("@").lower()
        res = (
            supabase
            .table("feedback")
            .select("rating")
            .eq("channel_handle", handle)
            .eq("user_id", user.id)
            .limit(1)
            .execute()
        )

        if res.data:
            return res.data[0]

        return {}
    except Exception:
        logger.exception("Failed to fetch feedback")
        raise HTTPException(status_code=500, detail="Failed to fetch feedback")


@router.get("/feedback/summary")
async def feedback_summary(channel_handle: str, request: Request):
    client_id = get_client_identifier(request)
    enforce_rate_limit(
        f"feedback-summary:ip:{client_id}",
        limit=60,
        window_seconds=3600,
    )

    try:
        handle = channel_handle.lstrip("@").lower()

        res = (
            supabase
            .table("feedback")
            .select("rating")
            .eq("channel_handle", handle)
            .execute()
        )

        data = res.data or []

        counts = {
            "very_accurate": 0,
            "somewhat": 0,
            "not_accurate": 0,
        }

        for row in data:
            rating = row.get("rating")
            if rating in counts:
                counts[rating] += 1

        total = sum(counts.values())

        if total == 0:
            return {**counts, "total": 0, "accuracy_score": None}

        score = (
            counts["very_accurate"] * 1.0 +
            counts["somewhat"] * 0.6 +
            counts["not_accurate"] * 0.2
        ) / total

        return {
            **counts,
            "total": total,
            "accuracy_score": round(score, 3)
        }

    except Exception:
        logger.exception("Failed to compute feedback summary")
        raise HTTPException(status_code=500, detail="Failed to compute summary")

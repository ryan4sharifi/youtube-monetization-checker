from fastapi import APIRouter, HTTPException
from app.schemas.feedback import FeedbackCreate
from app.services.feedback_service import create_feedback
from app.utils.supabase_client import supabase

router = APIRouter()

@router.post("/feedback")
async def submit_feedback(payload: FeedbackCreate):
    try:
        data = payload.dict()
        result = await create_feedback(data)
        return {"success": True, "data": result}
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception:
        raise HTTPException(status_code=500, detail="Failed to submit feedback")

@router.get("/feedback")
async def get_feedback(channel_handle: str, user_id: str):
    try:
        res = (
            supabase
            .table("feedback")
            .select("*")
            .eq("channel_handle", channel_handle)
            .eq("user_id", user_id)
            .limit(1)
            .execute()
        )

        if res.data:
            return res.data[0]

        return {}
    except Exception:
        raise HTTPException(status_code=500, detail="Failed to fetch feedback")
    
@router.get("/feedback/summary")
async def feedback_summary(channel_handle: str):
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
        raise HTTPException(status_code=500, detail="Failed to compute summary")
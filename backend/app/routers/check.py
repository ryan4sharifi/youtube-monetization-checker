from fastapi import APIRouter, HTTPException
from app.schemas.check import CheckRequest, CheckResponse
from app.services.check_service import process_check_query
from app.services.youtube_service import YouTubeServiceError

router = APIRouter(prefix="/api/check", tags=["check"])


@router.post("", response_model=CheckResponse)
def check_channel(payload: CheckRequest):
    try:
        result = process_check_query(payload.query)
        return {
            "success": True,
            "channel": result["channel"],
            "score": result["score"],
        }
    except YouTubeServiceError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Unexpected server error: {str(e)}")
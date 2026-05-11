import logging

from fastapi import APIRouter, Header, HTTPException, Request
from app.schemas.check import CheckRequest, CheckResponse
from app.services.check_service import process_check_query
from app.services.youtube_service import YouTubeServiceError
from app.utils.auth import get_optional_user_from_authorization
from app.utils.rate_limit import enforce_rate_limit, get_client_identifier

router = APIRouter(prefix="/api/check", tags=["check"])
logger = logging.getLogger(__name__)


@router.post("", response_model=CheckResponse)
def check_channel(
    payload: CheckRequest,
    request: Request,
    authorization: str | None = Header(default=None),
):
    user = get_optional_user_from_authorization(authorization)

    if user:
        enforce_rate_limit(f"check:user:{user.id}", limit=30, window_seconds=3600)
    else:
        client_id = get_client_identifier(request)
        enforce_rate_limit(f"check:ip:{client_id}", limit=10, window_seconds=3600)

    try:
        result = process_check_query(payload.query)
        return {
            "success": True,
            "channel": result["channel"],
            "score": result["score"],
            "earnings": result["earnings"],
            "insights": result["insights"],
        }
    except YouTubeServiceError:
        logger.warning("YouTube channel lookup failed", exc_info=True)
        raise HTTPException(
            status_code=400,
            detail="We could not analyze this channel from the provided input.",
        )
    except Exception:
        logger.exception("Unexpected channel analysis failure")
        raise HTTPException(
            status_code=500,
            detail="We could not analyze this channel right now. Please try again later.",
        )

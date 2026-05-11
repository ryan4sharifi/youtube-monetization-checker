import logging
from dataclasses import dataclass

from fastapi import Header, HTTPException, status

from app.utils.supabase_client import supabase

logger = logging.getLogger(__name__)


@dataclass(frozen=True)
class AuthenticatedUser:
    id: str


def _extract_bearer_token(authorization: str | None) -> str | None:
    if not authorization:
        return None

    scheme, _, token = authorization.partition(" ")
    if scheme.lower() != "bearer" or not token.strip():
        return None

    return token.strip()


def _verify_token(token: str) -> AuthenticatedUser | None:
    try:
        response = supabase.auth.get_user(token)
        user = getattr(response, "user", None)
        user_id = getattr(user, "id", None)
        if not user_id:
            return None
        return AuthenticatedUser(id=user_id)
    except Exception:
        logger.warning("Supabase JWT verification failed", exc_info=True)
        return None


def get_current_user(
    authorization: str | None = Header(default=None),
) -> AuthenticatedUser:
    token = _extract_bearer_token(authorization)
    if not token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Authentication required.",
        )

    user = _verify_token(token)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Authentication required.",
        )

    return user


def get_optional_user_from_authorization(
    authorization: str | None,
) -> AuthenticatedUser | None:
    token = _extract_bearer_token(authorization)
    if not token:
        return None

    return _verify_token(token)

import time
from collections import defaultdict, deque
from threading import Lock

from fastapi import HTTPException, Request, status

_requests: dict[str, deque[float]] = defaultdict(deque)
_lock = Lock()

# Process-local limiter. This protects a single API worker without adding a
# dependency; use Redis or another shared store before horizontal scaling.


def get_client_identifier(request: Request) -> str:
    forwarded_for = request.headers.get("x-forwarded-for")
    if forwarded_for:
        return forwarded_for.split(",")[0].strip()

    connecting_ip = request.headers.get("cf-connecting-ip")
    if connecting_ip:
        return connecting_ip.strip()

    return request.client.host if request.client else "unknown"


def enforce_rate_limit(key: str, limit: int, window_seconds: int) -> None:
    now = time.time()
    window_start = now - window_seconds

    with _lock:
        bucket = _requests[key]

        while bucket and bucket[0] <= window_start:
            bucket.popleft()

        if len(bucket) >= limit:
            raise HTTPException(
                status_code=status.HTTP_429_TOO_MANY_REQUESTS,
                detail="Too many requests. Please try again later.",
            )

        bucket.append(now)

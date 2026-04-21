import re


def normalize_query(query: str) -> str:
    q = query.strip().lower()

    # Remove protocol
    q = q.replace("https://", "").replace("http://", "")

    # Remove common YouTube prefixes
    q = q.replace("www.youtube.com/", "")
    q = q.replace("youtube.com/", "")
    q = q.replace("youtu.be/", "")

    # Remove @ symbol
    q = q.replace("@", "")

    # Remove trailing slashes
    q = q.strip("/")

    return q


def detect_query_type(query: str) -> str:
    q = normalize_query(query)

    if q.startswith("@"):
        return "handle"

    if "youtube.com/" in q or "youtu.be/" in q:
        return "url"

    if re.fullmatch(r"[A-Za-z0-9_-]{10,}", q):
        return "possible_channel_identifier"

    return "text"
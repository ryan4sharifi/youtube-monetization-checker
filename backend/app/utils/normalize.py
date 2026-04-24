import re


def normalize_query(query: str) -> str:
    q = query.strip().lower()

    # Fix malformed protocols without breaking valid ones
    q = re.sub(r'^https:/([^/])', r'https://\1', q)
    q = re.sub(r'^http:/([^/])', r'http://\1', q)

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
    raw = query.strip()
    q = raw.lower()

    # Detect URL first (before normalization removes it)
    if "youtube.com/" in q or "youtu.be/" in q:
        return "url"

    # Detect handle (before @ is removed in normalization)
    if raw.strip().startswith("@"):
        return "handle"

    normalized = normalize_query(query)

    if re.fullmatch(r"[A-Za-z0-9_-]{10,}", normalized):
        return "possible_channel_identifier"

    return "text"
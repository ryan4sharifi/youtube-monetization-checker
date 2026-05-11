const CHANNEL_ID_PATTERN = /^UC[a-zA-Z0-9_-]{20,}$/;
const HANDLE_PATTERN = /^[a-zA-Z0-9._-]{2,50}$/;

export function safeDecodeURIComponent(value: string) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function isYouTubeHost(hostname: string) {
  const host = hostname.toLowerCase();
  return host === "youtu.be" || host === "youtube.com" || host.endsWith(".youtube.com");
}

function extractYouTubeHandleFromUrl(input: string) {
  try {
    const url = new URL(input);
    if (!isYouTubeHost(url.hostname)) return null;

    const segments = url.pathname
      .split("/")
      .map((segment) => safeDecodeURIComponent(segment).trim())
      .filter(Boolean);

    const handleSegment = segments.find((segment) => segment.startsWith("@"));
    return handleSegment ?? null;
  } catch {
    return null;
  }
}

export function getCanonicalHandle(input: string | null | undefined) {
  if (!input) return null;

  const decoded = safeDecodeURIComponent(input).trim();
  if (!decoded) return null;

  const urlHandle = extractYouTubeHandleFromUrl(decoded);
  const candidate = (urlHandle ?? decoded).replace(/^@+/, "").trim();

  if (!candidate || CHANNEL_ID_PATTERN.test(candidate)) return null;
  if (!HANDLE_PATTERN.test(candidate)) return null;

  return `@${candidate.toLowerCase()}`;
}

export function buildCheckPath(handle: string) {
  const canonicalHandle = getCanonicalHandle(handle);
  return canonicalHandle ? `/check/${canonicalHandle}` : null;
}

export function buildCheckPathForQuery(query: string) {
  const trimmed = query.trim();
  const canonicalPath = buildCheckPath(trimmed);

  if (canonicalPath) return canonicalPath;

  return `/check/${encodeURIComponent(trimmed)}`;
}

export function buildCheckCanonicalUrl(handle: string, baseUrl: string) {
  const path = buildCheckPath(handle);
  return path ? `${baseUrl}${path}` : null;
}

export function isInvalidCheckInput(input: string | null | undefined) {
  if (!input) return true;

  const decoded = safeDecodeURIComponent(input).trim();
  if (!decoded || decoded.length > 500) return true;

  if (decoded.startsWith("@")) {
    return getCanonicalHandle(decoded) === null;
  }

  if (decoded.startsWith("http://") || decoded.startsWith("https://")) {
    try {
      return !isYouTubeHost(new URL(decoded).hostname);
    } catch {
      return true;
    }
  }

  return false;
}

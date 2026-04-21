export function normalizeHandle(input: string) {
  return input
    .toLowerCase()
    .replace("https://", "")
    .replace("http://", "")
    .replace("www.youtube.com/", "")
    .replace("youtube.com/", "")
    .replace("@", "")
    .trim()
    .replace(/\s+/g, ""); 
}
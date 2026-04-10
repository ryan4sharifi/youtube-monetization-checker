def estimate_monthly_views(view_count: int | None, video_count: int | None) -> int:
    total_views = view_count or 0
    total_videos = video_count or 0

    if total_views <= 0 or total_videos <= 0:
        return 0

    avg_views_per_video = total_views / max(total_videos, 1)

    if total_videos >= 500:
        multiplier = 8
    elif total_videos >= 100:
        multiplier = 6
    else:
        multiplier = 4

    return int(avg_views_per_video * multiplier)


def estimate_earnings(channel: dict) -> dict:
    monthly_views = estimate_monthly_views(
        channel.get("view_count"),
        channel.get("video_count"),
    )

    subscribers = channel.get("subscriber_count") or 0

    if subscribers >= 10_000_000:
        confidence = "medium"
    elif subscribers >= 100_000:
        confidence = "low"
    else:
        confidence = "low"

    low_rpm = 0.5
    high_rpm = 4.0

    monthly_low = int((monthly_views / 1000) * low_rpm)
    monthly_high = int((monthly_views / 1000) * high_rpm)

    return {
        "estimated_monthly_views": monthly_views,
        "low_rpm": low_rpm,
        "high_rpm": high_rpm,
        "monthly_low": monthly_low,
        "monthly_high": monthly_high,
        "yearly_low": monthly_low * 12,
        "yearly_high": monthly_high * 12,
        "confidence": confidence,
    }
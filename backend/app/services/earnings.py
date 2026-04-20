def estimate_monthly_views(view_count: int | None, video_count: int | None) -> int:
    total_views = view_count or 0
    total_videos = video_count or 0

    if total_views <= 0 or total_videos <= 0:
        return 0

    avg_views_per_video = total_views / max(total_videos, 1)

    # Performance boost: channels with strong average views likely have higher current traffic
    if avg_views_per_video >= 50_000:
        performance_boost = 1.5
    elif avg_views_per_video >= 20_000:
        performance_boost = 1.3
    else:
        performance_boost = 1.0

    # Long-form / livestream boost: many videos + moderate views often means long sessions/live streams
    if total_videos >= 1500 and avg_views_per_video >= 5000:
        long_content_boost = 1.4
    elif total_videos >= 800 and avg_views_per_video >= 3000:
        long_content_boost = 1.25
    else:
        long_content_boost = 1.0

    # Base estimate (lifetime average * activity multiplier)
    if total_videos >= 100_000:
        multiplier = 20  # news/media channels
    elif total_videos >= 10_000:
        multiplier = 14
    elif total_videos >= 1_000:
        multiplier = 10
    elif total_videos >= 300:
        multiplier = 7
    elif total_videos >= 100:
        multiplier = 5
    else:
        multiplier = 3

    estimated = avg_views_per_video * multiplier * performance_boost * long_content_boost

    # Floor adjustment for large channels (prevents severe underestimation)
    if total_views >= 10_000_000_000:
        estimated = max(estimated, total_views * 0.003)
    elif total_views >= 1_000_000_000:
        estimated = max(estimated, total_views * 0.002)
    elif total_views >= 100_000_000:
        estimated = max(estimated, total_views * 0.001)

    return int(estimated)


def estimate_rpm(subscribers: int) -> tuple[float, float]:
    """Estimate RPM range based on channel size (proxy for audience + niche)"""
    if subscribers >= 10_000_000:
        return 3.0, 10.0
    elif subscribers >= 1_000_000:
        return 2.0, 8.0
    elif subscribers >= 100_000:
        return 1.2, 5.0
    elif subscribers >= 10_000:
        return 0.7, 3.5
    else:
        return 0.3, 2.5


def estimate_confidence(monthly_views: int) -> str:
    """Confidence based on strength of signal"""
    if monthly_views >= 10_000_000:
        return "high"
    elif monthly_views >= 1_000_000:
        return "medium"
    else:
        return "low"


def estimate_earnings(channel: dict) -> dict:
    monthly_views = estimate_monthly_views(
        channel.get("view_count"),
        channel.get("video_count"),
    )

    subscribers = channel.get("subscriber_count") or 0

    # Stronger floor for highly active channels
    if channel.get("video_count", 0) >= 1000:
        subscriber_floor = subscribers * 10
    elif channel.get("video_count", 0) >= 300:
        subscriber_floor = subscribers * 7
    else:
        subscriber_floor = subscribers * 5

    monthly_views = max(monthly_views, subscriber_floor)

    # Activity boost: frequent upload channels generate recurring traffic
    video_count = channel.get("video_count") or 0
    if video_count >= 2000:
        activity_boost = 1.3
    elif video_count >= 1000:
        activity_boost = 1.2
    elif video_count >= 300:
        activity_boost = 1.1
    else:
        activity_boost = 1.0

    monthly_views = int(monthly_views * activity_boost)

    low_rpm, high_rpm = estimate_rpm(subscribers)

    monthly_low = int((monthly_views / 1000) * low_rpm)
    monthly_high = int((monthly_views / 1000) * high_rpm)

    confidence = estimate_confidence(monthly_views)

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
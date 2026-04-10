def build_insights(channel: dict) -> dict:
    subscribers = channel.get("subscriber_count") or 0
    videos = channel.get("video_count") or 0
    views = channel.get("view_count") or 0

    if subscribers >= 10_000_000:
        channel_size = "very_large"
    elif subscribers >= 1_000_000:
        channel_size = "large"
    elif subscribers >= 100_000:
        channel_size = "medium"
    else:
        channel_size = "small"

    if videos >= 500:
        upload_strength = "strong"
    elif videos >= 100:
        upload_strength = "moderate"
    else:
        upload_strength = "light"

    if views >= 100_000_000:
        business_potential = "high"
    elif views >= 10_000_000:
        business_potential = "medium"
    else:
        business_potential = "early"

    return {
        "channel_size": channel_size,
        "upload_strength": upload_strength,
        "activity_level": "estimated",
        "business_potential": business_potential,
    }
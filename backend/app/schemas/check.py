from pydantic import BaseModel, Field
from typing import Optional, List


class CheckRequest(BaseModel):
    query: str = Field(..., min_length=1, max_length=500)


class ChannelPreview(BaseModel):
    input_query: str
    normalized_query: str
    detected_type: str
    youtube_channel_id: Optional[str] = None
    title: Optional[str] = None
    custom_url: Optional[str] = None
    thumbnail_url: Optional[str] = None
    subscriber_count: Optional[int] = None
    video_count: Optional[int] = None
    view_count: Optional[int] = None


class ScorePreview(BaseModel):
    status: str
    confidence: int
    positive_signals: List[str]
    negative_signals: List[str]
    reasons_summary: str


class EarningsPreview(BaseModel):
    estimated_monthly_views: int
    low_rpm: float
    high_rpm: float
    monthly_low: int
    monthly_high: int
    yearly_low: int
    yearly_high: int
    confidence: str


class InsightsPreview(BaseModel):
    channel_size: str
    upload_strength: str
    activity_level: str
    business_potential: str


class CheckResponse(BaseModel):
    success: bool
    channel: ChannelPreview
    score: ScorePreview
    earnings: EarningsPreview
    insights: InsightsPreview
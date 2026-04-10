export type ChannelPreview = {
  input_query: string;
  normalized_query: string;
  detected_type: string;
  youtube_channel_id: string | null;
  title: string | null;
  custom_url: string | null;
  thumbnail_url: string | null;
  subscriber_count: number | null;
  video_count: number | null;
  view_count: number | null;
};

export type ScorePreview = {
  status: string;
  confidence: number;
  positive_signals: string[];
  negative_signals: string[];
  reasons_summary: string;
};

export type EarningsPreview = {
  estimated_monthly_views: number;
  low_rpm: number;
  high_rpm: number;
  monthly_low: number;
  monthly_high: number;
  yearly_low: number;
  yearly_high: number;
  confidence: string;
};

export type InsightsPreview = {
  channel_size: string;
  upload_strength: string;
  activity_level: string;
  business_potential: string;
};

export type CheckResponse = {
  success: boolean;
  channel: ChannelPreview;
  score: ScorePreview;
  earnings: EarningsPreview;
  insights: InsightsPreview;
};
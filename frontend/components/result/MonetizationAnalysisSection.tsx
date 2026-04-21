import React from "react";
import { TrendingUp } from "lucide-react";

interface AnalysisData {
  score?: number; // 0–100
  subscribers?: number;
  totalViews?: number;

  // camelCase (frontend)
  uploadsLast30d?: number;
  avgViewsPerVideo?: number;

  // snake_case (backend fallback)
  uploads_last_30d?: number;
  avg_views_per_video?: number;
}

interface Props {
  data?: AnalysisData;
}

function formatNumber(n?: number) {
  if (n === null || n === undefined) return "—";
  return n.toLocaleString();
}

function scoreLabel(score?: number) {
  if (score === undefined) return "Unknown";
  if (score >= 80) return "Highly likely monetized";
  if (score >= 60) return "Possibly monetized";
  if (score >= 40) return "Unclear monetization";
  return "Unlikely monetized";
}

export default function MonetizationAnalysisSection({ data }: Props) {
  const label = scoreLabel(data?.score);

  // normalize backend + frontend fields
  const uploadsLast30d =
    data?.uploadsLast30d ?? data?.uploads_last_30d;

  const avgViewsPerVideo =
    data?.avgViewsPerVideo ?? data?.avg_views_per_video;

  return (
    <section className="w-full">
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
        <div className="space-y-4 md:space-y-5">

          {/* Header */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background-elevated)]">
                <TrendingUp className="h-4 w-4 text-[var(--foreground-muted)]" />
              </div>
              <span className="rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-[var(--foreground-muted)]">
                Analysis
              </span>
            </div>

            <h2 className="text-lg font-semibold tracking-[-0.02em] text-[var(--foreground)] md:text-xl">
              Monetization Analysis
            </h2>

            <p className="text-sm leading-6 text-[var(--foreground-muted)]">
              Based on publicly available signals such as subscriber count, total views, and upload activity, this channel is assessed as <span className="font-medium text-[var(--foreground)]">{label}</span>. This is not an official YouTube confirmation, but a data-driven estimate.
            </p>
          </div>

          {/* Key Signals */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] p-4">
              <p className="text-xs text-[var(--foreground-muted)]">Subscribers</p>
              <p className="mt-1.5 text-[15px] sm:text-lg font-semibold tracking-[-0.01em] text-[var(--foreground)] break-all leading-tight">
                {formatNumber(data?.subscribers)}
              </p>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] p-4">
              <p className="text-xs text-[var(--foreground-muted)]">Total Views</p>
              <p className="mt-1.5 text-[15px] sm:text-lg font-semibold tracking-[-0.01em] text-[var(--foreground)] break-all leading-tight">
                {formatNumber(data?.totalViews)}
              </p>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] p-4">
              <p className="text-xs text-[var(--foreground-muted)]">Uploads (30d)</p>
              <p className="mt-1.5 text-[15px] sm:text-lg font-semibold tracking-[-0.01em] text-[var(--foreground)] break-all leading-tight">
                {formatNumber(uploadsLast30d)}
              </p>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] p-4">
              <p className="text-xs text-[var(--foreground-muted)]">Avg Views / Video</p>
              <p className="mt-1.5 text-[15px] sm:text-lg font-semibold tracking-[-0.01em] text-[var(--foreground)] break-all leading-tight">
                {formatNumber(avgViewsPerVideo)}
              </p>
            </div>
          </div>

          {/* Explanation */}
          <div className="space-y-2.5 text-sm leading-6 text-[var(--foreground-muted)]">
            <p>
              YouTube monetization typically requires meeting minimum thresholds such as 1,000 subscribers and 4,000 watch hours, along with consistent content activity. Channels that exceed these thresholds and maintain regular uploads are more likely to be monetized.
            </p>

            <p>
              Engagement and view consistency also play an important role. Channels with strong average views per video and recent upload activity are more likely to generate steady ad revenue.
            </p>

            {data?.totalViews && (
              <p>
                With approximately {formatNumber(data.totalViews)} total views, this channel demonstrates a level of audience reach that can support monetization depending on content quality and audience demographics.
              </p>
            )}

            <p>
              Keep in mind that monetization can vary depending on content policies, advertiser friendliness, and regional audience differences.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
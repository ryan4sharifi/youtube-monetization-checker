

import React from "react";
import { Lightbulb } from "lucide-react";

interface TipsData {
  score?: number; // 0–100
  subscribers?: number;
  uploadsLast30d?: number;
  avgViewsPerVideo?: number;
  isLikelyMonetized?: boolean;
}

interface Props {
  data?: TipsData;
}

function tipBlocks(data?: TipsData) {
  const tips: { title: string; body: string }[] = [];

  const score = data?.score ?? 0;
  const subs = data?.subscribers ?? 0;
  const uploads = data?.uploadsLast30d ?? 0;
  const avgViews = data?.avgViewsPerVideo ?? 0;

  // Foundational eligibility
  if (subs < 1000) {
    tips.push({
      title: "Reach monetization thresholds",
      body:
        "Focus on hitting 1,000 subscribers and consistent watch time. Publish regularly and optimize titles and thumbnails to increase discovery.",
    });
  }

  // Upload consistency
  if (uploads < 4) {
    tips.push({
      title: "Increase upload consistency",
      body:
        "Channels that post consistently are more likely to be monetized and earn steadily. Aim for a predictable schedule (e.g., 1–3 videos per week).",
    });
  }

  // Engagement / views quality
  if (avgViews > 0 && avgViews < 5000) {
    tips.push({
      title: "Improve viewer engagement",
      body:
        "Work on hooks, retention, and clear value per video. Higher average views per video typically correlate with better monetization outcomes.",
    });
  }

  // High score / already likely monetized
  if (score >= 70) {
    tips.push({
      title: "Diversify revenue streams",
      body:
        "In addition to ads, consider sponsorships, affiliate links, memberships, and digital products to increase overall earnings.",
    });
  }

  // Default tip if not enough signals
  if (tips.length === 0) {
    tips.push({
      title: "Maintain steady growth",
      body:
        "Continue publishing high-quality content and analyzing performance. Consistency and audience value are key to long-term monetization.",
    });
  }

  return tips.slice(0, 4);
}

export default function MonetizationTipsSection({ data }: Props) {
  const tips = tipBlocks(data);

  return (
    <section className="w-full">
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
        <div className="space-y-4">

          {/* Header */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background-elevated)]">
                <Lightbulb className="h-4 w-4 text-[var(--foreground-muted)]" />
              </div>
              <span className="rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-[var(--foreground-muted)]">
                Tips
              </span>
            </div>

            <h2 className="text-lg font-semibold tracking-[-0.02em] text-[var(--foreground)] md:text-xl">
              How to Monetize Like This Channel
            </h2>

            <p className="text-sm leading-6 text-[var(--foreground-muted)]">
              These suggestions are based on this channel’s current signals such as subscribers, activity, and view performance. Use them as practical next steps to improve monetization potential.
            </p>
          </div>

          {/* Tips Grid */}
          <div className="grid gap-3 sm:grid-cols-2">
            {tips.map((t, i) => (
              <div
                key={i}
                className="rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] p-4"
              >
                <h3 className="text-sm font-semibold text-[var(--foreground)]">
                  {t.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-[var(--foreground-muted)]">
                  {t.body}
                </p>
              </div>
            ))}
          </div>

          {/* Closing note */}
          <div className="text-sm leading-6 text-[var(--foreground-muted)]">
            <p>
              Results can vary depending on niche, audience demographics, and content strategy. Treat these tips as guidelines and iterate based on your analytics.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
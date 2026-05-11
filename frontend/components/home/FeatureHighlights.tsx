"use client";

import { Zap, Link as LinkIcon, TrendingUp, Brain } from "lucide-react";

const items = [
  {
    title: "Fast public-signal analysis",
    description:
      "Estimate channel monetization likelihood in seconds using visible signals like subscribers, views, and upload activity.",
    icon: Zap,
  },
  {
    title: "Handles and full URLs supported",
    description:
      "Paste a channel handle, username, or full YouTube channel URL and let the tool normalize it automatically.",
    icon: LinkIcon,
  },
  {
    title: "Clean shareable result pages",
    description:
      "Every successful check becomes a clear result page that is easy to revisit, share, and interpret.",
    icon: TrendingUp,
  },
  {
    title: "Built for creators and researchers",
    description:
      "Use it for channel research, creator analysis, niche validation, competitor scanning, or quick monetization estimates.",
    icon: Brain,
  },
] as const;

export default function FeatureHighlights() {
  return (
    <section className="w-full px-6 md:px-10 py-8 md:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="relative min-w-0 rounded-2xl border border-[var(--border)]/80 bg-[var(--card)] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-colors hover:border-[var(--border-strong)]"
            >
              <div className="relative z-10">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background-elevated)]">
                  <item.icon className="h-4.5 w-4.5 text-[var(--brand)]" aria-hidden="true" />
                </div>

                <h3
                  className="text-sm font-semibold text-[var(--foreground)]"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  {item.title}
                </h3>

                <p className="mt-2 text-[13px] leading-5 text-[var(--foreground-muted)]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

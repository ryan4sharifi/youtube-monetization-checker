

import React from "react";
import { DollarSign } from "lucide-react";

interface EarningsData {
  monthlyLow?: number;
  monthlyHigh?: number;
  yearlyLow?: number;
  yearlyHigh?: number;
  views?: number;
}

interface Props {
  data?: EarningsData;
}

function formatCurrency(value?: number) {
  if (!value && value !== 0) return "—";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function EarningsExplanationSection({ data }: Props) {
  return (
    <section className="w-full">
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
          <div className="space-y-4 md:space-y-5">

            {/* Header */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background-elevated)]">
                  <DollarSign className="h-4 w-4 text-[var(--foreground-muted)]" />
                </div>
                <span className="rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-[var(--foreground-muted)]">
                  Earnings
                </span>
              </div>

              <h2 className="text-lg font-semibold tracking-[-0.02em] text-[var(--foreground)] md:text-xl">
                Earnings Estimate Explained
              </h2>

              <p className="text-sm leading-6 text-[var(--foreground-muted)]">
                This estimate is based on publicly available data such as total views, upload activity, and typical YouTube RPM ranges. Actual earnings can vary depending on niche, audience location, and monetization methods.
              </p>
            </div>

            {/* Breakdown Grid */}
            <div className="grid gap-3 sm:grid-cols-2">

              <div className="rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] p-4">
                <p className="text-xs text-[var(--foreground-muted)]">Estimated Monthly Earnings</p>
                <p className="mt-1.5 text-lg font-semibold tracking-[-0.01em] text-[var(--foreground)]">
                  {formatCurrency(data?.monthlyLow)} – {formatCurrency(data?.monthlyHigh)}
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] p-4">
                <p className="text-xs text-[var(--foreground-muted)]">Estimated Yearly Earnings</p>
                <p className="mt-1.5 text-lg font-semibold tracking-[-0.01em] text-[var(--foreground)]">
                  {formatCurrency(data?.yearlyLow)} – {formatCurrency(data?.yearlyHigh)}
                </p>
              </div>

            </div>

            {/* Explanation */}
            <div className="space-y-2.5 text-sm leading-6 text-[var(--foreground-muted)]">
              <p>
                YouTube creators typically earn money through ads, memberships, sponsorships, and other monetization features. The most common metric used is RPM (revenue per 1,000 views), which can vary widely depending on the channel’s audience and content category.
              </p>

              <p>
                For example, finance and business channels often have higher RPMs, while entertainment or gaming channels may earn less per view but make up for it with higher volume.
              </p>

              {data?.views && (
                <p>
                  Based on an estimated {data.views.toLocaleString()} monthly views, this channel’s earnings fall within a typical range depending on audience demographics and content category.
                </p>
              )}

              <p>
                This tool estimates earnings by combining estimated monthly views with typical RPM ranges. These figures should be treated as directional estimates, not exact values.
              </p>
            </div>

          </div>
        </div>
    </section>
  );
}
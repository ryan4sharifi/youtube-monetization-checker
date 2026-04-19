import { DollarSign, BarChart3, TrendingUp, ShieldCheck } from "lucide-react";

type EarningsEstimate = {
  estimated_monthly_views: number;
  low_rpm: number;
  high_rpm: number;
  monthly_low: number;
  monthly_high: number;
  yearly_low: number;
  yearly_high: number;
  confidence: string;
};

type EarningsEstimateCardProps = {
  earnings: EarningsEstimate;
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

function getConfidenceLabel(confidence: string) {
  switch (confidence.toLowerCase()) {
    case "high":
      return "High confidence";
    case "medium":
      return "Medium confidence";
    default:
      return "Estimated range";
  }
}

export default function EarningsEstimateCard({
  earnings,
}: EarningsEstimateCardProps) {
  return (
    <section className="relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm md:p-6">
      <div className="relative z-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--foreground-muted)]">
              <DollarSign className="h-3.5 w-3.5 shrink-0" />
              Earnings estimate
            </div>

            <h2
              className="mt-3 text-xl font-semibold tracking-[-0.03em] md:text-2xl"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Estimated YouTube ad revenue range
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--foreground-muted)]">
              This estimate uses public channel size and a broad RPM range. It is
              helpful for research, but it is not a direct measure of actual
              creator earnings.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 self-start rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1 text-xs font-medium text-[var(--foreground-muted)]">
            <ShieldCheck className="h-4 w-4 shrink-0 text-[var(--brand)]" />
            {getConfidenceLabel(earnings.confidence)}
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="min-w-0 rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] p-4">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)]">
              <DollarSign className="h-5 w-5 text-[var(--brand)]" />
            </div>
            <p className="mt-3 text-xs text-[var(--foreground-muted)]">Monthly range</p>
            <p className="mt-1 text-base font-semibold text-[var(--foreground)] break-words">
              <span className="break-words">{formatCurrency(earnings.monthly_low)} – {formatCurrency(earnings.monthly_high)}</span>
            </p>
          </div>

          <div className="min-w-0 rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] p-4">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)]">
              <TrendingUp className="h-5 w-5 text-[var(--brand)]" />
            </div>
            <p className="mt-3 text-xs text-[var(--foreground-muted)]">Yearly range</p>
            <p className="mt-1 text-base font-semibold text-[var(--foreground)] break-words">
              <span className="break-words">{formatCurrency(earnings.yearly_low)} – {formatCurrency(earnings.yearly_high)}</span>
            </p>
          </div>

          <div className="min-w-0 rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] p-4">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)]">
              <BarChart3 className="h-5 w-5 text-[var(--brand)]" />
            </div>
            <p className="mt-3 text-xs text-[var(--foreground-muted)]">Estimated monthly views</p>
            <p className="mt-1 text-base font-semibold text-[var(--foreground)] break-words">
              <span className="break-words">{formatNumber(earnings.estimated_monthly_views)}</span>
            </p>
          </div>

          <div className="min-w-0 rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] p-4">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)]">
              <TrendingUp className="h-5 w-5 text-[var(--brand)]" />
            </div>
            <p className="mt-3 text-xs text-[var(--foreground-muted)]">Estimated RPM range</p>
            <p className="mt-1 text-base font-semibold text-[var(--foreground)] break-words">
              <span className="break-words">${earnings.low_rpm} – ${earnings.high_rpm}</span>
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] p-4 text-sm leading-6 text-[var(--foreground-muted)]">
          Actual YouTube earnings can vary significantly based on niche, audience
          location, content type, ad suitability, and how many views come from
          Shorts versus long-form videos.
        </div>
      </div>
    </section>
  );
}

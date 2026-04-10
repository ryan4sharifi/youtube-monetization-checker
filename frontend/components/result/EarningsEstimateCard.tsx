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
    <section className="relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)] md:p-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-[-20%] h-40 w-40 rounded-full bg-[color:color-mix(in_srgb,var(--brand)_10%,transparent)] blur-3xl" />
        <div className="absolute bottom-[-28%] right-[-8%] h-48 w-48 rounded-full bg-[color:color-mix(in_srgb,var(--brand)_8%,transparent)] blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand)] md:text-xs">
              <DollarSign className="h-3.5 w-3.5 shrink-0" />
              Earnings estimate
            </div>

            <h2
              className="mt-4 text-2xl font-bold tracking-[-0.03em] text-[var(--foreground)] md:text-3xl"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Estimated YouTube ad revenue range
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--foreground-muted)] md:text-base">
              This estimate uses public channel size and a broad RPM range. It is
              helpful for research, but it is not a direct measure of actual
              creator earnings.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 self-start rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1.5 text-sm font-medium text-[var(--foreground)]">
            <ShieldCheck className="h-4 w-4 shrink-0 text-[var(--brand)]" />
            {getConfidenceLabel(earnings.confidence)}
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[24px] border border-[var(--border)] bg-[var(--background-elevated)] p-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
              <DollarSign className="h-5 w-5 text-[var(--brand)]" />
            </div>
            <p className="mt-4 text-sm text-[var(--foreground-muted)]">Monthly range</p>
            <p className="mt-2 text-xl font-bold tracking-[-0.02em] text-[var(--foreground)]">
              {formatCurrency(earnings.monthly_low)} – {formatCurrency(earnings.monthly_high)}
            </p>
          </div>

          <div className="rounded-[24px] border border-[var(--border)] bg-[var(--background-elevated)] p-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
              <TrendingUp className="h-5 w-5 text-[var(--brand)]" />
            </div>
            <p className="mt-4 text-sm text-[var(--foreground-muted)]">Yearly range</p>
            <p className="mt-2 text-xl font-bold tracking-[-0.02em] text-[var(--foreground)]">
              {formatCurrency(earnings.yearly_low)} – {formatCurrency(earnings.yearly_high)}
            </p>
          </div>

          <div className="rounded-[24px] border border-[var(--border)] bg-[var(--background-elevated)] p-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
              <BarChart3 className="h-5 w-5 text-[var(--brand)]" />
            </div>
            <p className="mt-4 text-sm text-[var(--foreground-muted)]">Estimated monthly views</p>
            <p className="mt-2 text-xl font-bold tracking-[-0.02em] text-[var(--foreground)]">
              {formatNumber(earnings.estimated_monthly_views)}
            </p>
          </div>

          <div className="rounded-[24px] border border-[var(--border)] bg-[var(--background-elevated)] p-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
              <TrendingUp className="h-5 w-5 text-[var(--brand)]" />
            </div>
            <p className="mt-4 text-sm text-[var(--foreground-muted)]">Estimated RPM range</p>
            <p className="mt-2 text-xl font-bold tracking-[-0.02em] text-[var(--foreground)]">
              ${earnings.low_rpm} – ${earnings.high_rpm}
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-[24px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_86%,transparent)] p-4 text-sm leading-7 text-[var(--foreground-muted)] md:p-5">
          Actual YouTube earnings can vary significantly based on niche, audience
          location, content type, ad suitability, and how many views come from
          Shorts versus long-form videos.
        </div>
      </div>
    </section>
  );
}

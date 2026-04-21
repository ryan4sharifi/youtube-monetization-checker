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
  earnings?: EarningsEstimate | null;
  variant?: "default" | "compact";
  compareWith?: EarningsEstimate | null;
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

function formatCurrencyCompact(value?: number | null) {
  if (value === null || value === undefined) return "—";
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(value);
  } catch {
    return formatCurrency(value as number);
  }
}

function formatNumberCompact(value?: number | null) {
  if (value === null || value === undefined) return "—";
  try {
    return new Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(value);
  } catch {
    return formatNumber(value as number);
  }
}

function getMidpoint(low: number, high: number) {
  return (low + high) / 2;
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
  variant = "default",
  compareWith,
}: EarningsEstimateCardProps) {
  const safe = earnings ?? {
    estimated_monthly_views: 0,
    low_rpm: 0,
    high_rpm: 0,
    monthly_low: 0,
    monthly_high: 0,
    yearly_low: 0,
    yearly_high: 0,
    confidence: "low",
  };

  const comparison = compareWith ?? null;

  let differenceLabel: string | null = null;

  if (comparison) {
    const currentMid = getMidpoint(safe.monthly_low, safe.monthly_high);
    const otherMid = getMidpoint(comparison.monthly_low, comparison.monthly_high);
    const diff = currentMid - otherMid;

    if (Math.abs(diff) > 0) {
      const formatted = formatCurrencyCompact(Math.abs(diff));
      differenceLabel = diff > 0
        ? `+${formatted} more per month`
        : `-${formatted} less per month`;
    }
  }

  return (
    <section className={`relative rounded-2xl border border-[var(--border)] bg-[var(--card)] ${variant === "compact" ? "p-4 md:p-5" : "p-5 md:p-6"} shadow-sm`}>
      <div className="relative z-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          {variant !== "compact" && (
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
          )}

          <div className="inline-flex items-center gap-2 self-start rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1 text-xs font-medium text-[var(--foreground-muted)]">
            <ShieldCheck className="h-4 w-4 shrink-0 text-[var(--brand)]" />
            {getConfidenceLabel(safe.confidence)}
          </div>
        </div>

        <div className={`mt-4 grid gap-2 ${variant === "compact" ? "grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-4 gap-3"}`}>
          <div className={`min-w-0 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] ${variant === "compact" ? "p-3" : "p-4"}`}>
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)]">
              <DollarSign className="h-5 w-5 text-[var(--brand)]" />
            </div>
            <p className="mt-3 text-xs text-[var(--foreground-muted)]">Monthly range</p>
            <p className="mt-1 text-sm md:text-base font-semibold text-[var(--foreground)] truncate">
              <span className="whitespace-nowrap tabular-nums" title={`${formatCurrency(safe.monthly_low)} – ${formatCurrency(safe.monthly_high)}`}>
                {formatCurrencyCompact(safe.monthly_low)} – {formatCurrencyCompact(safe.monthly_high)}
              </span>
            </p>
            {differenceLabel && (
              <p className={`mt-1 text-xs font-medium ${differenceLabel.startsWith("+") ? "text-green-500" : "text-[var(--foreground-muted)]"}`}>
                {differenceLabel}
              </p>
            )}
          </div>

          <div className={`min-w-0 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] ${variant === "compact" ? "p-3" : "p-4"}`}>
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)]">
              <TrendingUp className="h-5 w-5 text-[var(--brand)]" />
            </div>
            <p className="mt-3 text-xs text-[var(--foreground-muted)]">Yearly range</p>
            <p className="mt-1 text-sm md:text-base font-semibold text-[var(--foreground)] truncate">
              <span className="whitespace-nowrap tabular-nums" title={`${formatCurrency(safe.yearly_low)} – ${formatCurrency(safe.yearly_high)}`}>
                {formatCurrencyCompact(safe.yearly_low)} – {formatCurrencyCompact(safe.yearly_high)}
              </span>
            </p>
          </div>

          <div className={`min-w-0 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] ${variant === "compact" ? "p-3" : "p-4"}`}>
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)]">
              <BarChart3 className="h-5 w-5 text-[var(--brand)]" />
            </div>
            <p className="mt-3 text-xs text-[var(--foreground-muted)]">Estimated monthly views</p>
            <p className="mt-1 text-sm md:text-base font-semibold text-[var(--foreground)] truncate">
              <span className="whitespace-nowrap tabular-nums" title={formatNumber(safe.estimated_monthly_views)}>
                {formatNumberCompact(safe.estimated_monthly_views)}
              </span>
            </p>
          </div>

          <div className={`min-w-0 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] ${variant === "compact" ? "p-3" : "p-4"}`}>
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)]">
              <TrendingUp className="h-5 w-5 text-[var(--brand)]" />
            </div>
            <p className="mt-3 text-xs text-[var(--foreground-muted)]">Estimated RPM range</p>
            <p className="mt-1 text-sm md:text-base font-semibold text-[var(--foreground)] truncate">
              <span className="whitespace-nowrap tabular-nums" title={`$${safe.low_rpm} – $${safe.high_rpm}`}>
                ${safe.low_rpm} – ${safe.high_rpm}
              </span>
            </p>
          </div>
        </div>

        {variant !== "compact" && (
          <div className="mt-5 rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] p-4 text-sm leading-6 text-[var(--foreground-muted)]">
            Actual YouTube earnings can vary significantly based on niche, audience
            location, content type, ad suitability, and how many views come from
            Shorts versus long-form videos.
          </div>
        )}
      </div>
    </section>
  );
}

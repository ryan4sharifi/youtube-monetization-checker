"use client";

type Score = {
  status: string;
  confidence: number;
};

type Props = {
  score: Score;
};

function getStatusStyles(status: string) {
  switch (status) {
    case "possibly_monetized":
      return {
        label: "Possibly Monetized",
        bg: "var(--success-soft)",
        color: "var(--success)",
      };
    case "likely_not_monetized":
      return {
        label: "Likely Not Monetized",
        bg: "var(--warning-soft)",
        color: "var(--warning)",
      };
    case "insufficient_data":
    default:
      return {
        label: "Insufficient Data",
        bg: "var(--danger-soft)",
        color: "var(--danger)",
      };
  }
}

export default function ScoreCard({ score }: Props) {
  const styles = getStatusStyles(score.status);

  return (
    <div className="w-full rounded-[28px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] p-4 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.12em] text-[var(--foreground-muted)]/90">Status</p>
          <p
            className="mt-2 inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold shadow-[0_6px_18px_rgba(15,23,42,0.06)]"
            style={{
              backgroundColor: styles.bg,
              color: styles.color,
            }}
          >
            {styles.label}
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs uppercase tracking-[0.12em] text-[var(--foreground-muted)]/90">Confidence</p>
          <p className="mt-2 text-xl font-semibold tracking-[-0.02em] text-[var(--foreground)]">
            {score.confidence}%
          </p>
        </div>
      </div>
      <div className="mt-4 w-full">
        <div className="h-2 w-full rounded-full bg-[color:color-mix(in_srgb,var(--background-elevated)_88%,transparent)]">
          <div
            className="h-2 rounded-full bg-[var(--brand)] transition-all duration-500"
            style={{ width: `${Math.min(100, Math.max(0, score.confidence))}%` }}
          />
        </div>
      </div>
    </div>
  );
}
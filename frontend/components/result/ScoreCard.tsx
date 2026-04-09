

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
    <div className="w-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-[var(--shadow-soft)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-[var(--foreground-muted)]">Status</p>
          <p
            className="mt-1 inline-block rounded-full px-3 py-1 text-sm font-semibold"
            style={{
              backgroundColor: styles.bg,
              color: styles.color,
            }}
          >
            {styles.label}
          </p>
        </div>

        <div className="text-right">
          <p className="text-sm text-[var(--foreground-muted)]">Confidence</p>
          <p className="mt-1 text-lg font-semibold">
            {score.confidence}%
          </p>
        </div>
      </div>
    </div>
  );
}
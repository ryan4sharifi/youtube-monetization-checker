

"use client";

type Props = {
  positive_signals: string[];
  negative_signals: string[];
};

export default function SignalsCard({ positive_signals, negative_signals }: Props) {
  return (
    <div className="w-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-[var(--shadow-soft)]">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-semibold text-[var(--foreground)]">
            Positive Signals
          </p>
          {positive_signals.length ? (
            <ul className="ml-5 list-disc text-sm text-[var(--foreground-muted)]">
              {positive_signals.map((s, i) => (
                <li key={i} className="mb-1">{s}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-[var(--foreground-muted)]">No positive signals found.</p>
          )}
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold text-[var(--foreground)]">
            Negative Signals
          </p>
          {negative_signals.length ? (
            <ul className="ml-5 list-disc text-sm text-[var(--foreground-muted)]">
              {negative_signals.map((s, i) => (
                <li key={i} className="mb-1">{s}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-[var(--foreground-muted)]">No negative signals found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
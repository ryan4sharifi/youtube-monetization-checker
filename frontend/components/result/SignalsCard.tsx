"use client";

type Props = {
  positive_signals: string[];
  negative_signals: string[];
};

export default function SignalsCard({ positive_signals, negative_signals }: Props) {
  return (
    <div className="w-full rounded-[28px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)]">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.14em] font-semibold text-[var(--foreground-muted)]/90">
            Positive Signals
          </p>
          {positive_signals.length ? (
            <ul className="space-y-2 text-sm text-[var(--foreground-muted)]/90">
              {positive_signals.map((s, i) => (
                <li key={i} className="flex items-start gap-2 leading-6">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-[var(--foreground-muted)]/90">No signals detected.</p>
          )}
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.14em] font-semibold text-[var(--foreground-muted)]/90">
            Negative Signals
          </p>
          {negative_signals.length ? (
            <ul className="space-y-2 text-sm text-[var(--foreground-muted)]/90">
              {negative_signals.map((s, i) => (
                <li key={i} className="flex items-start gap-2 leading-6">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-[var(--foreground-muted)]/90">No signals detected.</p>
          )}
        </div>
      </div>
    </div>
  );
}
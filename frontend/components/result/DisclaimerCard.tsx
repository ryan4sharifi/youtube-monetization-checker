"use client";

export default function DisclaimerCard() {
  return (
    <div className="w-full rounded-[24px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_92%,transparent)] p-4 text-sm text-[var(--foreground-muted)]/90 shadow-[0_10px_28px_rgba(15,23,42,0.05)] backdrop-blur">
      <p className="text-xs uppercase tracking-[0.14em] font-semibold text-[var(--foreground-muted)]">Disclaimer</p>
      <p className="mt-2 leading-7 text-[var(--foreground-muted)]/90">
        This tool provides an <strong className="text-[var(--foreground)]">estimate</strong> of a channel’s monetization
        status based on publicly available signals such as subscriber count,
        total views, and upload history. It is not affiliated with YouTube and
        cannot guarantee actual monetization status.
      </p>
    </div>
  );
}
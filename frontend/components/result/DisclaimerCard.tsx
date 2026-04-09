

"use client";

export default function DisclaimerCard() {
  return (
    <div className="w-full rounded-2xl border border-[var(--border)] bg-[var(--card-muted)] p-4 text-sm text-[var(--foreground-muted)]">
      <p className="font-medium text-[var(--foreground)]">Disclaimer</p>
      <p className="mt-2 leading-6">
        This tool provides an <strong>estimate</strong> of a channel’s monetization
        status based on publicly available signals such as subscriber count,
        total views, and upload history. It is not affiliated with YouTube and
        cannot guarantee actual monetization status.
      </p>
    </div>
  );
}
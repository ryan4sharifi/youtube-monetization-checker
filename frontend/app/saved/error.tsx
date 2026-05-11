"use client";

import Link from "next/link";

export default function SavedError({ reset }: { reset: () => void }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="rounded-[28px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--foreground-muted)]">
          Saved channels
        </p>
        <h1
          className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          We could not load your saved channels
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--foreground-muted)]">
          Your saved list may be temporarily unavailable. You can try again or
          return to the checker.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex h-10 items-center justify-center rounded-xl bg-[var(--brand)] px-4 text-sm font-medium text-white transition-colors hover:bg-[var(--brand-hover)]"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] px-4 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--border-strong)]"
          >
            Back to checker
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";

export default function CheckError({ reset }: { reset: () => void }) {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="w-full px-6 md:px-10 pt-4 md:pt-6 xl:pt-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[28px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--foreground-muted)]">
              Analysis unavailable
            </p>
            <h1
              className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)] md:text-3xl"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              We could not load this channel result
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--foreground-muted)] md:text-base">
              The channel data may be temporarily unavailable. Try again, check
              another channel, or return to the homepage.
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
      </div>
    </main>
  );
}

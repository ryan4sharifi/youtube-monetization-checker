import React from "react";
import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function RelatedGuidesSection({ guides }: { guides: { title: string; description: string; href: string }[] }) {
  const safeGuides = guides?.length ? guides : [];
  return (
    <section className="w-full">
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
        <div className="space-y-4">

          {/* Header */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background-elevated)]">
                <BookOpen className="h-4 w-4 text-[var(--foreground-muted)]" />
              </div>
              <span className="rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-[var(--foreground-muted)]">
                Guides
              </span>
            </div>

            <h2 className="text-lg font-semibold tracking-[-0.02em] text-[var(--foreground)] md:text-xl">
              Learn More About YouTube Monetization
            </h2>

            <p className="text-sm leading-6 text-[var(--foreground-muted)]">
              Explore detailed guides to better understand how YouTube monetization works, how earnings are calculated, and how to grow your channel.
            </p>
          </div>

          {/* Guides Grid */}
          <div className="grid gap-3 sm:grid-cols-2">
            {safeGuides.length > 0 ? (
              safeGuides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group block rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] p-4 hover:border-[var(--border-strong)]"
                >
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-[var(--foreground)] group-hover:underline">
                      {guide.title}
                    </h3>
                    <p className="text-sm leading-6 text-[var(--foreground-muted)]">
                      {guide.description}
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-sm text-[var(--foreground-muted)]">No guides available yet.</p>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

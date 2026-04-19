"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="w-full py-6 md:py-8">
      <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-6 shadow-sm md:px-6 md:py-8">

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--foreground-muted)]">
            <Sparkles className="h-3.5 w-3.5 shrink-0" />
            Ready to try it?
          </div>

          <h2
            className="mt-3 text-2xl font-semibold tracking-[-0.03em] md:text-3xl"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Check any YouTube channel in seconds
          </h2>

          <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-[var(--foreground-muted)]">
            Get a clean monetization estimate using public signals like subscribers,
            views, upload history, and channel activity — with no login required.
          </p>

          <div className="mt-5 flex flex-col items-center justify-center gap-2 sm:flex-row">
            <Link href="/" className="inline-flex" scroll>
              <Button
                size="lg"
                className="min-w-[180px] h-11 !text-white"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
              >
                Try the checker
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Button>
            </Link>

            <Link
              href="/check/@FoxNews"
              className="inline-flex h-11 min-w-[180px] items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] px-4 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--border-strong)]"
            >
              View example result
            </Link>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-[var(--foreground-muted)]">
            <span className="rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-2.5 py-0.5 text-xs font-medium text-[var(--foreground)]">
              @FoxNews
            </span>
            <span className="rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-2.5 py-0.5 text-xs font-medium text-[var(--foreground)]">
              @WWE
            </span>
            <span className="rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-2.5 py-0.5 text-xs font-medium text-[var(--foreground)]">
              full channel URL
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
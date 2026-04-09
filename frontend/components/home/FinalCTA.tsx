

"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="w-full">
      <div className="relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--card)] px-6 py-10 shadow-[var(--shadow-soft)] md:px-10 md:py-14 xl:px-14">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-8%] top-[-18%] h-52 w-52 rounded-full bg-[color:color-mix(in_srgb,var(--brand)_14%,transparent)] blur-3xl md:h-72 md:w-72" />
          <div className="absolute bottom-[-24%] right-[-10%] h-64 w-64 rounded-full bg-[color:color-mix(in_srgb,var(--brand)_10%,transparent)] blur-3xl md:h-80 md:w-80" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,color-mix(in_srgb,var(--background-elevated)_82%,transparent),transparent_40%,color-mix(in_srgb,var(--brand)_4%,transparent))]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand)] md:text-xs">
            <Sparkles className="h-3.5 w-3.5 shrink-0" />
            Ready to try it?
          </div>

          <h2
            className="mt-5 text-3xl font-bold tracking-[-0.05em] text-[var(--foreground)] md:text-5xl"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Check any YouTube channel in seconds
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--foreground-muted)] md:text-lg md:leading-8">
            Get a clean monetization estimate using public signals like subscribers,
            views, upload history, and channel activity — with no login required.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/" className="inline-flex" scroll>
              <Button
                size="lg"
                className="min-w-[220px] !text-white"
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
              className="inline-flex h-14 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] px-6 text-base font-medium text-[var(--foreground)] transition hover:border-[var(--border-strong)] hover:bg-[var(--card-muted)]"
            >
              View example result
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-[var(--foreground-muted)] md:text-sm">
            <span className="rounded-full bg-[var(--card-muted)] px-3 py-1 font-medium text-[var(--foreground)]">
              @FoxNews
            </span>
            <span className="rounded-full bg-[var(--card-muted)] px-3 py-1 font-medium text-[var(--foreground)]">
              @FoxNews
            </span>
            <span className="rounded-full bg-[var(--card-muted)] px-3 py-1 font-medium text-[var(--foreground)]">
              full channel URL
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
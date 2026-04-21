import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeInfo, CircleHelp, Sparkles } from "lucide-react";
import { siteConfig } from "@/constants/site";

const pageUrl = `${siteConfig.url}/about`;

export const metadata: Metadata = {
  title: `About | ${siteConfig.name}`,
  description:
    "Learn what this YouTube monetization checker does, how it works, and why it exists.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: `About | ${siteConfig.name}`,
    description:
      "Learn what this YouTube monetization checker does, how it works, and why it exists.",
    url: pageUrl,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `About | ${siteConfig.name}`,
    description:
      "Learn what this YouTube monetization checker does, how it works, and why it exists.",
    images: [siteConfig.ogImage],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="w-full px-6 md:px-10 pt-4 md:pt-6 xl:pt-8">
        <div className="mx-auto max-w-6xl">
        <div className="space-y-7 md:space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_94%,transparent)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--brand)] shadow-[0_10px_24px_rgba(15,23,42,0.06)] md:text-xs">
              <BadgeInfo className="h-3.5 w-3.5 shrink-0" />
              About this tool
            </div>

            <h1
              className="max-w-4xl text-3xl font-extrabold tracking-[-0.06em] text-[var(--foreground)] md:text-4xl"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Built to make YouTube monetization research simple
            </h1>

            <p className="max-w-3xl text-base leading-7 text-[var(--foreground-muted)]/90 md:text-lg md:leading-8">
              {siteConfig.name} helps users estimate whether a YouTube channel is
              likely monetized using public signals like subscribers, total views,
              upload history, and visible channel activity.
            </p>
          </div>

          <div className="rounded-[32px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] p-6 shadow-[0_22px_70px_rgba(15,23,42,0.10)] backdrop-blur md:p-8">
            <div className="grid gap-7 md:grid-cols-2 md:gap-8">
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_94%,transparent)] shadow-[0_8px_20px_rgba(15,23,42,0.06)] backdrop-blur">
                  <Sparkles className="h-5 w-5 text-[var(--brand)]" />
                </div>
                <h2
                  className="mt-4 text-2xl font-bold tracking-[-0.04em] text-[var(--foreground)]"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  What this website does
                </h2>
                <p className="mt-3 leading-7 text-[var(--foreground-muted)]/90 md:leading-8">
                  This site is designed for creators, researchers, and curious users
                  who want a fast way to evaluate a YouTube channel’s likely
                  monetization status without needing access to that creator’s
                  private dashboard.
                </p>
              </div>

              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_94%,transparent)] shadow-[0_8px_20px_rgba(15,23,42,0.06)] backdrop-blur">
                  <CircleHelp className="h-5 w-5 text-[var(--brand)]" />
                </div>
                <h2
                  className="mt-4 text-2xl font-bold tracking-[-0.04em] text-[var(--foreground)]"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  What this website does not do
                </h2>
                <p className="mt-3 leading-7 text-[var(--foreground-muted)]/90 md:leading-8">
                  This tool does not provide official confirmation from YouTube.
                  It does not access private creator data, YouTube Studio, or any
                  internal monetization approval systems.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            <div className="rounded-[28px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)]">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--foreground-muted)]/90">Public-signal based</p>
              <p className="mt-3 text-sm leading-7 text-[var(--foreground-muted)]/90 md:leading-8">
                Estimates are based on visible public channel information rather
                than private or internal data.
              </p>
            </div>

            <div className="rounded-[28px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)]">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--foreground-muted)]/90">Built for clarity</p>
              <p className="mt-3 text-sm leading-7 text-[var(--foreground-muted)]/90 md:leading-8">
                The interface is designed to be fast, readable, and useful on both
                desktop and mobile.
              </p>
            </div>

            <div className="rounded-[28px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)]">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--foreground-muted)]/90">Helpful, not absolute</p>
              <p className="mt-3 text-sm leading-7 text-[var(--foreground-muted)]/90 md:leading-8">
                Results are meant to guide research and decision-making, not to act
                as final proof of monetization status.
              </p>
            </div>
          </div>

          <div className="rounded-[32px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] p-6 shadow-[0_22px_70px_rgba(15,23,42,0.10)] backdrop-blur md:p-8">
            <h2
              className="text-2xl font-bold tracking-[-0.04em] text-[var(--foreground)]"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Why it exists
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-[var(--foreground-muted)]/90 md:leading-8">
              There is a lot of confusion around whether a YouTube channel is really
              monetized. This website exists to make that research process cleaner,
              faster, and easier to understand using a simple public-data-based
              estimate.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4 text-sm">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-2xl bg-[var(--brand)] px-5 py-3 font-semibold text-white !text-white shadow-[0_10px_24px_rgba(15,23,42,0.10)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--brand-hover)]"
              >
                Try the checker
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>

              <Link
                href="/disclaimer"
                className="inline-flex items-center gap-2 font-medium text-[var(--brand)] transition duration-200 hover:text-[var(--brand-hover)]"
              >
                Read the disclaimer
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
        </div>
      </div>
    </main>
  );
}

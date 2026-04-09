import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeInfo, CircleHelp, Sparkles } from "lucide-react";
import Section from "@/components/ui/Section";
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
      <Section size="md">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand)] md:text-xs">
              <BadgeInfo className="h-3.5 w-3.5 shrink-0" />
              About this tool
            </div>

            <h1
              className="max-w-4xl text-4xl font-extrabold tracking-[-0.05em] text-[var(--foreground)] md:text-5xl"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Built to make YouTube monetization research simple
            </h1>

            <p className="max-w-3xl text-base leading-7 text-[var(--foreground-muted)] md:text-lg md:leading-8">
              {siteConfig.name} helps users estimate whether a YouTube channel is
              likely monetized using public signals like subscribers, total views,
              upload history, and visible channel activity.
            </p>
          </div>

          <div className="rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)] md:p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] shadow-[0_4px_14px_rgba(15,23,42,0.05)]">
                  <Sparkles className="h-5 w-5 text-[var(--brand)]" />
                </div>
                <h2
                  className="mt-4 text-2xl font-bold tracking-[-0.03em]"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  What this website does
                </h2>
                <p className="mt-3 leading-7 text-[var(--foreground-muted)]">
                  This site is designed for creators, researchers, and curious users
                  who want a fast way to evaluate a YouTube channel’s likely
                  monetization status without needing access to that creator’s
                  private dashboard.
                </p>
              </div>

              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] shadow-[0_4px_14px_rgba(15,23,42,0.05)]">
                  <CircleHelp className="h-5 w-5 text-[var(--brand)]" />
                </div>
                <h2
                  className="mt-4 text-2xl font-bold tracking-[-0.03em]"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  What this website does not do
                </h2>
                <p className="mt-3 leading-7 text-[var(--foreground-muted)]">
                  This tool does not provide official confirmation from YouTube.
                  It does not access private creator data, YouTube Studio, or any
                  internal monetization approval systems.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
              <p className="text-sm font-semibold text-[var(--foreground)]">Public-signal based</p>
              <p className="mt-3 text-sm leading-7 text-[var(--foreground-muted)]">
                Estimates are based on visible public channel information rather
                than private or internal data.
              </p>
            </div>

            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
              <p className="text-sm font-semibold text-[var(--foreground)]">Built for clarity</p>
              <p className="mt-3 text-sm leading-7 text-[var(--foreground-muted)]">
                The interface is designed to be fast, readable, and useful on both
                desktop and mobile.
              </p>
            </div>

            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
              <p className="text-sm font-semibold text-[var(--foreground)]">Helpful, not absolute</p>
              <p className="mt-3 text-sm leading-7 text-[var(--foreground-muted)]">
                Results are meant to guide research and decision-making, not to act
                as final proof of monetization status.
              </p>
            </div>
          </div>

          <div className="rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)] md:p-8">
            <h2
              className="text-2xl font-bold tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Why it exists
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-[var(--foreground-muted)]">
              There is a lot of confusion around whether a YouTube channel is really
              monetized. This website exists to make that research process cleaner,
              faster, and easier to understand using a simple public-data-based
              estimate.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-2xl bg-[var(--brand)] px-5 py-3 font-semibold text-white !text-white transition hover:bg-[var(--brand-hover)]"
              >
                Try the checker
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>

              <Link
                href="/disclaimer"
                className="inline-flex items-center gap-2 font-medium text-[var(--brand)] hover:text-[var(--brand-hover)]"
              >
                Read the disclaimer
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

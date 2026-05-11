import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ArrowRight, ShieldAlert } from "lucide-react";
import { siteConfig } from "@/constants/site";

const pageUrl = `${siteConfig.url}/disclaimer`;

export const metadata: Metadata = {
  title: `Disclaimer | ${siteConfig.name}`,
  description:
    "Understand how IsMonetized estimates YouTube monetization signals, earnings ranges, and public-data limitations.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: `Disclaimer | ${siteConfig.name}`,
    description:
      "Understand how IsMonetized estimates YouTube monetization signals, earnings ranges, and public-data limitations.",
    url: pageUrl,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Disclaimer | ${siteConfig.name}`,
    description:
      "Understand how IsMonetized estimates YouTube monetization signals, earnings ranges, and public-data limitations.",
    images: [siteConfig.ogImage],
  },
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors">
      <div className="w-full px-6 md:px-10 pt-4 md:pt-6 xl:pt-8">
        <div className="mx-auto max-w-6xl space-y-10 md:space-y-12">
          {/* Header */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--foreground-muted)]">
              <ShieldAlert className="h-3.5 w-3.5 opacity-70" />
              Disclaimer
            </div>

            <h1
              className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] md:text-4xl"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Important information about this tool
            </h1>

            <p className="max-w-2xl text-sm leading-6 text-[var(--foreground-muted)] md:text-base">
              This page explains what {siteConfig.shortName} can and cannot
              tell you, how estimates should be interpreted, and why results are
              not official YouTube confirmation.
            </p>
          </div>

          {/* Main Warning */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] p-5 shadow-sm transition-colors md:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)]">
                <AlertTriangle className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-lg font-semibold">No official confirmation</h2>
                <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                  {siteConfig.shortName} does not provide official confirmation
                  of whether a YouTube channel is monetized. Results are
                  estimates based on public signals only. Only YouTube, Google,
                  or the channel owner can confirm official monetization,
                  AdSense, revenue, or YouTube Partner Program status.
                </p>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h3 className="text-base font-semibold">Estimates only</h3>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                Monetization status, confidence scores, reasoning signals, and
                channel insights are estimated from publicly available signals
                such as subscriber count, views, video count, upload activity,
                and visible channel trends. They indicate likelihood, not
                certainty.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h3 className="text-base font-semibold">No access to private data</h3>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                This tool does not access private YouTube Studio data, AdSense
                accounts, YouTube Partner Program records, creator revenue
                accounts, internal platform systems, or private channel
                analytics. It relies on public information only.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h3 className="text-base font-semibold">Earnings are not guaranteed</h3>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                Earnings estimates, RPM ranges, CPM ranges, revenue ranges, and
                performance projections are informational estimates only. Actual
                earnings can vary widely and are not guaranteed.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h3 className="text-base font-semibold">Public signals have limits</h3>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                Public YouTube data may be incomplete, delayed, hidden,
                unavailable, outdated, or inaccurate. Channel owners can change
                settings, remove videos, hide metrics, or update content at any
                time.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h3 className="text-base font-semibold">No platform-performance guarantees</h3>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                {siteConfig.shortName} does not guarantee monetization status,
                revenue, RPM, CPM, views, subscribers, growth, watch time,
                eligibility, policy compliance, or future channel performance.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h3 className="text-base font-semibold">Independent from YouTube and Google</h3>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                {siteConfig.shortName} is independent and is not affiliated
                with, endorsed by, sponsored by, or officially connected to
                YouTube, Google, or Alphabet.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h3 className="text-base font-semibold">Use as one research signal</h3>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                Do not make financial, business, legal, platform, partnership,
                investment, hiring, or content-strategy decisions based only on
                {siteConfig.shortName} estimates. Verify important decisions
                with official sources or qualified advisors.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h3 className="text-base font-semibold">Results may change</h3>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                Channel performance, public metrics, platform policies, and data
                availability can change over time. A result that appears
                reasonable today may become outdated later.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors md:p-6">
            <h2 className="text-xl font-semibold">Try the checker</h2>
            <p className="mt-2 max-w-xl text-sm text-[var(--foreground-muted)]">
              Use the tool to get a fast estimate based on real public data.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand)] px-4 py-2.5 text-sm font-medium text-white !text-white transition-all hover:bg-[var(--brand-hover)] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[color:color-mix(in_srgb,var(--brand)_12%,transparent)]"
              >
                Go to checker
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors focus:outline-none"
              >
                Learn more
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

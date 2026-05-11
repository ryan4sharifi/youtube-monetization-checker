import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { siteConfig } from "@/constants/site";

const pageUrl = `${siteConfig.url}/terms-of-service`;

export const metadata: Metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
  description:
    "Read the terms for using IsMonetized, including estimate limits, public-data usage, and no-affiliation disclosures.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `Terms of Service | ${siteConfig.name}`,
    description:
      "Read the terms for using IsMonetized, including estimate limits, public-data usage, and no-affiliation disclosures.",
    url: pageUrl,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors">
      <div className="w-full px-6 md:px-10 pt-4 md:pt-6 xl:pt-8">
        <div className="mx-auto max-w-6xl space-y-10 md:space-y-12">
          {/* Header */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--foreground-muted)]">
              <FileText className="h-3.5 w-3.5 opacity-70" />
              Terms of Service
            </div>

            <h1
              className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] md:text-4xl"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Terms of use
            </h1>

            <p className="max-w-2xl text-sm leading-6 text-[var(--foreground-muted)] md:text-base">
              By using {siteConfig.shortName}, you agree to these terms. The
              service is designed for public-signal research and informational
              estimates.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h2 className="text-base font-semibold">Use of the service</h2>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                {siteConfig.shortName} helps users research public YouTube
                channels and estimate whether a channel may be monetized. You
                agree to use the service responsibly, only for lawful purposes,
                and without attempting to disrupt, scrape, abuse, or reverse
                engineer the site.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h2 className="text-base font-semibold">Estimates, not official confirmation</h2>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                Monetization status shown by {siteConfig.shortName} is
                estimated from public signals. It is not verified, official, or
                confirmed by YouTube, Google, Alphabet, AdSense, or the YouTube
                Partner Program.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h2 className="text-base font-semibold">No access to private account data</h2>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                {siteConfig.shortName} does not have access to private YouTube
                Studio data, AdSense data, YouTube Partner Program records,
                creator revenue accounts, watch-time dashboards, or internal
                platform decisions.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h2 className="text-base font-semibold">Earnings and performance estimates</h2>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                Earnings, RPM, CPM, view, subscriber, growth, watch-time,
                eligibility, and channel-performance figures are informational
                estimates only. We do not guarantee monetization status, revenue,
                RPM, CPM, views, subscribers, growth, watch time, eligibility, or
                future channel performance.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h2 className="text-base font-semibold">Public data limitations</h2>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                Results depend on publicly available YouTube information and
                other visible signals. Public signals may be incomplete, delayed,
                hidden, unavailable, outdated, or inaccurate, and those limits
                can affect the analysis.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h2 className="text-base font-semibold">Independent product</h2>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                {siteConfig.shortName} is independent and is not affiliated
                with, endorsed by, sponsored by, or officially connected to
                YouTube, Google, or Alphabet.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h2 className="text-base font-semibold">Decisions and responsibility</h2>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                Do not make financial, business, legal, platform, partnership,
                investment, hiring, or content-strategy decisions based only on
                {siteConfig.shortName} estimates. Use the results as one
                research input and verify important decisions with official
                sources or professional guidance when needed.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h2 className="text-base font-semibold">Third-party services</h2>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                The site may rely on third-party services, including public
                YouTube data sources, hosting providers, analytics providers, and
                advertising providers. Those services operate under their own
                terms and policies.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h2 className="text-base font-semibold">Limitation of liability</h2>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                To the fullest extent permitted by law, {siteConfig.shortName}
                is not responsible for losses, claims, or damages that result
                from use of the site, reliance on estimates, unavailable data, or
                changes to public YouTube information.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h2 className="text-base font-semibold">Changes to terms</h2>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                These terms may be updated as the product, data sources, or
                policies change. Continued use of the service means you accept
                the latest version posted on this page.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors md:p-6">
            <h2 className="text-xl font-semibold">Back to the tool</h2>
            <p className="mt-2 max-w-xl text-sm text-[var(--foreground-muted)]">
              Use the checker to estimate monetization based on public data.
            </p>

            <div className="mt-5 flex gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand)] px-4 py-2.5 text-sm font-medium text-white !text-white transition-all hover:bg-[var(--brand-hover)] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[color:color-mix(in_srgb,var(--brand)_12%,transparent)]"
              >
                Try the checker
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

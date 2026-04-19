import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ArrowRight, ShieldAlert } from "lucide-react";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/constants/site";

const pageUrl = `${siteConfig.url}/disclaimer`;

export const metadata: Metadata = {
  title: `Disclaimer | ${siteConfig.name}`,
  description:
    "Understand how this YouTube monetization checker works and its limitations.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: `Disclaimer | ${siteConfig.name}`,
    description:
      "Understand how this YouTube monetization checker works and its limitations.",
    url: pageUrl,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Disclaimer | ${siteConfig.name}`,
    description:
      "Understand how this YouTube monetization checker works and its limitations.",
    images: [siteConfig.ogImage],
  },
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Section size="md">
        <div className="space-y-10 md:space-y-12">
          {/* Header */}
          <div className="space-y-4">
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

            <p className="max-w-2xl text-[15px] leading-7 text-[var(--foreground-muted)] md:text-base">
              This page explains the limitations of {siteConfig.name} and how to
              interpret the results provided by the tool.
            </p>
          </div>

          {/* Main Warning */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] p-6 shadow-sm md:p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)]">
                <AlertTriangle className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-lg font-semibold">No official confirmation</h2>
                <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                  {siteConfig.name} does not provide official confirmation of
                  whether a YouTube channel is monetized. Only YouTube can
                  confirm a channel’s monetization status.
                </p>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-base font-semibold">Estimates only</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                All results are based on publicly available signals such as
                subscriber count, views, upload activity, and visible trends.
                These are used to estimate likelihood, not certainty.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-base font-semibold">No access to private data</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                This tool does not access YouTube Studio, internal systems, or
                any private creator data. It relies strictly on public
                information.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-base font-semibold">Results may change</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                Channel performance changes over time. A channel that appears
                monetized today may not meet requirements later, and vice versa.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-base font-semibold">Use for research only</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                This tool is intended for informational and research purposes. It
                should not be used as definitive proof of monetization status.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm md:p-7">
            <h2 className="text-xl font-semibold">Try the checker</h2>
            <p className="mt-2 max-w-xl text-sm text-[var(--foreground-muted)]">
              Use the tool to get a fast estimate based on real public data.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand)] px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-[var(--brand-hover)] hover:shadow-md"
              >
                Go to checker
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
              >
                Learn more
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
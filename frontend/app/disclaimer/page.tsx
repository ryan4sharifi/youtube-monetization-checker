

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
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand)] md:text-xs">
              <ShieldAlert className="h-3.5 w-3.5 shrink-0" />
              Disclaimer
            </div>

            <h1
              className="max-w-4xl text-4xl font-extrabold tracking-[-0.05em] md:text-5xl"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Important information about this tool
            </h1>

            <p className="max-w-3xl text-base leading-7 text-[var(--foreground-muted)] md:text-lg md:leading-8">
              This page explains the limitations of {siteConfig.name} and how to
              interpret the results provided by the tool.
            </p>
          </div>

          {/* Main Warning */}
          <div className="rounded-[32px] border border-[color:color-mix(in_srgb,var(--brand)_40%,var(--border))] bg-[color:color-mix(in_srgb,var(--brand)_6%,transparent)] p-6 shadow-[var(--shadow-soft)] md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand)] text-white">
                <AlertTriangle className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-xl font-bold">No official confirmation</h2>
                <p className="mt-2 leading-7 text-[var(--foreground-muted)]">
                  {siteConfig.name} does not provide official confirmation of
                  whether a YouTube channel is monetized. Only YouTube can
                  confirm a channel’s monetization status.
                </p>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
              <h3 className="text-lg font-semibold">Estimates only</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--foreground-muted)]">
                All results are based on publicly available signals such as
                subscriber count, views, upload activity, and visible trends.
                These are used to estimate likelihood, not certainty.
              </p>
            </div>

            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
              <h3 className="text-lg font-semibold">No access to private data</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--foreground-muted)]">
                This tool does not access YouTube Studio, internal systems, or
                any private creator data. It relies strictly on public
                information.
              </p>
            </div>

            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
              <h3 className="text-lg font-semibold">Results may change</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--foreground-muted)]">
                Channel performance changes over time. A channel that appears
                monetized today may not meet requirements later, and vice versa.
              </p>
            </div>

            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
              <h3 className="text-lg font-semibold">Use for research only</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--foreground-muted)]">
                This tool is intended for informational and research purposes. It
                should not be used as definitive proof of monetization status.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)] md:p-8">
            <h2 className="text-2xl font-bold">Try the checker</h2>
            <p className="mt-3 max-w-2xl text-[var(--foreground-muted)]">
              Use the tool to get a fast estimate based on real public data.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-2xl bg-[var(--brand)] px-5 py-3 font-semibold text-white !text-white hover:bg-[var(--brand-hover)]"
              >
                Go to checker
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-medium text-[var(--brand)] hover:text-[var(--brand-hover)]"
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
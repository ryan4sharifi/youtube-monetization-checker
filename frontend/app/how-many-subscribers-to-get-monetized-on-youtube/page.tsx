

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, CircleHelp } from "lucide-react";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/constants/site";

const pageUrl = `${siteConfig.url}/how-many-subscribers-to-get-monetized-on-youtube`;

export const metadata: Metadata = {
  title: `How Many Subscribers to Get Monetized on YouTube? | ${siteConfig.name}`,
  description:
    "Learn how many subscribers and watch hours you need to get monetized on YouTube and join the YouTube Partner Program.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `How Many Subscribers to Get Monetized on YouTube?`,
    description:
      "Understand YouTube monetization requirements including subscribers, watch hours, and Shorts views.",
    url: pageUrl,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
    type: "article",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Section size="md">
        <div className="space-y-10">
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
              <Users className="h-3.5 w-3.5" />
              YouTube Monetization Guide
            </div>

            <h1
              className="max-w-4xl text-4xl font-extrabold tracking-[-0.05em] md:text-5xl"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              How many subscribers do you need to get monetized on YouTube?
            </h1>

            <p className="max-w-3xl text-lg text-[var(--foreground-muted)]">
              To get monetized on YouTube, you need to meet specific requirements
              under the YouTube Partner Program (YPP). These include subscriber
              count, watch time, and Shorts views.
            </p>
          </div>

          {/* Requirements */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
            <h2 className="text-2xl font-bold">YouTube monetization requirements</h2>

            <ul className="mt-4 space-y-3 text-[var(--foreground-muted)] leading-7">
              <li>• At least 1,000 subscribers</li>
              <li>• 4,000 public watch hours in the last 12 months</li>
              <li>• OR 10 million Shorts views in the last 90 days</li>
              <li>• Follow YouTube’s monetization policies</li>
              <li>• Have no active community guideline strikes</li>
            </ul>
          </div>

          {/* Explanation */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
              <h3 className="text-lg font-semibold">Subscribers alone are not enough</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--foreground-muted)]">
                Reaching 1,000 subscribers is only one part of the requirement.
                You also need sufficient watch time or Shorts views to qualify.
              </p>
            </div>

            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
              <h3 className="text-lg font-semibold">Shorts monetization path</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--foreground-muted)]">
                Instead of watch hours, you can qualify with 10 million Shorts
                views in the last 90 days.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)] md:p-8">
            <div className="inline-flex items-center gap-2">
              <CircleHelp className="h-5 w-5 text-[var(--brand)]" />
              <h2 className="text-2xl font-bold">Common questions</h2>
            </div>

            <div className="mt-6 space-y-4 text-[var(--foreground-muted)]">
              <p>
                <strong className="text-[var(--foreground)]">Can you get monetized with less than 1,000 subscribers?</strong><br />
                No, 1,000 subscribers is the minimum requirement for full monetization.
              </p>

              <p>
                <strong className="text-[var(--foreground)]">How long does it take to get monetized?</strong><br />
                It varies depending on your growth, content quality, and consistency.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)] md:p-8">
            <h2 className="text-2xl font-bold">Check any channel</h2>
            <p className="mt-3 max-w-2xl text-[var(--foreground-muted)]">
              Use the checker to estimate whether a channel meets monetization requirements.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-2xl bg-[var(--brand)] px-5 py-3 font-semibold text-white !text-white hover:bg-[var(--brand-hover)]"
              >
                Try the checker
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/youtube-partner-program-requirements"
                className="inline-flex items-center gap-2 font-medium text-[var(--brand)] hover:text-[var(--brand-hover)]"
              >
                View requirements guide
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
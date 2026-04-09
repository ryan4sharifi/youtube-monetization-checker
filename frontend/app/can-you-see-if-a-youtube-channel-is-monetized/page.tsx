

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Eye, CircleHelp } from "lucide-react";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/constants/site";

const pageUrl = `${siteConfig.url}/can-you-see-if-a-youtube-channel-is-monetized`;

export const metadata: Metadata = {
  title: `Can You See If a YouTube Channel Is Monetized? | ${siteConfig.name}`,
  description:
    "Learn whether you can tell if a YouTube channel is monetized, what signals to look for, and how to estimate monetization status.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `Can You See If a YouTube Channel Is Monetized?`,
    description:
      "Understand how to estimate if a YouTube channel is monetized using public signals.",
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
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
              <Eye className="h-3.5 w-3.5" />
              YouTube Monetization Guide
            </div>

            <h1 className="max-w-4xl text-4xl font-extrabold tracking-[-0.05em] md:text-5xl">
              Can you see if a YouTube channel is monetized?
            </h1>

            <p className="max-w-3xl text-lg text-[var(--foreground-muted)]">
              Short answer: not directly. YouTube does not publicly display
              whether a channel is monetized, but there are strong signals you
              can use to estimate it.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
            <h2 className="text-2xl font-bold">Why you can’t see monetization</h2>
            <p className="mt-3 text-[var(--foreground-muted)] leading-7">
              YouTube keeps monetization status private. Only the channel owner
              can see whether their channel is approved for the YouTube Partner
              Program (YPP). There is no public badge or label that confirms it.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
            <h2 className="text-2xl font-bold">How to estimate if a channel is monetized</h2>

            <ul className="mt-4 space-y-3 text-[var(--foreground-muted)]">
              <li>• High subscriber count (1,000+)</li>
              <li>• Consistent uploads and activity</li>
              <li>• High total views</li>
              <li>• Ads appearing on videos</li>
              <li>• Professional content and branding</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
            <div className="inline-flex items-center gap-2">
              <CircleHelp className="h-5 w-5 text-[var(--brand)]" />
              <h2 className="text-2xl font-bold">Better way: use a checker</h2>
            </div>

            <p className="mt-3 text-[var(--foreground-muted)] leading-7">
              Instead of guessing manually, you can use tools like {siteConfig.name}
              to analyze public signals and estimate monetization status instantly.
            </p>

            <div className="mt-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand)] px-5 py-3 font-semibold text-white !text-white hover:bg-[var(--brand-hover)]"
              >
                Try the checker
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
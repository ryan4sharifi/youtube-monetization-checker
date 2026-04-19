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
      <Section size="md" className="pt-4 md:pt-6 xl:pt-8">
        <div className="space-y-7 md:space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_94%,transparent)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--brand)] shadow-[0_10px_24px_rgba(15,23,42,0.06)] backdrop-blur">
              <Eye className="h-3.5 w-3.5" />
              YouTube Monetization Guide
            </div>

            <h1
              className="max-w-4xl text-4xl font-extrabold tracking-[-0.06em] text-[var(--foreground)] md:text-5xl xl:text-[3.5rem]"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Can you see if a YouTube channel is monetized?
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-[var(--foreground-muted)]/90">
              Short answer: not directly. YouTube does not publicly display
              whether a channel is monetized, but there are strong signals you
              can use to estimate it.
            </p>
          </div>

          <div className="rounded-[28px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)]">
            <h2
              className="text-2xl font-bold tracking-[-0.04em] text-[var(--foreground)]"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Why you can’t see monetization
            </h2>
            <p className="mt-3 leading-7 text-[var(--foreground-muted)]/90 md:leading-8">
              YouTube keeps monetization status private. Only the channel owner
              can see whether their channel is approved for the YouTube Partner
              Program (YPP). There is no public badge or label that confirms it.
            </p>
          </div>

          <div className="rounded-[28px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)]">
            <h2
              className="text-2xl font-bold tracking-[-0.04em] text-[var(--foreground)]"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              How to estimate if a channel is monetized
            </h2>

            <ul className="mt-4 space-y-3 text-[var(--foreground-muted)]/90">
              <li className="flex items-start gap-3 leading-7 md:leading-8">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                <span>High subscriber count (1,000+)</span>
              </li>
              <li className="flex items-start gap-3 leading-7 md:leading-8">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                <span>Consistent uploads and activity</span>
              </li>
              <li className="flex items-start gap-3 leading-7 md:leading-8">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                <span>High total views</span>
              </li>
              <li className="flex items-start gap-3 leading-7 md:leading-8">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                <span>Ads appearing on videos</span>
              </li>
              <li className="flex items-start gap-3 leading-7 md:leading-8">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                <span>Professional content and branding</span>
              </li>
            </ul>
          </div>

          <div className="rounded-[28px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)]">
            <div className="inline-flex items-center gap-2 text-[var(--foreground)]">
              <CircleHelp className="h-5 w-5 text-[var(--brand)]" />
              <h2
                className="text-2xl font-bold tracking-[-0.04em] text-[var(--foreground)]"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Better way: use a checker
              </h2>
            </div>

            <p className="mt-3 leading-7 text-[var(--foreground-muted)]/90 md:leading-8">
              Instead of guessing manually, you can use tools like {siteConfig.name}
              to analyze public signals and estimate monetization status instantly.
            </p>

            <div className="mt-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-2xl bg-[var(--brand)] px-5 py-3 font-semibold text-white !text-white shadow-[0_10px_24px_rgba(15,23,42,0.10)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--brand-hover)]"
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
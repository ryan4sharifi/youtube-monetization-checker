import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CircleHelp } from "lucide-react";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/constants/site";

const pageUrl = `${siteConfig.url}/faq`;

export const metadata: Metadata = {
  title: `FAQ | ${siteConfig.name}`,
  description:
    "Frequently asked questions about YouTube monetization and how this checker works.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `FAQ | ${siteConfig.name}`,
    description:
      "Frequently asked questions about YouTube monetization and how this checker works.",
    url: pageUrl,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
    type: "article",
  },
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Section size="md">
        <div className="space-y-10">
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--foreground-muted)]">
              <CircleHelp className="h-3.5 w-3.5 opacity-70" />
              FAQ
            </div>

            <h1
              className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] md:text-4xl"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Frequently asked questions
            </h1>

            <p className="max-w-2xl text-[15px] leading-7 text-[var(--foreground-muted)] md:text-base">
              Everything you need to know about YouTube monetization and how this
              tool works.
            </p>
          </div>

          {/* Questions */}
          <div className="space-y-4">
            {[
              {
                q: "Can you see if a YouTube channel is monetized?",
                a: "No. YouTube does not publicly show monetization status. You can only estimate it using signals like subscribers, views, and ads.",
              },
              {
                q: "How many subscribers do you need to get monetized?",
                a: "You typically need at least 1,000 subscribers and 4,000 watch hours in the past 12 months, or 10 million Shorts views.",
              },
              {
                q: "Does this tool give official results?",
                a: "No. This tool provides estimates based on public data. Only YouTube can confirm monetization.",
              },
              {
                q: "Can a channel have ads but not be monetized?",
                a: "Yes. YouTube may show ads on channels that are not in the Partner Program.",
              },
              {
                q: "Why do results sometimes change?",
                a: "Channel performance and activity change over time, which can affect the estimation.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <h2 className="text-base font-semibold">
                  {item.q}
                </h2>
                <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm md:p-7">
            <h2 className="text-xl font-semibold">Still curious?</h2>
            <p className="mt-2 max-w-xl text-sm text-[var(--foreground-muted)]">
              Try the checker and get a quick estimate using real public data.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand)] px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-[var(--brand-hover)] hover:shadow-md"
              >
                Try the checker
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/how-to-tell-if-a-youtube-channel-is-monetized"
                className="inline-flex items-center gap-1 text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
              >
                Read full guide
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

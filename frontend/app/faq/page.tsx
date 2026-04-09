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
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
              <CircleHelp className="h-3.5 w-3.5" />
              FAQ
            </div>

            <h1
              className="max-w-4xl text-4xl font-extrabold tracking-[-0.05em] md:text-5xl"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Frequently asked questions
            </h1>

            <p className="max-w-3xl text-lg text-[var(--foreground-muted)]">
              Everything you need to know about YouTube monetization and how this
              tool works.
            </p>
          </div>

          {/* Questions */}
          <div className="space-y-6">
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
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]"
              >
                <h2 className="text-lg font-semibold text-[var(--foreground)]">
                  {item.q}
                </h2>
                <p className="mt-3 text-[var(--foreground-muted)] leading-7">
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)] md:p-8">
            <h2 className="text-2xl font-bold">Still curious?</h2>
            <p className="mt-3 max-w-2xl text-[var(--foreground-muted)]">
              Try the checker and get a quick estimate using real public data.
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
                href="/how-to-tell-if-a-youtube-channel-is-monetized"
                className="inline-flex items-center gap-2 font-medium text-[var(--brand)] hover:text-[var(--brand-hover)]"
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

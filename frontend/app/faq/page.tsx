import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CircleHelp } from "lucide-react";
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
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors">
      <div className="w-full px-6 md:px-10 pt-4 md:pt-6 xl:pt-8">
        <div className="mx-auto max-w-6xl space-y-10 md:space-y-12">
          {/* Header */}
          <div className="space-y-5 md:space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--foreground-muted)]">
              <CircleHelp className="h-3.5 w-3.5 opacity-70" />
              FAQ
            </div>

            <h1
              className="max-w-3xl text-[32px] md:text-[40px] font-semibold tracking-[-0.035em]"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Frequently asked questions
            </h1>

            <p className="max-w-2xl text-[15px] leading-[1.65] text-[var(--foreground-muted)] md:text-[16px]">
              Straightforward answers to common questions about YouTube monetization,
              what you can and can’t see publicly, and how this checker actually works.
            </p>
          </div>

          {/* Questions */}
          <div className="space-y-4">
            {[
              {
                q: "Can you actually tell if a YouTube channel is monetized?",
                a: "Not directly. YouTube doesn’t display monetization status publicly. What you can do is look at patterns — subscriber count, recent views, upload consistency, and whether ads appear. This tool uses those signals to make an educated estimate.",
              },
              {
                q: "What are the exact requirements to get monetized?",
                a: "Most creators qualify once they hit 1,000 subscribers and 4,000 watch hours over the past 12 months. Alternatively, Shorts creators can qualify with 10 million views over 90 days. Even then, approval isn’t guaranteed — YouTube still reviews the channel.",
              },
              {
                q: "How accurate is this checker?",
                a: "It’s not official, but it’s directionally useful. The goal isn’t to give a yes/no answer with certainty — it’s to give you a realistic sense of whether a channel is likely monetized based on publicly available data.",
              },
              {
                q: "Why do I sometimes see ads on small or inactive channels?",
                a: "YouTube can place ads on videos even if the creator isn’t in the Partner Program. That’s why ads alone aren’t a reliable signal of monetization.",
              },
              {
                q: "Why can results change over time?",
                a: "Channels grow, slow down, or change their upload patterns. A channel that looked inactive last month might suddenly become active again. The estimates adjust based on the latest data.",
              },
              {
                q: "Can a channel lose monetization?",
                a: "Yes. If a channel becomes inactive, violates policies, or no longer meets requirements, monetization can be removed. That’s another reason why status isn’t always stable.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group rounded-[24px] border border-[var(--border)] bg-[var(--card)] p-5 md:p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-[0_14px_40px_rgba(15,23,42,0.10)]"
              >
                <h2 className="text-base font-semibold leading-5">
                  {item.q}
                </h2>
                <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="group rounded-[28px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] p-6 md:p-7 shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]">
            <h2 className="text-xl font-semibold">Still curious?</h2>
            <p className="mt-2 max-w-xl text-[15px] leading-[1.65] text-[var(--foreground-muted)]">
              If you want a quick answer, run a channel through the checker. It gives you a fast, data-based estimate without digging through analytics manually.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand)] px-4 py-2.5 text-sm font-medium text-white !text-white transition-all hover:bg-[var(--brand-hover)] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[color:color-mix(in_srgb,var(--brand)_12%,transparent)]"
              >
                Try the checker
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/guides"
                className="inline-flex items-center gap-1 text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors focus:outline-none"
              >
                Read full guide
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

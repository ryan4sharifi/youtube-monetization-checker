import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CircleHelp } from "lucide-react";
import { siteConfig } from "@/constants/site";

const pageUrl = `${siteConfig.url}/faq`;

const faqItems = [
  {
    q: "Can you actually tell if a YouTube channel is monetized?",
    a: "Not directly. YouTube does not publish another channel's official monetization status. IsMonetized combines subscribers, views, uploads, activity, and other public signals to provide an estimate.",
  },
  {
    q: "What are the current requirements to get monetized?",
    a: "For ad and YouTube Premium revenue, a channel generally needs 1,000 subscribers plus either 4,000 qualified watch hours in 12 months or 10 million qualified Shorts views in 90 days. Expanded YPP access can begin earlier in eligible regions.",
  },
  {
    q: "How accurate is this checker?",
    a: "It is an estimate, not official confirmation. The result is most useful as a consistent summary of public evidence and is less certain when channel data is limited.",
  },
  {
    q: "Why do I sometimes see ads on small or inactive channels?",
    a: "YouTube can place ads on videos without proving that the channel owner receives revenue. That is why ads alone are not a reliable monetization signal.",
  },
  {
    q: "Why can results change over time?",
    a: "Channels grow, slow down, and change their upload patterns. Estimates can change when newer public subscriber, view, video, or activity data becomes available.",
  },
  {
    q: "Can a channel lose monetization?",
    a: "Yes. YouTube continuously reviews channels for policy and program compliance, so access to monetization features can change over time.",
  },
] as const;

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
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

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
            {faqItems.map((item, index) => (
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
                Read full guides
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/methodology"
                className="inline-flex items-center gap-1 text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors focus:outline-none"
              >
                View methodology
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/disclaimer"
                className="inline-flex items-center gap-1 text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors focus:outline-none"
              >
                Read disclaimer
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}

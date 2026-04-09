import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: `YouTube Monetization Checker | ${siteConfig.name}`,
  description:
    "Use this YouTube monetization checker to estimate whether a channel is monetized based on subscribers, views, upload history, and other public signals.",
  alternates: {
    canonical: `${siteConfig.url}/youtube-monetization-checker`,
  },
  openGraph: {
    title: `YouTube Monetization Checker | ${siteConfig.name}`,
    description:
      "Estimate whether a YouTube channel is monetized using public data signals.",
    url: `${siteConfig.url}/youtube-monetization-checker`,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `YouTube Monetization Checker | ${siteConfig.name}`,
    description:
      "Estimate whether a YouTube channel is monetized using public data signals.",
    images: [siteConfig.ogImage],
  },
};

export default function YouTubeMonetizationCheckerPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does this YouTube monetization checker work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "This tool estimates whether a YouTube channel is monetized using public signals such as subscriber count, views, upload history, and channel activity.",
        },
      },
      {
        "@type": "Question",
        name: "Can this tool confirm official YouTube monetization status?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. It provides an estimate only. YouTube does not publicly expose official monetization status for every channel.",
        },
      },
      {
        "@type": "Question",
        name: "Why is the result not always 100% accurate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Because the estimate is based on public data only. Internal YouTube review, policy compliance, and other private signals are not available publicly.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Section size="md">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-medium text-[var(--brand)]">
              YouTube Growth Tool
            </p>

            <h1
              className="text-4xl font-bold tracking-[-0.04em] md:text-5xl"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              YouTube Monetization Checker
            </h1>

            <p className="max-w-3xl text-base leading-7 text-[var(--foreground-muted)] md:text-lg">
              Use this page to understand how a YouTube monetization checker
              works and estimate whether a channel is monetized based on public
              signals like subscribers, total views, and upload history.
            </p>

            <div className="pt-2">
              <Link
                href="/"
                className="inline-flex items-center rounded-xl bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--brand-hover)] !text-white"
              >
                Try the checker
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
            <h2
              className="text-2xl font-bold tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              What is a YouTube monetization checker?
            </h2>
            <p className="mt-3 leading-7 text-[var(--foreground-muted)]">
              A YouTube monetization checker is a tool that estimates whether a
              YouTube channel appears likely to be monetized. Since YouTube does
              not publicly expose a universal monetization status field for all
              channels, the best approach is to evaluate public data and infer
              likelihood from visible signals.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
              <h2
                className="text-xl font-bold tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Signals this tool uses
              </h2>
              <ul className="mt-4 ml-5 list-disc space-y-2 leading-7 text-[var(--foreground-muted)]">
                <li>Subscriber count</li>
                <li>Total channel views</li>
                <li>Upload history</li>
                <li>Video count</li>
                <li>General public channel activity</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
              <h2
                className="text-xl font-bold tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Why results are estimates
              </h2>
              <p className="mt-3 leading-7 text-[var(--foreground-muted)]">
                Public data can suggest whether a channel is likely monetized,
                but it cannot confirm internal YouTube review outcomes,
                monetization eligibility in every region, or private creator-side
                signals.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
            <h2
              className="text-2xl font-bold tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Why creators and researchers use this tool
            </h2>
            <p className="mt-3 leading-7 text-[var(--foreground-muted)]">
              This kind of checker is useful for competitive research, creator
              analysis, niche validation, and general curiosity. It helps users
              estimate channel status quickly without requiring login access to
              the creator’s account.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
            <h2
              className="text-2xl font-bold tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Frequently asked questions
            </h2>

            <div className="mt-5 space-y-5">
              <div>
                <h3 className="text-base font-semibold">
                  How does this YouTube monetization checker work?
                </h3>
                <p className="mt-2 leading-7 text-[var(--foreground-muted)]">
                  It estimates monetization likelihood using public signals like
                  subscribers, views, and upload history.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold">
                  Can it confirm official monetization status?
                </h3>
                <p className="mt-2 leading-7 text-[var(--foreground-muted)]">
                  No. It provides an estimate only and does not have access to
                  YouTube’s internal approval systems.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold">
                  Why might the result be wrong?
                </h3>
                <p className="mt-2 leading-7 text-[var(--foreground-muted)]">
                  Because public data is incomplete. A channel may look eligible
                  publicly but still not be approved, or may be monetized while
                  some useful signals are not visible.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--foreground-muted)]">
            <Link
              href="/"
              className="font-medium text-[var(--brand)] hover:text-[var(--brand-hover)]"
            >
              Try the checker
            </Link>
            <span>•</span>
            <Link
              href="/check/@FoxNews"
              className="font-medium text-[var(--brand)] hover:text-[var(--brand-hover)]"
            >
              See an example result
            </Link>
          </div>
        </div>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
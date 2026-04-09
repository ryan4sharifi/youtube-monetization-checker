import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/constants/site";

const pageUrl = `${siteConfig.url}/how-to-tell-if-a-youtube-channel-is-monetized`;

export const metadata: Metadata = {
  title: `How to Tell If a YouTube Channel Is Monetized | ${siteConfig.name}`,
  description:
    "Learn how to tell if a YouTube channel is monetized using public signals like subscribers, views, upload history, ads, and channel activity.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: `How to Tell If a YouTube Channel Is Monetized | ${siteConfig.name}`,
    description:
      "A practical guide to estimating whether a YouTube channel is monetized using public data.",
    url: pageUrl,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `How to Tell If a YouTube Channel Is Monetized | ${siteConfig.name}`,
    description:
      "A practical guide to estimating whether a YouTube channel is monetized using public data.",
    images: [siteConfig.ogImage],
  },
};

export default function HowToTellIfChannelIsMonetizedPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Tell If a YouTube Channel Is Monetized",
    description:
      "Learn how to estimate whether a YouTube channel is monetized using public signals.",
    author: {
      "@type": "Person",
      name: siteConfig.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    mainEntityOfPage: pageUrl,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can you tell if a YouTube channel is monetized just by looking at it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not with complete certainty. You can estimate monetization likelihood using public signals like subscribers, views, upload activity, and whether ads appear, but YouTube does not provide a public monetization status for every channel.",
        },
      },
      {
        "@type": "Question",
        name: "Do ads always mean a channel is monetized?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Ads can appear on some videos even when the creator is not receiving revenue in the way viewers assume. Ads are only one signal and should not be treated as definitive proof.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best way to estimate whether a channel is monetized?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The best approach is to combine multiple public signals such as subscriber count, total views, upload history, consistency, and observable monetization indicators, then treat the result as an estimate rather than a confirmed fact.",
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
              YouTube Monetization Guide
            </p>

            <h1
              className="text-4xl font-bold tracking-[-0.04em] md:text-5xl"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              How to Tell If a YouTube Channel Is Monetized
            </h1>

            <p className="max-w-3xl text-base leading-7 text-[var(--foreground-muted)] md:text-lg">
              If you are wondering how to tell if a YouTube channel is monetized,
              the short answer is that you usually cannot know with perfect
              certainty from public data alone. But you can make a strong estimate
              by looking at a few visible signals.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
            <h2
              className="text-2xl font-bold tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              The short answer
            </h2>
            <p className="mt-3 leading-7 text-[var(--foreground-muted)]">
              You cannot always confirm whether a channel is monetized just by
              visiting it, because YouTube does not expose a universal public
              yes-or-no monetization field. The most practical approach is to
              estimate monetization based on public data like subscriber count,
              total views, upload history, and channel activity.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
              <h2
                className="text-xl font-bold tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Signals that suggest monetization
              </h2>
              <ul className="mt-4 ml-5 list-disc space-y-2 leading-7 text-[var(--foreground-muted)]">
                <li>A strong subscriber count</li>
                <li>Substantial total channel views</li>
                <li>Consistent upload history</li>
                <li>Regular public channel activity</li>
                <li>Visible signs that the creator is treating the channel like a business</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
              <h2
                className="text-xl font-bold tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Signals that are weaker than people think
              </h2>
              <ul className="mt-4 ml-5 list-disc space-y-2 leading-7 text-[var(--foreground-muted)]">
                <li>Seeing ads on one video</li>
                <li>A large subscriber count by itself</li>
                <li>One viral video</li>
                <li>High views without consistent uploads</li>
                <li>Assuming every popular channel is monetized</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
            <h2
              className="text-2xl font-bold tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              A practical way to estimate monetization
            </h2>
            <div className="mt-4 space-y-4 text-[var(--foreground-muted)]">
              <p className="leading-7">
                Start with the public numbers: subscribers, total views, and video
                count. Then look at how active the channel is. A channel with a
                healthy upload history and meaningful audience size is more likely
                to be monetized than a channel that has only one spike in traffic.
              </p>
              <p className="leading-7">
                After that, look at the overall quality and consistency of the
                content. Channels that appear active, organized, and audience-focused
                are generally stronger candidates than abandoned or irregular channels.
              </p>
              <p className="leading-7">
                The key is to combine several public indicators instead of relying
                on one clue. That gives you a better estimate.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
            <h2
              className="text-2xl font-bold tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Why no public method is perfect
            </h2>
            <p className="mt-3 leading-7 text-[var(--foreground-muted)]">
              YouTube monetization depends on more than public numbers. Approval,
              policy compliance, review decisions, and creator-side account status
              are not all publicly visible. That means any tool or manual method
              should be treated as an estimate rather than final proof.
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
                  Can you tell if a YouTube channel is monetized just by looking at it?
                </h3>
                <p className="mt-2 leading-7 text-[var(--foreground-muted)]">
                  Not with complete certainty. You can only estimate using public
                  signals.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold">
                  Do ads always mean a channel is monetized?
                </h3>
                <p className="mt-2 leading-7 text-[var(--foreground-muted)]">
                  No. Ads are one clue, but they are not definitive proof of
                  monetization status.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold">
                  What is the best way to estimate whether a channel is monetized?
                </h3>
                <p className="mt-2 leading-7 text-[var(--foreground-muted)]">
                  Combine multiple public signals like subscribers, views, upload
                  history, and channel activity, then treat the result as an
                  estimate.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--foreground-muted)]">
            <Link
              href="/youtube-monetization-checker"
              className="font-medium text-[var(--brand)] hover:text-[var(--brand-hover)]"
            >
              YouTube monetization checker
            </Link>
            <span>•</span>
            <Link
              href="/"
              className="font-medium text-[var(--brand)] hover:text-[var(--brand-hover)]"
            >
              Try the tool
            </Link>
            <span>•</span>
            <Link
              href="/check/@FoxNews"
              className="font-medium text-[var(--brand)] hover:text-[var(--brand-hover)]"
            >
              Example result
            </Link>
          </div>
        </div>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
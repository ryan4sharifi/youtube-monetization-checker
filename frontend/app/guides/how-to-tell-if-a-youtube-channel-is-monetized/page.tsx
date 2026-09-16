import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/constants/site";
import GuideHero from "@/components/guides/GuideHero";
import GuideSection from "@/components/guides/GuideSection";
import GuideList from "@/components/guides/GuideList";
import GuideCTA from "@/components/guides/GuideCTA";
import { Eye } from "lucide-react";

const pageUrl = `${siteConfig.url}/guides/how-to-tell-if-a-youtube-channel-is-monetized`;

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
      "@type": "Organization",
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
          text: "Not exactly. You can make a strong estimate, but there is no way to confirm monetization status with 100% certainty using public data.",
        },
      },
      {
        "@type": "Question",
        name: "Do ads always mean a channel is monetized?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Ads are only one signal and can sometimes appear even when creators are not earning in the way viewers assume.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best way to estimate whether a channel is monetized?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The most reliable approach is to combine multiple signals — such as subscribers, views, activity, and consistency — and interpret them together rather than in isolation.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="w-full px-6 md:px-10 pt-4 md:pt-6 xl:pt-8">
        <div className="mx-auto max-w-6xl space-y-7 md:space-y-8">
          <GuideHero
            eyebrow="YouTube Monetization Guide"
            icon={<Eye />}
            title="How to Tell If a YouTube Channel Is Monetized"
            description="Most people assume you can easily tell if a YouTube channel is monetized — but in reality, there’s no clear label or indicator. The only way to figure it out is by reading between the lines and analyzing a combination of public signals."
          />

          <GuideSection title="The short answer">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              YouTube does not provide a simple yes-or-no indicator for monetization. There’s no badge or visible status that confirms it. Instead, monetization depends on internal factors like watch time, policy compliance, and account standing — none of which are fully public.
            </p>
          </GuideSection>

          <GuideSection title="Signals that suggest monetization">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              These signals don’t guarantee monetization, but when they appear together, they strongly suggest a channel is likely earning.
            </p>

            <GuideList
              items={[
                "Channels that have passed 1,000 subscribers and continue growing are more likely to qualify",
                "Consistent view volume indicates real audience demand",
                "Active channels are more likely to be monetized than inactive ones",
                "Engagement signals a healthy and active audience",
                "Structured content, branding, and consistency often indicate monetization intent",
              ]}
            />
          </GuideSection>

          <GuideSection title="Signal strength: what to trust most">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              The strongest estimates come from combining several independent
              signals. A channel with one impressive number can still be
              misleading, while a channel with steady strength across multiple
              areas is easier to evaluate.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-[var(--border)]">
              <table className="min-w-full divide-y divide-[var(--border)] text-sm">
                <thead className="bg-[var(--background-elevated)] text-left text-xs uppercase tracking-[0.12em] text-[var(--foreground-muted)]">
                  <tr>
                    <th className="px-4 py-3 font-medium">Signal</th>
                    <th className="px-4 py-3 font-medium">Why it matters</th>
                    <th className="px-4 py-3 font-medium">How to read it</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)] bg-[var(--card)]">
                  {[
                    ["Subscribers", "Shows scale and eligibility context", "Useful, but weak without views and activity"],
                    ["Total views", "Shows lifetime audience demand", "Stronger when paired with recent uploads"],
                    ["Video count", "Shows publishing depth", "A deep library can produce long-tail views"],
                    ["Recent uploads", "Shows current activity", "Inactive channels are harder to evaluate"],
                    ["Ads observed", "Can suggest ad inventory", "Never treat ads alone as proof"],
                  ].map(([signal, why, read]) => (
                    <tr key={signal}>
                      <td className="px-4 py-3 font-medium text-[var(--foreground)]">{signal}</td>
                      <td className="px-4 py-3 text-[var(--foreground-muted)]">{why}</td>
                      <td className="px-4 py-3 text-[var(--foreground-muted)]">{read}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GuideSection>

          <GuideSection title="Signals that are weaker than people think">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              These are commonly misunderstood signals that can be misleading when viewed in isolation.
            </p>

            <GuideList
              items={[
                "Ads alone don’t confirm monetization",
                "Subscribers without engagement don’t guarantee revenue",
                "A single spike doesn’t reflect consistent earnings potential",
                "Irregular channels are less reliable indicators",
                "Popularity doesn’t always equal monetization",
              ]}
            />
          </GuideSection>

          <GuideSection title="A practical way to estimate monetization">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              Start with the fundamentals: subscriber count, total views, and overall content volume. Then evaluate consistency. Channels that grow steadily and publish regularly are far more likely to be monetized than those with irregular activity.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              Next, look at engagement and content quality. Channels that keep viewers watching and returning tend to perform better in monetization programs.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              The key is to combine multiple signals instead of relying on a single metric. No one data point tells the full story.
            </p>
          </GuideSection>

          <GuideSection title="Example: why one metric is not enough">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              Imagine two channels with 100,000 subscribers. Channel A has 400
              videos, steady uploads, and most recent videos reach 20,000 views.
              Channel B has 12 old videos, no uploads in a year, and most views
              came from one viral clip. Channel A is much easier to classify as
              commercially active, even though both channels have the same
              subscriber count.
            </p>
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              This is why IsMonetized looks at public signals together. You can
              read the full scoring approach on the{" "}
              <Link
                href="/methodology"
                className="font-medium text-[var(--brand)] hover:text-[var(--brand-hover)]"
              >
                methodology page
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Why no public method is perfect">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              Even the best estimates have limitations. YouTube’s monetization decisions involve internal reviews, policy checks, and account-level factors that are not publicly visible.
            </p>
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              IsMonetized is independent and is not affiliated with, endorsed by,
              sponsored by, or officially connected to YouTube, Google, or
              Alphabet. The checker estimates likelihood from public signals; it
              does not confirm official YouTube Partner Program status.
            </p>
          </GuideSection>

          <GuideSection title="Common questions">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              <strong className="text-[var(--foreground)]">Can you tell if a YouTube channel is monetized just by looking at it?</strong><br />
              Not exactly. You can make a strong estimate, but there is no way to confirm monetization status with 100% certainty using public data.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              <strong className="text-[var(--foreground)]">Do ads always mean a channel is monetized?</strong><br />
              No. Ads are only one signal and can sometimes appear even when creators are not earning in the way viewers assume.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              <strong className="text-[var(--foreground)]">What is the best way to estimate whether a channel is monetized?</strong><br />
              The most reliable approach is to combine multiple signals — such as subscribers, views, activity, and consistency — and interpret them together.
            </p>
          </GuideSection>

          <GuideCTA />
        </div>
      </div>

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

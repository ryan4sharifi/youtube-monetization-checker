import type { Metadata } from "next";
import Section from "@/components/ui/Section";
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
      <Section size="md">
        <div className="space-y-7 md:space-y-8">
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

          <GuideSection title="Why no public method is perfect">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              Even the best estimates have limitations. YouTube’s monetization decisions involve internal reviews, policy checks, and account-level factors that are not publicly visible.
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
import type { Metadata } from "next";
import { siteConfig } from "@/constants/site";
import GuideHero from "@/components/guides/GuideHero";
import GuideSection from "@/components/guides/GuideSection";
import GuideList from "@/components/guides/GuideList";
import GuideCTA from "@/components/guides/GuideCTA";
import { Zap } from "lucide-react";


export const metadata: Metadata = {
  title: `YouTube Monetization Checker | ${siteConfig.name}`,
  description:
    "Use this YouTube monetization checker to estimate whether a channel is monetized based on subscribers, views, upload history, and other public signals.",
  alternates: {
    canonical: `${siteConfig.url}/guides/youtube-monetization-checker`,
  },
  openGraph: {
    title: `YouTube Monetization Checker | ${siteConfig.name}`,
    description:
      "Estimate whether a YouTube channel is monetized using public data signals.",
    url: `${siteConfig.url}/guides/youtube-monetization-checker`,
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
          text: "It analyzes public signals like subscribers, views, and activity, then combines them to estimate whether a channel is likely monetized.",
        },
      },
      {
        "@type": "Question",
        name: "Can this tool confirm official YouTube monetization status?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. It cannot confirm official monetization status because YouTube does not expose that information publicly.",
        },
      },
      {
        "@type": "Question",
        name: "Why is the result not always 100% accurate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Because monetization depends on internal factors that are not publicly available. Public signals can be strong indicators, but they are not definitive.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors">
      <div className="w-full px-6 md:px-10 pt-4 md:pt-6 xl:pt-8">
        <div className="mx-auto max-w-6xl space-y-7 md:space-y-8">
          <GuideHero
            eyebrow="YouTube Tool"
            icon={<Zap />}
            title="YouTube Monetization Checker"
            description="Most people assume a YouTube monetization checker just looks at subscriber count — but that’s not how it works. A reliable estimate comes from combining multiple signals like views, activity, and consistency to understand whether a channel is actually earning."
          />

          <GuideSection title="What is a YouTube monetization checker?">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              A YouTube monetization checker is a tool that estimates whether a channel is likely monetized by analyzing public data. Since YouTube does not provide a visible monetization status, the only practical approach is to evaluate patterns in subscriber growth, views, and activity.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              The key is not any single metric — it’s how multiple signals align. Channels that show consistent growth and engagement are far more likely to be monetized than those with isolated spikes.
            </p>
          </GuideSection>

          <GuideSection title="Signals this tool uses">
            <GuideList
              items={[
                "Subscriber growth helps determine eligibility but not actual monetization",
                "View volume indicates demand and audience reach",
                "Upload consistency shows whether a channel is active",
                "Content volume provides context for growth",
                "Engagement reflects audience quality and behavior",
              ]}
            />
          </GuideSection>

          <GuideSection title="Why results are estimates">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              Public data can strongly suggest monetization, but it can never confirm it. YouTube’s approval process includes internal reviews, policy checks, and account-level factors that are not publicly visible.
            </p>
          </GuideSection>

          <GuideSection title="Why people use this tool">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              This type of tool is commonly used for competitive research, niche validation, and evaluating channel potential. Instead of manually analyzing multiple metrics, it provides a quick, structured way to understand whether a channel is likely monetized.
            </p>
          </GuideSection>

          <GuideSection title="Common questions">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              <strong className="text-[var(--foreground)]">How does this checker work?</strong><br />
              It analyzes public signals like subscribers, views, and activity, then combines them to estimate monetization likelihood.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              <strong className="text-[var(--foreground)]">Can it confirm monetization?</strong><br />
              No. YouTube does not expose monetization status publicly.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              <strong className="text-[var(--foreground)]">Why is it not always accurate?</strong><br />
              Because monetization depends on internal factors that are not publicly visible.
            </p>
          </GuideSection>

          <GuideCTA />
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
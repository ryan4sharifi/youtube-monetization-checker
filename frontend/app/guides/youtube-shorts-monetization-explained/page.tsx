

import type { Metadata } from "next";
import { siteConfig } from "@/constants/site";
import GuideHero from "@/components/guides/GuideHero";
import GuideSection from "@/components/guides/GuideSection";
import GuideList from "@/components/guides/GuideList";
import GuideCTA from "@/components/guides/GuideCTA";
import { PlaySquare } from "lucide-react";

const pageUrl = `${siteConfig.url}/guides/youtube-shorts-monetization-explained`;

export const metadata: Metadata = {
  title: "YouTube Shorts Monetization Explained (How It Actually Pays)",
  description:
    "Understand how YouTube Shorts monetization works and how much creators can realistically earn from Shorts.",
  alternates: { canonical: pageUrl },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="w-full px-6 md:px-10 pt-4 md:pt-6 xl:pt-8">
        <div className="mx-auto max-w-6xl space-y-7 md:space-y-8">
          <GuideHero
            eyebrow="YouTube Shorts Guide"
            icon={<PlaySquare className="h-4 w-4" />}
            title="YouTube Shorts monetization explained"
            description="Shorts have exploded in popularity, but the way they make money is very different from regular YouTube videos. A lot of creators get confused because the numbers don’t always match what they expect."
          />

          <GuideSection title="The short answer">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              YouTube Shorts earn money through a shared ad revenue pool. Instead of ads running directly on your video, revenue is distributed based on your share of total Shorts views.
            </p>
          </GuideSection>

          <GuideSection title="How Shorts monetization actually works">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              Ads appear between Shorts in the feed. YouTube collects that revenue, then distributes a portion of it to creators based on how much their content contributes to total views.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              After that, YouTube takes its share, and the rest goes to creators.
            </p>
          </GuideSection>

          <GuideSection title="Why Shorts RPM is lower">
            <GuideList
              items={[
                "No direct ads on individual videos",
                "Revenue is shared across many creators",
                "Short watch time compared to long videos",
                "Lower advertiser intent in short-form content",
              ]}
            />
          </GuideSection>

          <GuideSection title="How much Shorts typically pay">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              Shorts RPM is usually much lower than long-form content. Many creators see anywhere from $0.02 to $0.10 per 1,000 views, though it can vary depending on audience and region.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              That means millions of views are often needed to generate meaningful ad revenue from Shorts alone.
            </p>
          </GuideSection>

          <GuideSection title="Where Shorts can still be powerful">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              Even though ad revenue is lower, Shorts are extremely effective for growth. They can bring in subscribers, increase visibility, and drive traffic to long-form videos or other income sources.
            </p>

            <GuideList
              items={[
                "Growing your audience quickly",
                "Driving traffic to longer videos",
                "Promoting products or services",
                "Building brand awareness",
              ]}
            />
          </GuideSection>

          <GuideSection title="Real example">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              A creator might get 1 million views on a Short and earn only a small amount from ads, but gain thousands of subscribers. Those subscribers can later generate much higher earnings through long-form videos, sponsorships, or products.
            </p>
          </GuideSection>

          <GuideSection title="Should you rely on Shorts for income?">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              Shorts alone usually aren’t enough for consistent income. They work best as part of a broader strategy — helping you grow faster while long-form content and other revenue streams generate most of the earnings.
            </p>
          </GuideSection>

          <GuideSection title="Common questions">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              <strong className="text-[var(--foreground)]">Do Shorts pay per view?</strong><br />
              Not directly. Revenue comes from the shared ad pool, not individual views.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              <strong className="text-[var(--foreground)]">Can Shorts make real money?</strong><br />
              Yes, but usually at scale. They are more effective for growth than direct ad revenue.
            </p>
          </GuideSection>

          <GuideCTA />
        </div>
      </div>
    </main>
  );
}

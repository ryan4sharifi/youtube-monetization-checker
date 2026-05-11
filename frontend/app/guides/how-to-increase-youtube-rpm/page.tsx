import type { Metadata } from "next";
import { siteConfig } from "@/constants/site";
import GuideHero from "@/components/guides/GuideHero";
import GuideSection from "@/components/guides/GuideSection";
import GuideList from "@/components/guides/GuideList";
import GuideCTA from "@/components/guides/GuideCTA";
import { TrendingUp } from "lucide-react";

const pageUrl = `${siteConfig.url}/guides/how-to-increase-youtube-rpm`;

export const metadata: Metadata = {
  title: "How to Increase Your YouTube RPM (Practical Tips)",
  description:
    "Learn practical ways to increase your YouTube RPM without relying only on more views.",
  alternates: { canonical: pageUrl },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="w-full px-6 md:px-10 pt-4 md:pt-6 xl:pt-8">
        <div className="mx-auto max-w-6xl space-y-7 md:space-y-8">
          <GuideHero
            eyebrow="YouTube Earnings Guide"
            icon={<TrendingUp className="h-4 w-4" />}
            title="How to increase your YouTube RPM"
            description="Most creators focus on getting more views. But in many cases, increasing your RPM can have a bigger impact on revenue than doubling your views. The key is understanding what actually influences how much each view is worth."
          />

          <GuideSection title="The short answer">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              RPM increases when your content attracts a more valuable audience and creates more opportunities for ads. This usually comes down to niche, viewer location, video structure, and how long people stay engaged.
            </p>
          </GuideSection>

          <GuideSection title="Focus on higher-value topics">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              Some topics naturally earn more because advertisers are willing to pay more to reach those viewers. Shifting even part of your content toward higher-value areas can increase RPM without changing your overall channel.
            </p>

            <GuideList
              items={[
                "Finance, investing, and saving money",
                "Business and entrepreneurship",
                "Software, tools, and SaaS",
                "Career growth and education",
              ]}
            />
          </GuideSection>

          <GuideSection title="Target the right audience">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              Where your viewers are located matters. Traffic from countries like the US, UK, and Canada tends to generate higher ad rates compared to lower-income regions.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              You don’t control this directly, but your language, examples, and topics can influence who your content attracts.
            </p>
          </GuideSection>

          <GuideSection title="Make videos that allow more ads">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              Longer videos can include more ad placements. That doesn’t mean stretching content — it means structuring videos so they naturally hold attention for longer.
            </p>

            <GuideList
              items={[
                "Aim for videos over 8 minutes when it makes sense",
                "Use clear sections to keep viewers engaged",
                "Avoid filler — focus on useful content",
              ]}
            />
          </GuideSection>

          <GuideSection title="Improve retention and watch time">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              Higher retention means more ads can be shown and better performance overall. Even small improvements in watch time can increase RPM over time.
            </p>

            <GuideList
              items={[
                "Get to the point quickly",
                "Remove unnecessary intros",
                "Keep pacing tight",
                "Deliver on the title without dragging",
              ]}
            />
          </GuideSection>

          <GuideSection title="Think beyond ads">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              RPM is only one part of revenue. Many creators earn more from sponsorships, affiliates, and products than ads alone. Increasing RPM is helpful, but it shouldn’t be your only focus.
            </p>
          </GuideSection>

          <GuideSection title="Real example">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              A creator who shifts from general entertainment content to simple “how to” videos about software tools might see RPM increase from $2–$3 to $6–$10 without changing upload frequency.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              The views didn’t change much — the audience value did.
            </p>
          </GuideSection>

          <GuideSection title="Common questions">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              <strong className="text-[var(--foreground)]">Is RPM more important than views?</strong><br />
              Both matter, but improving RPM can sometimes be faster than getting more views.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              <strong className="text-[var(--foreground)]">Can RPM change over time?</strong><br />
              Yes. It can fluctuate based on season, audience, and content direction.
            </p>
          </GuideSection>

          <GuideCTA />
        </div>
      </div>
    </main>
  );
}

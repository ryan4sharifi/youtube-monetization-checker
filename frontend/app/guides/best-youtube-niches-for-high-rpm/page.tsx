

import type { Metadata } from "next";
import { siteConfig } from "@/constants/site";
import GuideHero from "@/components/guides/GuideHero";
import GuideSection from "@/components/guides/GuideSection";
import GuideList from "@/components/guides/GuideList";
import GuideCTA from "@/components/guides/GuideCTA";
import { DollarSign } from "lucide-react";

const pageUrl = `${siteConfig.url}/guides/best-youtube-niches-for-high-rpm`;

export const metadata: Metadata = {
  title: "Best YouTube Niches for High RPM (Highest Paying Topics)",
  description:
    "Discover the highest paying YouTube niches and why some channels earn significantly more per view than others.",
  alternates: { canonical: pageUrl },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="w-full px-6 md:px-10 pt-4 md:pt-6 xl:pt-8">
        <div className="mx-auto max-w-6xl space-y-7 md:space-y-8">
          <GuideHero
            eyebrow="YouTube Earnings Guide"
            icon={<DollarSign className="h-4 w-4" />}
            title="Best YouTube niches for high RPM"
            description="Not all YouTube views are equal. Some channels earn 5–10x more than others with the same number of views — simply because of the niche they’re in. If you’re trying to maximize earnings, understanding high-RPM niches is one of the most important decisions you can make."
          />

          <GuideSection title="What makes a niche high RPM?">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              RPM (revenue per thousand views) depends on how much advertisers are willing to pay to reach a specific audience. The more valuable the audience, the higher the ad rates.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              Niches that attract viewers with buying intent — like finance or software — tend to earn significantly more than entertainment or viral content.
            </p>
          </GuideSection>

          <GuideSection title="Highest paying YouTube niches">
            <GuideList
              items={[
                "Personal finance (investing, credit cards, saving money)",
                "Business and entrepreneurship",
                "Software and SaaS tools",
                "Make money online and side hustles",
                "Digital marketing and SEO",
                "Real estate and mortgages",
                "Technology reviews (high-end products)",
              ]}
            />
          </GuideSection>

          <GuideSection title="Why these niches pay more">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              Advertisers in these industries are competing for customers who are ready to spend money. For example, a company selling financial products or software subscriptions can afford to pay significantly more per click or impression.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              This competition drives up CPM, which directly increases your RPM as a creator.
            </p>
          </GuideSection>

          <GuideSection title="Low RPM niches (for comparison)">
            <GuideList
              items={[
                "General entertainment and viral content",
                "Memes and reposted clips",
                "Gaming (varies widely)",
                "Music compilations",
                "Kids content",
              ]}
            />
          </GuideSection>

          <GuideSection title="Should you pick a niche just for RPM?">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              Not necessarily. High RPM niches are more competitive and often require deeper knowledge or credibility. If you’re not interested in the topic, it can be difficult to stay consistent.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              The best approach is to find an overlap between a high-paying niche and something you can realistically create content about long-term.
            </p>
          </GuideSection>

          <GuideSection title="Common questions">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              <strong className="text-[var(--foreground)]">What is a good RPM on YouTube?</strong><br />
              A good RPM can range anywhere from $3 to $15+, depending on niche and audience. Finance and business channels often exceed this range.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              <strong className="text-[var(--foreground)]">Which niche earns the most?</strong><br />
              Finance, software, and business-related content are consistently among the highest-paying niches.
            </p>
          </GuideSection>

          <GuideCTA />
        </div>
      </div>
    </main>
  );
}

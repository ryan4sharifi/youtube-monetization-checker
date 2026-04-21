import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { siteConfig } from "@/constants/site";
import GuideHero from "@/components/guides/GuideHero";
import GuideSection from "@/components/guides/GuideSection";
import GuideList from "@/components/guides/GuideList";
import GuideCTA from "@/components/guides/GuideCTA";

const pageUrl = `${siteConfig.url}/guides/youtube-monetization-rules`;

export const metadata: Metadata = {
  title: `YouTube Monetization Rules | ${siteConfig.name}`,
  description:
    "Learn the official YouTube monetization rules, policies, and requirements for the YouTube Partner Program.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `YouTube Monetization Rules`,
    description:
      "Understand YouTube monetization policies, eligibility rules, and requirements.",
    url: pageUrl,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
    type: "article",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="w-full px-6 md:px-10 pt-4 md:pt-6 xl:pt-8">
        <div className="mx-auto max-w-6xl space-y-7 md:space-y-8">
          <GuideHero
            eyebrow="YouTube Policy Guide"
            icon={<ShieldCheck />}
            title="YouTube monetization rules explained"
            description="Most creators think YouTube monetization is just about hitting subscriber and watch time thresholds — but the real challenge is staying compliant with YouTube’s rules. Monetization depends just as much on policy adherence as it does on growth."
          />

          <GuideSection title="Core monetization rules">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              To qualify for and maintain monetization, your channel must meet these baseline requirements:
            </p>

            <GuideList
              items={[
                "Follow YouTube Partner Program (YPP) policies and guidelines",
                "Maintain advertiser-friendly content standards",
                "Avoid community guideline strikes and violations",
                "Enable account security features like 2-step verification",
                "Be located in a region where monetization is supported",
              ]}
            />
          </GuideSection>

          <GuideSection title="Content policies that affect monetization">
            <GuideList
              items={[
                "Original content required: reused or duplicated content without transformation may not qualify",
                "Advertiser-friendly content: sensitive or controversial topics can limit ads",
                "No misleading behavior: clickbait or deceptive tactics can reduce revenue",
                "Consistent compliance: monetization can be removed if policies are violated over time",
              ]}
            />
          </GuideSection>

          <GuideSection title="Why monetization can be removed">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              Monetization is not permanent. Channels are reviewed continuously, and violations of policies can result in demonetization or removal from the YouTube Partner Program.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              This includes repeated policy violations, low-quality content, or failure to meet advertiser standards.
            </p>
          </GuideSection>

          <GuideSection title="Common questions">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              <strong className="text-[var(--foreground)]">Can you lose monetization?</strong><br />
              Yes. Channels can lose monetization if they violate policies, receive strikes, or consistently publish content that is not advertiser-friendly.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              <strong className="text-[var(--foreground)]">How often does YouTube review channels?</strong><br />
              YouTube reviews channels continuously, both automatically and manually, to ensure they remain compliant with monetization policies.
            </p>
          </GuideSection>

          <GuideCTA />
        </div>
      </div>
    </main>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import { Users } from "lucide-react";
import { siteConfig } from "@/constants/site";
import GuideHero from "@/components/guides/GuideHero";
import GuideSection from "@/components/guides/GuideSection";
import GuideList from "@/components/guides/GuideList";
import GuideCTA from "@/components/guides/GuideCTA";

const pageUrl = `${siteConfig.url}/guides/youtube-partner-program-requirements`;

export const metadata: Metadata = {
  title: `YouTube Partner Program Requirements | ${siteConfig.name}`,
  description:
    "See current YouTube Partner Program requirements for fan funding and ad revenue, including subscribers, watch hours, Shorts views, and review rules.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: `YouTube Partner Program Requirements | ${siteConfig.name}`,
    description:
      "Understand YouTube Partner Program requirements, public eligibility signals, and what creators need before monetization approval.",
    url: pageUrl,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `YouTube Partner Program Requirements | ${siteConfig.name}`,
    description:
      "Understand YouTube Partner Program requirements and public monetization eligibility signals.",
    images: [siteConfig.ogImage],
  },
};

export default function YouTubePartnerProgramRequirementsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "YouTube Partner Program Requirements",
    description:
      "A guide to YouTube Partner Program requirements, public eligibility signals, and monetization approval factors.",
    author: {
      "@type": "Organization",
      name: siteConfig.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    mainEntityOfPage: pageUrl,
    dateModified: "2026-09-16",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the YouTube Partner Program requirements?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For full ad revenue, a channel generally needs 1,000 subscribers plus either 4,000 qualified public watch hours in 12 months or 10 million qualified Shorts views in 90 days. In eligible regions, expanded YPP access can begin at 500 subscribers, three public uploads in 90 days, and either 3,000 qualified watch hours or 3 million qualified Shorts views.",
        },
      },
      {
        "@type": "Question",
        name: "Does meeting public thresholds guarantee monetization?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Meeting thresholds only makes a channel eligible — YouTube still reviews it before approval.",
        },
      },
      {
        "@type": "Question",
        name: "Do YouTube Partner Program requirements vary by country?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Monetization availability and expanded YPP features can depend on the creator’s country or region.",
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
            icon={<Users />}
            title="YouTube Partner Program requirements"
            description="YouTube has separate thresholds for early fan-funding access and full ad-revenue sharing. Reaching the numbers makes a channel eligible to apply, but policy compliance and YouTube's review still determine approval."
          />

          <GuideSection title="The short answer">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              To join the YouTube Partner Program, creators need to meet eligibility thresholds, follow monetization and community policies, be in a supported region, and pass YouTube’s review process.
            </p>
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              Meeting thresholds makes you eligible — it does not guarantee approval.
            </p>
          </GuideSection>

          <GuideSection title="Current YouTube monetization thresholds">
            <div className="overflow-x-auto border-y border-[var(--border)]">
              <table className="min-w-full divide-y divide-[var(--border)] text-sm">
                <thead className="text-left text-xs uppercase tracking-[0.12em] text-[var(--foreground-muted)]">
                  <tr>
                    <th className="px-3 py-3 font-medium">Access level</th>
                    <th className="px-3 py-3 font-medium">Subscribers</th>
                    <th className="px-3 py-3 font-medium">Long-form path</th>
                    <th className="px-3 py-3 font-medium">Shorts path</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  <tr>
                    <td className="px-3 py-4 font-medium text-[var(--foreground)]">Expanded YPP in eligible regions</td>
                    <td className="px-3 py-4 text-[var(--foreground-muted)]">500 plus 3 public uploads in 90 days</td>
                    <td className="px-3 py-4 text-[var(--foreground-muted)]">3,000 qualified watch hours in 12 months</td>
                    <td className="px-3 py-4 text-[var(--foreground-muted)]">3 million qualified Shorts views in 90 days</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 font-medium text-[var(--foreground)]">Ads and YouTube Premium revenue</td>
                    <td className="px-3 py-4 text-[var(--foreground-muted)]">1,000</td>
                    <td className="px-3 py-4 text-[var(--foreground-muted)]">4,000 qualified watch hours in 12 months</td>
                    <td className="px-3 py-4 text-[var(--foreground-muted)]">10 million qualified Shorts views in 90 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm leading-6 text-[var(--foreground-muted)]">
              Expanded YPP availability varies by country. Requirements and feature access can change, so confirm the latest details in the{" "}
              <a
                href="https://support.google.com/youtube/answer/94522"
                className="font-medium text-[var(--brand)] hover:text-[var(--brand-hover)]"
              >
                official YouTube monetization guide
              </a>
              .
            </p>
          </GuideSection>

          <GuideSection title="What matters publicly">
            <GuideList
              items={[
                "Subscriber count indicates eligibility but not approval",
                "Watch time or Shorts views reflect audience demand",
                "Upload consistency shows ongoing activity",
                "Content volume provides growth context",
                "Engagement signals audience quality",
              ]}
            />
          </GuideSection>

          <GuideSection title="Public requirement map">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              Public metrics can show whether a channel appears close to
              eligibility, but they do not show whether YouTube has approved the
              channel or whether the creator has completed private account
              setup.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-[var(--border)]">
              <table className="min-w-full divide-y divide-[var(--border)] text-sm">
                <thead className="bg-[var(--background-elevated)] text-left text-xs uppercase tracking-[0.12em] text-[var(--foreground-muted)]">
                  <tr>
                    <th className="px-4 py-3 font-medium">Area</th>
                    <th className="px-4 py-3 font-medium">Publicly visible?</th>
                    <th className="px-4 py-3 font-medium">How to interpret it</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)] bg-[var(--card)]">
                  {[
                    ["Subscribers", "Usually visible", "Good eligibility signal, but not approval"],
                    ["Watch hours", "Not directly visible", "Must be inferred from views and activity"],
                    ["Shorts eligibility", "Partially visible", "Public Shorts views can be incomplete or hard to isolate"],
                    ["Policy standing", "Not visible", "A major approval factor that public tools cannot confirm"],
                    ["AdSense setup", "Not visible", "Private account and payment status are not public"],
                  ].map(([area, visible, interpretation]) => (
                    <tr key={area}>
                      <td className="px-4 py-3 font-medium text-[var(--foreground)]">{area}</td>
                      <td className="px-4 py-3 text-[var(--foreground-muted)]">{visible}</td>
                      <td className="px-4 py-3 text-[var(--foreground-muted)]">{interpretation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GuideSection>

          <GuideSection title="What public numbers cannot prove">
            <GuideList
              items={[
                "Approval status is internal and not visible",
                "Policy compliance checks are private",
                "Monetization availability varies by region",
                "Status can change over time",
                "Account setup details are not public",
              ]}
            />
          </GuideSection>

          <GuideSection title="The biggest misunderstanding">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              Many creators assume that once they hit subscriber and watch time thresholds, monetization is automatic. In reality, YouTube reviews channels for originality, quality, and policy compliance.
            </p>
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              This is why some channels that look eligible publicly are not approved, while others with smaller audiences can still be monetized if they meet quality standards.
            </p>
          </GuideSection>

          <GuideSection title="How to use public data responsibly">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              Use public metrics to estimate likelihood, not to make final
              claims. If a channel appears eligible but has low activity, reused
              content, policy-sensitive topics, or inconsistent performance, the
              public data may overstate its monetization odds.
            </p>
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              To see how IsMonetized weighs those signals, review the{" "}
              <Link
                href="/methodology"
                className="font-medium text-[var(--brand)] hover:text-[var(--brand-hover)]"
              >
                methodology
              </Link>{" "}
              or run a channel through the{" "}
              <Link
                href="/"
                className="font-medium text-[var(--brand)] hover:text-[var(--brand-hover)]"
              >
                checker
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Why requirements are more than thresholds">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              Eligibility includes both visible thresholds and invisible approval factors. YouTube evaluates policy adherence, content quality, and channel behavior before granting monetization.
            </p>
          </GuideSection>

          <GuideSection title="Expanded YPP vs full monetization">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              In some regions, creators may access fan funding features earlier, while full ad revenue sharing still requires higher thresholds and review approval.
            </p>
          </GuideSection>

          <GuideSection title="Country and market availability">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              Monetization options depend on supported markets. Geography can affect which features are available even for strong channels.
            </p>
          </GuideSection>

          <GuideSection title="Common questions">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              <strong className="text-[var(--foreground)]">What are the YouTube Partner Program requirements?</strong><br />
              Full ad-revenue access generally requires 1,000 subscribers plus 4,000 qualified watch hours in 12 months or 10 million qualified Shorts views in 90 days. Expanded YPP has a lower entry tier in eligible regions.
            </p>
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              <strong className="text-[var(--foreground)]">Does meeting thresholds guarantee monetization?</strong><br />
              No. Meeting thresholds only makes a channel eligible — YouTube still reviews it before approval.
            </p>
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              <strong className="text-[var(--foreground)]">Do requirements vary by country?</strong><br />
              Yes. Availability and expanded features can depend on the creator’s region.
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

import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/constants/site";

const pageUrl = `${siteConfig.url}/youtube-partner-program-requirements`;

export const metadata: Metadata = {
  title: `YouTube Partner Program Requirements | ${siteConfig.name}`,
  description:
    "Learn the YouTube Partner Program requirements, including public eligibility signals, policy considerations, and what creators need before monetization approval.",
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
        name: "What are the YouTube Partner Program requirements?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "YouTube Partner Program access depends on eligibility thresholds, policy compliance, and channel review. Some regions also have expanded YPP access for earlier fan funding and shopping features before full ad-revenue eligibility.",
        },
      },
      {
        "@type": "Question",
        name: "Does meeting public thresholds guarantee monetization?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Meeting public thresholds does not guarantee approval. YouTube also reviews policy compliance, content quality, and other eligibility factors before monetization is approved.",
        },
      },
      {
        "@type": "Question",
        name: "Do YouTube Partner Program requirements vary by country?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Availability of monetization and expanded YPP features can depend on the creator's country or region, and YouTube maintains a list of monetized markets.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Section size="md">
        <div className="space-y-10 md:space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--foreground-muted)]">
              YouTube Monetization Guide
            </div>

            <h1
              className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] md:text-4xl"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              YouTube Partner Program Requirements
            </h1>

            <p className="max-w-2xl text-[15px] leading-7 text-[var(--foreground-muted)] md:text-base">
              If you want to understand YouTube Partner Program requirements,
              the most important thing to know is that public numbers alone are
              not the whole story. Thresholds matter, but policy compliance,
              review decisions, and market availability matter too.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
            <h2
              className="text-lg font-semibold"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              The short answer
            </h2>
            <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
              To join the YouTube Partner Program, creators generally need to
              meet YouTube’s eligibility thresholds, follow monetization and
              community policies, live in a supported country or region, and
              pass YouTube’s review process. In some places, expanded YPP access
              can unlock fan funding and shopping features earlier than full ad
              revenue sharing.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
              <h2
                className="text-base font-semibold"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                What matters publicly
              </h2>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--foreground-muted)]">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--foreground-muted)]" />
                  <span>Subscriber count</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--foreground-muted)]" />
                  <span>Total views and watch performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--foreground-muted)]" />
                  <span>Upload history and channel activity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--foreground-muted)]" />
                  <span>Public channel consistency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--foreground-muted)]" />
                  <span>Whether the channel appears established and active</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
              <h2
                className="text-base font-semibold"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                What public numbers cannot prove
              </h2>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--foreground-muted)]">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--foreground-muted)]" />
                  <span>Whether YouTube approved the channel after review</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--foreground-muted)]" />
                  <span>Whether the creator is fully policy-compliant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--foreground-muted)]" />
                  <span>Whether the creator is in an eligible market</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--foreground-muted)]" />
                  <span>Whether monetization was disabled later</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--foreground-muted)]" />
                  <span>Whether all required internal setup is complete</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
            <h2
              className="text-lg font-semibold"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Why the requirements are more than just thresholds
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-6 text-[var(--foreground-muted)]">
              <p>
                Many creators focus only on subscriber count or watch metrics,
                but YouTube’s own guidance makes clear that eligibility also
                depends on review and policy compliance.
              </p>
              <p>
                That means a channel may look eligible from the outside and still
                not be approved. It also means some channels can get earlier
                access to certain monetization features in expanded YPP markets
                before they qualify for the full ad-revenue path.
              </p>
              <p>
                In practice, the best public approach is to treat YouTube Partner
                Program requirements as a mix of visible thresholds and invisible
                approval factors.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
            <h2
              className="text-lg font-semibold"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Expanded YPP vs full monetization
            </h2>
            <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
              One reason this topic confuses creators is that YouTube now has
              broader YPP access in some regions. Some creators may gain earlier
              access to fan funding and shopping features, while full ad revenue
              sharing can still require a higher path and review outcome.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
            <h2
              className="text-lg font-semibold"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Country and market availability
            </h2>
            <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
              Monetization availability is also connected to YouTube’s supported
              markets. Even a strong channel may not have the same monetization
              options in every country or region, so geography can matter.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
            <h2
              className="text-lg font-semibold"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Frequently asked questions
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-base font-semibold">
                  What are the YouTube Partner Program requirements?
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                  They include eligibility thresholds, policy compliance, review
                  approval, and availability in a supported market.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold">
                  Does meeting public thresholds guarantee monetization?
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                  No. Public thresholds are only part of the picture. YouTube
                  still reviews the channel before approval.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold">
                  Do requirements vary by country?
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                  Yes. Monetization and expanded YPP availability can depend on
                  country or region.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--foreground-muted)]">
            <Link
              href="/youtube-monetization-checker"
              className="font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
            >
              YouTube monetization checker
            </Link>
            <span>•</span>
            <Link
              href="/how-to-tell-if-a-youtube-channel-is-monetized"
              className="font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
            >
              How to tell if a channel is monetized
            </Link>
            <span>•</span>
            <Link
              href="/"
              className="font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
            >
              Try the tool
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
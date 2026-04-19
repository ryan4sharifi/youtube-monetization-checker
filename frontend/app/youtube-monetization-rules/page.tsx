import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CircleHelp } from "lucide-react";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/constants/site";

const pageUrl = `${siteConfig.url}/youtube-monetization-rules`;

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
      <Section size="md">
        <div className="space-y-10 md:space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--foreground-muted)]">
              <ShieldCheck className="h-3.5 w-3.5 opacity-70" />
              YouTube Policy Guide
            </div>

            <h1
              className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] md:text-4xl"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              YouTube monetization rules explained
            </h1>

            <p className="max-w-2xl text-[15px] leading-7 text-[var(--foreground-muted)] md:text-base">
              To earn money on YouTube, creators must follow strict rules and
              policies under the YouTube Partner Program (YPP).
            </p>
          </div>

          {/* Core Rules */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
            <h2 className="text-lg font-semibold">Core monetization rules</h2>

            <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--foreground-muted)]">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--foreground-muted)]" />
                <span>Follow YouTube channel monetization policies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--foreground-muted)]" />
                <span>Follow community guidelines</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--foreground-muted)]" />
                <span>Have no active strikes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--foreground-muted)]" />
                <span>Enable 2-step verification</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--foreground-muted)]" />
                <span>Live in a country where YPP is available</span>
              </li>
            </ul>
          </div>

          {/* Content Policies */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-[1px]">
              <h3 className="text-base font-semibold">Original content required</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                Reused or duplicated content may not be eligible for
                monetization. You must create original, valuable content.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-[1px]">
              <h3 className="text-base font-semibold">Advertiser-friendly content</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                Content must follow advertiser-friendly guidelines to generate
                ad revenue.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-[1px]">
              <h3 className="text-base font-semibold">No misleading behavior</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                Clickbait, spam, or deceptive practices can lead to
                demonetization.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-[1px]">
              <h3 className="text-base font-semibold">Consistent compliance</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                Even after approval, channels must continue following all
                policies to stay monetized.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm md:p-7">
            <div className="inline-flex items-center gap-2">
              <CircleHelp className="h-5 w-5 text-[var(--foreground-muted)]" />
              <h2 className="text-xl font-semibold">Common questions</h2>
            </div>

            <div className="mt-4 space-y-3 text-sm leading-6 text-[var(--foreground-muted)]">
              <p>
                <strong className="text-[var(--foreground)]">Can you lose monetization?</strong><br />
                Yes, channels can be demonetized if they violate YouTube policies.
              </p>

              <p>
                <strong className="text-[var(--foreground)]">How often does YouTube review channels?</strong><br />
                YouTube continuously reviews channels to ensure compliance.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm md:p-7">
            <h2 className="text-xl font-semibold">Check any channel</h2>
            <p className="mt-2 max-w-xl text-sm text-[var(--foreground-muted)]">
              Use the checker to estimate whether a channel follows monetization rules.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand)] px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-[var(--brand-hover)] hover:shadow-md"
              >
                Try the checker
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/how-to-tell-if-a-youtube-channel-is-monetized"
                className="inline-flex items-center gap-1 text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
              >
                Learn more
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}


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
        <div className="space-y-10">
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
              <ShieldCheck className="h-3.5 w-3.5" />
              YouTube Policy Guide
            </div>

            <h1
              className="max-w-4xl text-4xl font-extrabold tracking-[-0.05em] md:text-5xl"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              YouTube monetization rules explained
            </h1>

            <p className="max-w-3xl text-lg text-[var(--foreground-muted)]">
              To earn money on YouTube, creators must follow strict rules and
              policies under the YouTube Partner Program (YPP).
            </p>
          </div>

          {/* Core Rules */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
            <h2 className="text-2xl font-bold">Core monetization rules</h2>

            <ul className="mt-4 space-y-3 text-[var(--foreground-muted)] leading-7">
              <li>• Follow YouTube channel monetization policies</li>
              <li>• Follow community guidelines</li>
              <li>• Have no active strikes</li>
              <li>• Enable 2-step verification</li>
              <li>• Live in a country where YPP is available</li>
            </ul>
          </div>

          {/* Content Policies */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
              <h3 className="text-lg font-semibold">Original content required</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--foreground-muted)]">
                Reused or duplicated content may not be eligible for
                monetization. You must create original, valuable content.
              </p>
            </div>

            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
              <h3 className="text-lg font-semibold">Advertiser-friendly content</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--foreground-muted)]">
                Content must follow advertiser-friendly guidelines to generate
                ad revenue.
              </p>
            </div>

            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
              <h3 className="text-lg font-semibold">No misleading behavior</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--foreground-muted)]">
                Clickbait, spam, or deceptive practices can lead to
                demonetization.
              </p>
            </div>

            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
              <h3 className="text-lg font-semibold">Consistent compliance</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--foreground-muted)]">
                Even after approval, channels must continue following all
                policies to stay monetized.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)] md:p-8">
            <div className="inline-flex items-center gap-2">
              <CircleHelp className="h-5 w-5 text-[var(--brand)]" />
              <h2 className="text-2xl font-bold">Common questions</h2>
            </div>

            <div className="mt-6 space-y-4 text-[var(--foreground-muted)]">
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
          <div className="rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)] md:p-8">
            <h2 className="text-2xl font-bold">Check any channel</h2>
            <p className="mt-3 max-w-2xl text-[var(--foreground-muted)]">
              Use the checker to estimate whether a channel follows monetization rules.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-2xl bg-[var(--brand)] px-5 py-3 font-semibold text-white !text-white hover:bg-[var(--brand-hover)]"
              >
                Try the checker
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/how-to-tell-if-a-youtube-channel-is-monetized"
                className="inline-flex items-center gap-2 font-medium text-[var(--brand)] hover:text-[var(--brand-hover)]"
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
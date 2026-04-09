

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, DollarSign, CircleHelp } from "lucide-react";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/constants/site";

const pageUrl = `${siteConfig.url}/how-much-money-do-youtubers-make`;

export const metadata: Metadata = {
  title: `How Much Money Do YouTubers Make? | ${siteConfig.name}`,
  description:
    "Learn how much money YouTubers make, how YouTube monetization works, and what affects earnings.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `How Much Money Do YouTubers Make?`,
    description:
      "Understand YouTube earnings, CPM, RPM, and how creators make money.",
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
              <DollarSign className="h-3.5 w-3.5" />
              YouTube Earnings Guide
            </div>

            <h1
              className="max-w-4xl text-4xl font-extrabold tracking-[-0.05em] md:text-5xl"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              How much money do YouTubers make?
            </h1>

            <p className="max-w-3xl text-lg text-[var(--foreground-muted)]">
              YouTube earnings vary widely depending on niche, audience, and
              monetization methods. Most creators earn between $1 to $5 per 1,000
              views from ads alone.
            </p>
          </div>

          {/* Earnings overview */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
            <h2 className="text-2xl font-bold">Average YouTube earnings</h2>

            <ul className="mt-4 space-y-3 text-[var(--foreground-muted)] leading-7">
              <li>• $1 – $5 per 1,000 views (ad revenue)</li>
              <li>• $10 – $30 CPM (before YouTube’s cut)</li>
              <li>• Higher earnings in niches like finance, tech, and business</li>
              <li>• Lower earnings in entertainment or general content</li>
            </ul>
          </div>

          {/* Factors */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
              <h3 className="text-lg font-semibold">Niche matters</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--foreground-muted)]">
                Channels in finance, software, and business tend to earn more
                because advertisers pay higher rates.
              </p>
            </div>

            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
              <h3 className="text-lg font-semibold">Audience location</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--foreground-muted)]">
                Viewers from countries like the US, UK, and Canada generate
                higher ad revenue.
              </p>
            </div>

            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
              <h3 className="text-lg font-semibold">Engagement & watch time</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--foreground-muted)]">
                Higher watch time and engagement can lead to better ad
                performance and increased earnings.
              </p>
            </div>

            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
              <h3 className="text-lg font-semibold">Revenue streams</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--foreground-muted)]">
                Creators also earn from sponsorships, affiliate links, and
                product sales—not just ads.
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
                <strong className="text-[var(--foreground)]">Do YouTubers get paid per view?</strong><br />
                Not directly. Earnings come from ads shown on videos, not just views.
              </p>

              <p>
                <strong className="text-[var(--foreground)]">How much does 1 million views make?</strong><br />
                Typically between $1,000 and $5,000 from ads, depending on the niche and audience.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)] md:p-8">
            <h2 className="text-2xl font-bold">Check any channel’s potential</h2>
            <p className="mt-3 max-w-2xl text-[var(--foreground-muted)]">
              Use the checker to estimate whether a channel is monetized and
              likely earning from YouTube.
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
                href="/can-you-see-if-a-youtube-channel-is-monetized"
                className="inline-flex items-center gap-2 font-medium text-[var(--brand)] hover:text-[var(--brand-hover)]"
              >
                Learn how monetization works
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
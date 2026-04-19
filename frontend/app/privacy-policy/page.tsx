import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/constants/site";

const pageUrl = `${siteConfig.url}/privacy-policy`;

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description:
    "Learn how we handle data, privacy, and information when using this YouTube monetization checker.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `Privacy Policy | ${siteConfig.name}`,
    description:
      "Learn how we handle data, privacy, and information when using this YouTube monetization checker.",
    url: pageUrl,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors">
      <Section size="md">
        <div className="space-y-10 md:space-y-12">
          {/* Header */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--foreground-muted)]">
              <ShieldCheck className="h-3.5 w-3.5 opacity-70" />
              Privacy Policy
            </div>

            <h1
              className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] md:text-4xl"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Your privacy matters
            </h1>

            <p className="max-w-2xl text-sm leading-6 text-[var(--foreground-muted)] md:text-base">
              This page explains what data is collected, how it is used, and how
              your information is handled when using {siteConfig.name}.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h2 className="text-base font-semibold">Information we collect</h2>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                We do not require accounts or personal data to use this tool. The
                only information processed is publicly available YouTube channel
                data based on the input you provide.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h2 className="text-base font-semibold">How we use information</h2>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                Data is used solely to generate monetization estimates and
                improve the performance and reliability of the tool.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h2 className="text-base font-semibold">Cookies and analytics</h2>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                This site may use basic analytics tools or cookies to understand
                usage patterns and improve user experience. No personally
                identifiable information is collected.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h2 className="text-base font-semibold">Third-party services</h2>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                We may rely on third-party APIs or services (such as YouTube data
                sources) to provide functionality. These services operate under
                their own privacy policies.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h2 className="text-base font-semibold">Data security</h2>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                We take reasonable measures to protect data and ensure the
                reliability of the service. However, no online system can be
                guaranteed to be completely secure.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h2 className="text-base font-semibold">Changes to this policy</h2>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                This policy may be updated over time. Continued use of the site
                means you accept any updates.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors md:p-6">
            <h2 className="text-xl font-semibold">Back to the tool</h2>
            <p className="mt-2 max-w-xl text-sm text-[var(--foreground-muted)]">
              Use the checker to estimate monetization based on public data.
            </p>

            <div className="mt-5 flex gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand)] px-4 py-2.5 text-sm font-medium text-white !text-white transition-all hover:bg-[var(--brand-hover)] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[color:color-mix(in_srgb,var(--brand)_12%,transparent)]"
              >
                Try the checker
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
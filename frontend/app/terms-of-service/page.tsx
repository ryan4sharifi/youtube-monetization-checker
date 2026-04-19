import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/constants/site";

const pageUrl = `${siteConfig.url}/terms-of-service`;

export const metadata: Metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
  description:
    "Read the terms and conditions for using this YouTube monetization checker.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `Terms of Service | ${siteConfig.name}`,
    description:
      "Read the terms and conditions for using this YouTube monetization checker.",
    url: pageUrl,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Section size="md">
        <div className="space-y-10 md:space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--foreground-muted)]">
              <FileText className="h-3.5 w-3.5 opacity-70" />
              Terms of Service
            </div>

            <h1
              className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] md:text-4xl"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Terms of use
            </h1>

            <p className="max-w-2xl text-[15px] leading-7 text-[var(--foreground-muted)] md:text-base">
              By using {siteConfig.name}, you agree to the following terms and
              conditions.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
              <h2 className="text-base font-semibold">Use of the service</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                This tool is provided for informational purposes only. You agree
                to use the service responsibly and not for any unlawful or
                harmful activities.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
              <h2 className="text-base font-semibold">No guarantees</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                We do not guarantee the accuracy, completeness, or reliability of
                the results. Estimates are based on public data and should not be
                considered definitive.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
              <h2 className="text-base font-semibold">Limitation of liability</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                We are not liable for any decisions, losses, or damages resulting
                from the use of this tool.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
              <h2 className="text-base font-semibold">Third-party services</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                This site may rely on third-party data sources or APIs. We are
                not responsible for the availability or accuracy of these
                services.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
              <h2 className="text-base font-semibold">Changes to terms</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                These terms may be updated at any time. Continued use of the
                service means you accept any changes.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm md:p-7">
            <h2 className="text-xl font-semibold">Back to the tool</h2>
            <p className="mt-2 max-w-xl text-sm text-[var(--foreground-muted)]">
              Use the checker to estimate monetization based on public data.
            </p>

            <div className="mt-6 flex gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand)] px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-[var(--brand-hover)] hover:shadow-md"
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
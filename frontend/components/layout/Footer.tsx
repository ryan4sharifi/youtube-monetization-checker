import Link from "next/link";

const productLinks = [
  { href: "/", label: "Home" },
  { href: "/youtube-monetization-checker", label: "Checker" },
] as const;

const guideLinks = [
  { href: "/how-to-tell-if-a-youtube-channel-is-monetized", label: "How it works" },
  { href: "/youtube-partner-program-requirements", label: "Requirements" },
  { href: "/how-many-subscribers-to-get-monetized-on-youtube", label: "Subscribers" },
  { href: "/youtube-monetization-rules", label: "Rules" },
  { href: "/how-much-money-do-youtubers-make", label: "Earnings" },
] as const;

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
] as const;

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/disclaimer", label: "Disclaimer" },
] as const;

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
    >
      {label}
    </Link>
  );
}

function FooterSection({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div className="flex min-w-0 flex-col gap-3">
      <div className="text-[var(--foreground)]">
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--foreground-muted)]">{title}</p>
      </div>

      <div className="flex flex-col gap-2 text-sm items-center sm:items-start">
        {links.map((link) => (
          <FooterLink key={link.href} href={link.href} label={link.label} />
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const brand = process.env.NEXT_PUBLIC_APP_NAME || "IsMonetized";

  return (
    <footer className="mt-16 border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-12 lg:px-8 lg:py-14">
        <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm">
          <div className="relative px-5 py-8 sm:px-6 md:px-8 md:py-10 lg:px-10 lg:py-12 xl:px-12">

            <div className="relative z-10 space-y-8">
              <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-md lg:text-left xl:max-w-xl">
                  <div className="inline-flex items-center justify-center lg:justify-start">
                    <div>
                      <p className="text-base font-semibold tracking-[-0.02em] text-[var(--foreground)]">
                        {brand}
                      </p>
                      <p className="text-sm text-[var(--foreground-muted)]/90">
                        YouTube monetization intelligence, made simple.
                      </p>
                    </div>
                  </div>

                  <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[var(--foreground-muted)] lg:mx-0">
                    Research channels faster with a clean monetization estimate,
                    practical guides, and transparent product pages designed for trust.
                  </p>
                </div>

                <div className="grid w-full gap-6 text-center sm:grid-cols-2 sm:text-left lg:max-w-3xl lg:grid-cols-2 xl:max-w-none xl:grid-cols-4">
                  <FooterSection
                    title="Product"
                    links={productLinks}
                  />
                  <FooterSection
                    title="Guides"
                    links={guideLinks}
                  />
                  <FooterSection
                    title="Company"
                    links={companyLinks}
                  />
                  <FooterSection
                    title="Legal"
                    links={legalLinks}
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 border-t border-[var(--border)] pt-4 text-center text-sm text-[var(--foreground-muted)]">
                <p>
                  © {year} {brand}. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
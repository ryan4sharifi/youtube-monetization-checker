import Link from "next/link";
import { Mail, ShieldCheck, FileText, Info, CircleHelp, Sparkles } from "lucide-react";

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
      className="text-[var(--foreground-muted)] transition duration-150 hover:translate-x-0.5 hover:text-[var(--foreground)]"
    >
      {label}
    </Link>
  );
}

function FooterSection({
  title,
  icon,
  links,
}: {
  title: string;
  icon: React.ReactNode;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div className="flex min-w-0 flex-col gap-3">
      <div className="inline-flex items-center justify-center gap-2 text-[var(--foreground)] sm:justify-start">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
          {icon}
        </span>
        <p className="text-sm font-semibold tracking-[-0.01em]">{title}</p>
      </div>

      <div className="flex flex-col gap-2.5 text-sm items-center sm:items-start">
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
    <footer className="mt-20 border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-12 lg:px-8 lg:py-14">
        <div className="overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow-soft)]">
          <div className="relative px-5 py-8 sm:px-6 md:px-8 md:py-10 lg:px-10 lg:py-12">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-[-6%] top-[-14%] h-40 w-40 rounded-full bg-[color:color-mix(in_srgb,var(--brand)_8%,transparent)] blur-3xl md:h-56 md:w-56" />
              <div className="absolute bottom-[-20%] right-[-8%] h-48 w-48 rounded-full bg-[color:color-mix(in_srgb,var(--brand)_6%,transparent)] blur-3xl md:h-64 md:w-64" />
            </div>

            <div className="relative z-10 space-y-10">
              <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-md lg:text-left xl:max-w-xl">
                  <div className="inline-flex items-center justify-center gap-3 lg:justify-start">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] shadow-[0_8px_20px_rgba(15,23,42,0.06)]">
                      <Sparkles className="h-5 w-5 text-[var(--brand)]" />
                    </span>
                    <div>
                      <p className="text-lg font-bold tracking-[-0.03em] text-[var(--foreground)]">
                        {brand}
                      </p>
                      <p className="text-sm text-[var(--foreground-muted)]">
                        YouTube monetization intelligence, made simple.
                      </p>
                    </div>
                  </div>

                  <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[var(--foreground-muted)] md:text-[15px] lg:mx-0">
                    Research channels faster with a clean monetization estimate,
                    practical guides, and transparent product pages designed for trust.
                  </p>
                </div>

                <div className="grid w-full gap-8 text-center sm:grid-cols-2 sm:text-left lg:max-w-3xl lg:grid-cols-2 xl:max-w-none xl:grid-cols-4 xl:gap-10">
                  <FooterSection
                    title="Product"
                    icon={<Sparkles className="h-4 w-4 text-[var(--brand)]" />}
                    links={productLinks}
                  />
                  <FooterSection
                    title="Guides"
                    icon={<CircleHelp className="h-4 w-4 text-[var(--brand)]" />}
                    links={guideLinks}
                  />
                  <FooterSection
                    title="Company"
                    icon={<Info className="h-4 w-4 text-[var(--brand)]" />}
                    links={companyLinks}
                  />
                  <FooterSection
                    title="Legal"
                    icon={<ShieldCheck className="h-4 w-4 text-[var(--brand)]" />}
                    links={legalLinks}
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 border-t border-[var(--border)] pt-5 text-center text-sm text-[var(--foreground-muted)] md:gap-5 lg:flex-row lg:items-center lg:justify-between lg:text-left">
                <p>
                  © {year} {brand}. All rights reserved.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-end">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 transition hover:text-[var(--foreground)]"
                  >
                    <Mail className="h-4 w-4 shrink-0" />
                    Contact
                  </Link>
                  <Link
                    href="/privacy-policy"
                    className="inline-flex items-center gap-2 transition hover:text-[var(--foreground)]"
                  >
                    <ShieldCheck className="h-4 w-4 shrink-0" />
                    Privacy
                  </Link>
                  <Link
                    href="/terms-of-service"
                    className="inline-flex items-center gap-2 transition hover:text-[var(--foreground)]"
                  >
                    <FileText className="h-4 w-4 shrink-0" />
                    Terms
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
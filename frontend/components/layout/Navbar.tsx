"use client";

import Link from "next/link";
import { useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { useAppTheme } from "@/providers/ThemeProvider";
import {
  Zap,
  BookOpen,
  CheckCircle,
  Moon,
  Sun,
  Menu,
  X,
  Play,
} from "lucide-react";

const navItems = [
  {
    label: "Guides",
    href: "/guides",
    icon: BookOpen,
  },
  {
    label: "Methodology",
    href: "/methodology",
    icon: Zap,
  },
  {
    label: "Company",
    icon: CheckCircle,
    children: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Legal",
    icon: CheckCircle,
    children: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
] as const;

function isActive(pathname: string, href: string) {
  return pathname === href;
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => {
      if (prev) setOpenSections({});
      return !prev;
    });
  }, []);
  const toggleSection = useCallback((label: string) => {
    setOpenSections((prev) => ({ ...prev, [label]: !prev[label] }));
  }, []);
  const { mode, toggleMode, mounted } = useAppTheme();

  const themeLabel = mounted ? (mode === "light" ? "Dark" : "Light") : "Theme";

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--background)]/90">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] px-4 py-3 shadow-sm sm:px-5">
          <Link
            href="/"
            className="inline-flex min-w-0 items-center gap-3 rounded-2xl transition duration-200 hover:opacity-90"
            onClick={() => setMenuOpen(false)}
          >
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background-elevated)]">
              <Play className="h-5 w-5 text-[var(--foreground)]" />
            </span>

            <span className="min-w-0">
              <span
                className="block truncate text-base font-bold tracking-[-0.04em] text-[var(--foreground)] sm:text-lg"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                {process.env.NEXT_PUBLIC_APP_NAME || "IsMonetized"}
              </span>
              <span className="mt-0.5 hidden text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--foreground-muted)] sm:block">
                Monetization Intelligence
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-3 lg:flex">
            <nav className="flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] p-1">
              {navItems.map((item) => {
                const Icon = item.icon;

                if ("children" in item) {
                  return (
                    <div key={item.label} className="relative group">
                      <button className="inline-flex h-11 items-center gap-2 rounded-full px-5 text-[15px] font-medium tracking-[-0.01em] text-[var(--foreground-muted)] hover:text-[var(--foreground)]">
                        <Icon className="h-4 w-4" />
                        {item.label}
                      </button>

                      <div className="absolute left-0 top-full hidden min-w-[180px] pt-2 group-hover:block group-focus-within:block">
                        <div className="rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] p-2 shadow-lg">
                          {item.children.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block rounded-lg px-3 py-2 text-sm text-[var(--foreground-muted)] hover:bg-[color:color-mix(in_srgb,var(--background)_92%,transparent)] hover:text-[var(--foreground)]"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                const active = isActive(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`inline-flex h-11 items-center gap-2 rounded-full px-5 text-[15px] font-medium tracking-[-0.01em] transition-all duration-200 ${
                      active
                        ? "bg-[color:color-mix(in_srgb,var(--background)_96%,transparent)] text-[var(--foreground)]"
                        : "text-[var(--foreground-muted)] hover:bg-[color:color-mix(in_srgb,var(--background)_92%,transparent)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <button
              type="button"
              onClick={toggleMode}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-4 text-sm font-medium text-[var(--foreground-muted)]"
            >
              {mounted && mode === "light" ? (
                <Moon className="h-4 w-4 shrink-0" aria-hidden="true" />
              ) : (
                <Sun className="h-4 w-4 shrink-0" aria-hidden="true" />
              )}
              {themeLabel}
            </button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={toggleMode}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] text-[var(--foreground)]"
              aria-label="Toggle theme"
            >
              {mounted && mode === "light" ? (
                <Moon className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Sun className="h-4 w-4" aria-hidden="true" />
              )}
            </button>

            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] text-[var(--foreground)] cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Panel */}
          <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-6 sm:px-6 lg:px-8">
            <div
              id="mobile-menu"
              className="relative rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] p-3 shadow-lg transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] text-[var(--foreground)] hover:bg-[color:color-mix(in_srgb,var(--background)_92%,transparent)] cursor-pointer"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
              <nav className="mt-8 flex flex-col gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;

                  if ("children" in item) {
                    const isOpen = openSections[item.label];

                    return (
                      <div key={item.label} className="space-y-1">
                        <button
                          onClick={() => toggleSection(item.label)}
                          className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-xs uppercase tracking-[0.14em] text-[var(--foreground-muted)] transition hover:bg-[color:color-mix(in_srgb,var(--background)_92%,transparent)]"
                        >
                          <span>{item.label}</span>
                          <span className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </span>
                        </button>

                        <div className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                          <div className="flex flex-col gap-1 pb-1">
                            {item.children.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className="ml-4 inline-flex items-center gap-3 rounded-2xl px-4 py-2.5 text-sm text-[var(--foreground)] transition-colors hover:bg-[color:color-mix(in_srgb,var(--background)_92%,transparent)]"
                                onClick={() => setMenuOpen(false)}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  const active = isActive(pathname, item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`inline-flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium tracking-[-0.01em] transition duration-200 ${
                        active
                          ? "bg-[color:color-mix(in_srgb,var(--background)_94%,transparent)] text-[var(--foreground)]"
                          : "text-[var(--foreground)] hover:bg-[color:color-mix(in_srgb,var(--background)_92%,transparent)]"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
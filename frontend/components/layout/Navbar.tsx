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
    href: "/youtube-monetization-checker",
    label: "Checker",
    icon: Zap,
  },
  {
    href: "/how-to-tell-if-a-youtube-channel-is-monetized",
    label: "Guide",
    icon: BookOpen,
  },
  {
    href: "/youtube-partner-program-requirements",
    label: "Requirements",
    icon: CheckCircle,
  },
] as const;

function isActive(pathname: string, href: string) {
  return pathname === href;
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
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
                    <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
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
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] text-[var(--foreground)]"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
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
        <div className="lg:hidden">
          <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] p-3 shadow-sm">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
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
                      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
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
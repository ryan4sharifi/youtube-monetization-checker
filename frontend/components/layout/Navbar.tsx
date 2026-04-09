"use client";

import Link from "next/link";
import { useState } from "react";
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
  const { mode, toggleMode, mounted } = useAppTheme();

  const themeLabel = mounted ? (mode === "light" ? "Dark" : "Light") : "Theme";

  return (
    <header className="sticky top-0 z-50 w-full bg-[color:color-mix(in_srgb,var(--background)_86%,transparent)] backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between rounded-[28px] border border-[color:color-mix(in_srgb,var(--border)_86%,transparent)] bg-[color:color-mix(in_srgb,var(--background-elevated)_78%,transparent)] px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:px-5">
          <Link
            href="/"
            className="inline-flex min-w-0 items-center gap-3 rounded-2xl transition hover:opacity-90"
            onClick={() => setMenuOpen(false)}
          >
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] shadow-[0_8px_20px_rgba(15,23,42,0.08)]">
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
            <nav className="flex items-center gap-1 rounded-full bg-[color:color-mix(in_srgb,var(--card)_70%,transparent)] p-1.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`inline-flex h-11 items-center gap-2 rounded-full px-5 text-[15px] font-medium transition-all duration-150 ${
                      active
                        ? "bg-[var(--background-elevated)] text-[var(--foreground)] shadow-[0_6px_18px_rgba(15,23,42,0.06)]"
                        : "text-[var(--foreground-muted)] hover:bg-[var(--card-muted)] hover:text-[var(--foreground)]"
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
              className="inline-flex h-11 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-5 text-[15px] font-medium text-[var(--foreground-muted)] shadow-[0_8px_20px_rgba(15,23,42,0.05)] transition-all duration-150 hover:border-[var(--border-strong)] hover:bg-[var(--card-muted)] hover:text-[var(--foreground)]"
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
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] text-[var(--foreground)] shadow-[0_8px_20px_rgba(15,23,42,0.05)] transition hover:border-[var(--border-strong)] hover:bg-[var(--card-muted)]"
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
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] text-[var(--foreground)] shadow-[0_8px_20px_rgba(15,23,42,0.05)] transition hover:border-[var(--border-strong)] hover:bg-[var(--card-muted)]"
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
            <div className="rounded-[28px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_92%,transparent)] p-3 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(pathname, item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`inline-flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                        active
                          ? "bg-[var(--card-muted)] text-[var(--foreground)]"
                          : "text-[var(--foreground)] hover:bg-[var(--card-muted)]"
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
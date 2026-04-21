"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/app/im-logo-final.png";
import { useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { useAppTheme } from "@/providers/ThemeProvider";
import { useAuth } from "@/hooks/useAuth";
import {
  BookOpen,
  BarChart3,
  GitCompare,
  Bookmark,
  LogIn,
  Moon,
  Sun,
  Menu,
  X,
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
    icon: BarChart3,
  },
  {
    label: "Compare",
    href: "/compare",
    icon: GitCompare,
  },
  {
    label: "Saved",
    href: "/saved",
    icon: Bookmark,
  },
] as const;

function isActive(pathname: string, href: string) {
  return pathname === href;
}


const ACTIVE_CLASS =
  "bg-[var(--background-elevated)] text-[var(--foreground)] ring-1 ring-[var(--border)]";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
  const { user, loading, signInWithGoogle, signOut } = useAuth();

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
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] overflow-hidden">
              <Image
                src={logo}
                alt="IsMonetized logo"
                width={32}
                height={32}
                className="object-contain"
                priority
              />
            </span>

            <span className="min-w-0">
              <span
                className="block truncate text-base font-bold tracking-[-0.04em] text-[var(--foreground)] sm:text-lg"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                {process.env.NEXT_PUBLIC_APP_NAME || "IsMonetized"}
              </span>
              <span className="mt-0.5 block text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--foreground-muted)]">
                Monetization Intelligence
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-3 xl:flex">
            <nav className="flex items-center gap-1 rounded-full border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_92%,transparent)] p-1 shadow-[0_6px_20px_rgba(15,23,42,0.06)] backdrop-blur">
              {navItems
                .filter((item) => item.label !== "Saved" || user)
                .map((item) => {
                  const Icon = item.icon;
                  const active = isActive(pathname, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`inline-flex h-11 items-center gap-2 rounded-full px-5 text-[15px] font-medium tracking-[-0.01em] transition-all duration-200 ${
                        active
                          ? ACTIVE_CLASS
                          : "text-[var(--foreground)] hover:bg-[var(--background-elevated)]"
                      }`}
                    >
                      <Icon className="h-4 w-4 shrink-0 text-inherit" />
                      {item.label}
                    </Link>
                  );
                })}
            </nav>

            <div className="flex items-center rounded-full border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_92%,transparent)] p-1 shadow-[0_6px_20px_rgba(15,23,42,0.06)] backdrop-blur">
              {loading ? null : user ? (
                <button
                  onClick={signOut}
                  className="inline-flex h-11 items-center gap-2 rounded-full px-5 text-[15px] font-medium tracking-[-0.01em] text-[var(--foreground)] transition-all duration-200 hover:bg-[var(--background-elevated)]"
                >
                  Sign out
                </button>
              ) : (
                <button
                  onClick={signInWithGoogle}
                  className="inline-flex h-11 items-center gap-2 rounded-full px-5 text-[15px] font-medium tracking-[-0.01em] text-[var(--foreground)] transition-all duration-200 hover:bg-[var(--background-elevated)]"
                >
                  <LogIn className="h-4 w-4" />
                  Sign in
                </button>
              )}
            </div>
            <div className="flex items-center rounded-full border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_92%,transparent)] p-1 shadow-[0_6px_20px_rgba(15,23,42,0.06)] backdrop-blur">
              <button
                type="button"
                onClick={toggleMode}
                aria-label="Toggle theme"
                className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--foreground)] transition-all duration-200 border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_92%,transparent)] ${
                  mode === "dark"
                    ? ACTIVE_CLASS
                    : "text-[var(--foreground)] hover:bg-[var(--background-elevated)]"
                }`}
              >
                {mounted && mode === "light" ? (
                  <Moon className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Sun className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
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
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Panel */}
          <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-6 sm:px-6 xl:px-8">
            <div
              id="mobile-menu"
              className="relative rounded-2xl border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_94%,transparent)] p-3 shadow-[0_18px_50px_rgba(15,23,42,0.15)] backdrop-blur transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] text-[var(--foreground)] hover:bg-[var(--background-elevated)] cursor-pointer"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
              <nav className="mt-8 flex flex-col gap-2">
                {navItems
                  .filter((item) => item.label !== "Saved" || user)
                  .map((item) => {
                    const Icon = item.icon;
                    const active = isActive(pathname, item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`inline-flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium tracking-[-0.01em] transition duration-200 ${
                          active
                            ? ACTIVE_CLASS
                            : "text-[var(--foreground)] hover:bg-[var(--background-elevated)]"
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        <Icon className="h-4 w-4 shrink-0 text-inherit" />
                        {item.label}
                      </Link>
                    );
                  })}
              </nav>
              <div className="mt-4 border-t border-[var(--border)] pt-4">
                {loading ? null : user ? (
                  <button
                    onClick={signOut}
                    className="w-full rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm text-[var(--foreground)]"
                  >
                    Sign out
                  </button>
                ) : (
                  <button
                    onClick={signInWithGoogle}
                    className="w-full rounded-xl border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_92%,transparent)] px-4 py-2.5 text-sm font-semibold text-[var(--foreground)]"
                  >
                    <div className="inline-flex items-center gap-2">
                      <LogIn className="h-4 w-4" />
                      Sign in with Google
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
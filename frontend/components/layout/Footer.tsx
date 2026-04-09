import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <p className="text-sm text-[var(--foreground-muted)]">
            © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_APP_NAME || "ViewNama"}
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/" className="hover:text-[var(--foreground)]">
              Home
            </Link>
            <Link href="/youtube-monetization-checker">
              Checker
            </Link>
            <Link href="/how-to-tell-if-a-youtube-channel-is-monetized">
              Guide
            </Link>
            <Link href="/youtube-partner-program-requirements">
              Requirements
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
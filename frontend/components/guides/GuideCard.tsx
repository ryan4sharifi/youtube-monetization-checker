import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface GuideCardProps {
  href: string;
  title: string;
  description: string;
  icon?: ReactNode;
}

export default function GuideCard({
  href,
  title,
  description,
  icon,
}: GuideCardProps) {
  return (
    <Link
      href={href}
      className="group relative block rounded-[28px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] p-5 shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2.5">
          <div className="flex items-center gap-2">
            {icon ? (
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[color:color-mix(in_srgb,var(--background-elevated)_92%,transparent)] text-[var(--foreground-muted)]">
                {icon}
              </span>
            ) : null}

            <h3
              className="text-[16px] font-semibold tracking-[-0.01em] text-[var(--foreground)]"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              {title}
            </h3>
          </div>

          <p className="text-[14px] leading-6 text-[var(--foreground-muted)]">
            {description}
          </p>
        </div>

        <span className="mt-0.5 text-[var(--foreground-muted)] transition-transform duration-200 group-hover:translate-x-1">
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
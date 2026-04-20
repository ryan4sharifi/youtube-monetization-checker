

interface GuideListProps {
  items: string[];
}

export default function GuideList({ items }: GuideListProps) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3 text-[15px] leading-7 text-[var(--foreground-muted)]">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
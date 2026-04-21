interface GuideListProps {
  items: string[];
}

export default function GuideList({ items }: GuideListProps) {
  return (
    <ul className="mt-5 space-y-3.5 md:space-y-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3.5 text-[15px] leading-[1.65] text-[var(--foreground-muted)]">
          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[var(--brand)] opacity-90" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
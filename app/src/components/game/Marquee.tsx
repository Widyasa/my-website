interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  pink?: boolean;
}

export default function Marquee({ items, reverse = false, pink = false }: MarqueeProps) {
  const row = (
    <div className="flex shrink-0 items-center">
      {items.map((it, i) => (
        <span key={i} className="flex items-center">
          <span className="font-pixel px-6 text-xs sm:text-sm" style={{ color: pink ? 'var(--ink)' : 'var(--paper)' }}>
            {it}
          </span>
          <span className="text-lg" style={{ color: pink ? 'var(--ink)' : 'var(--pink)' }}>
            ◆
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className="overflow-hidden border-y py-3"
      style={{
        borderColor: 'var(--line)',
        background: pink ? 'var(--pink)' : 'var(--ink)',
      }}
      aria-hidden
    >
      <div className={`marquee-track ${reverse ? 'reverse' : ''}`}>
        {row}
        {row}
      </div>
    </div>
  );
}

import type { ThumbKind } from '../../data/portfolio';

/** Code-drawn pixel thumbnails one tiny scene per project, no images. */
export default function ProjectThumb({ kind }: { kind: ThumbKind }) {
  const bg = 'var(--ink)';
  const fg = 'var(--paper)';
  const acc = 'var(--pink)';
  const cyn = 'var(--cyan)';
  const ylw = 'var(--yellow)';
  const dim = 'var(--line-strong)';

  return (
    <svg
      viewBox="0 0 160 100"
      preserveAspectRatio="xMidYMid slice"
      shapeRendering="crispEdges"
      className="block h-full w-full"
      aria-hidden
    >
      <rect width="160" height="100" fill={bg} />

      {kind === 'velnara' && (
        <g>
          {/* studio monogram + palette */}
          <rect x="24" y="22" width="48" height="56" fill="none" stroke={fg} strokeWidth="2" />
          <rect x="34" y="34" width="12" height="12" fill={acc} />
          <rect x="50" y="34" width="12" height="12" fill="none" stroke={dim} strokeWidth="2" />
          <rect x="34" y="52" width="12" height="12" fill="none" stroke={dim} strokeWidth="2" />
          <rect x="50" y="52" width="12" height="12" fill={cyn} />
          <rect x="30" y="70" width="36" height="4" fill={fg} />
          {/* sparkle burst */}
          <rect x="104" y="26" width="6" height="26" fill={acc} />
          <rect x="94" y="36" width="26" height="6" fill={acc} />
          <rect x="118" y="18" width="4" height="10" fill={ylw} />
          <rect x="118" y="48" width="4" height="10" fill={ylw} />
          <rect x="130" y="36" width="10" height="4" fill={ylw} />
          <rect x="86" y="60" width="52" height="6" fill={fg} />
          <rect x="86" y="72" width="36" height="4" fill={dim} />
        </g>
      )}

      {kind === 'ppni' && (
        <g>
          {/* hospital facade + medical cross */}
          <rect x="30" y="26" width="100" height="62" fill="none" stroke={fg} strokeWidth="2" />
          <rect x="30" y="26" width="100" height="12" fill={fg} />
          {[44, 64, 84, 104].map((x, i) => (
            <g key={i}>
              <rect x={x} y="48" width="12" height="12" fill="none" stroke={i === 1 ? acc : dim} strokeWidth="2" />
              <rect x={x} y="66" width="12" height="12" fill="none" stroke={dim} strokeWidth="2" />
            </g>
          ))}
          <rect x="70" y="66" width="20" height="22" fill={acc} />
          <rect x="77" y="70" width="6" height="10" fill={bg} />
          {/* cross badge */}
          <rect x="126" y="10" width="6" height="18" fill={acc} />
          <rect x="120" y="16" width="18" height="6" fill={acc} />
        </g>
      )}

      {kind === 'akumampu' && (
        <g>
          {/* open book + signal waves = accessible learning */}
          <rect x="26" y="52" width="50" height="34" fill="none" stroke={fg} strokeWidth="2" />
          <rect x="49" y="52" width="4" height="34" fill={fg} />
          <rect x="32" y="60" width="14" height="3" fill={dim} />
          <rect x="32" y="68" width="14" height="3" fill={dim} />
          <rect x="56" y="60" width="14" height="3" fill={acc} />
          <rect x="56" y="68" width="14" height="3" fill={dim} />
          {/* signal arcs */}
          <rect x="102" y="40" width="4" height="4" fill={cyn} />
          <rect x="110" y="34" width="4" height="12" fill={cyn} />
          <rect x="118" y="26" width="4" height="20" fill={cyn} />
          <rect x="126" y="18" width="4" height="28" fill={cyn} />
          {/* AI chip */}
          <rect x="106" y="62" width="26" height="22" fill="none" stroke={acc} strokeWidth="2" />
          <rect x="114" y="70" width="10" height="6" fill={acc} />
          <rect x="98" y="68" width="6" height="3" fill={dim} />
          <rect x="134" y="68" width="6" height="3" fill={dim} />
        </g>
      )}

      {kind === 'midnighttoys' && (
        <g>
          {/* CCTV monitor grid + watching doll eye */}
          {[18, 62, 106].map((x, i) => (
            <g key={i}>
              <rect x={x} y="14" width="36" height="24" fill="none" stroke={i === 1 ? acc : dim} strokeWidth="2" />
              {i === 1 ? (
                <g>
                  <rect x={x + 12} y="20" width="12" height="12" fill={acc} />
                  <rect x={x + 15} y="23" width="6" height="6" fill={bg} />
                </g>
              ) : (
                <g>
                  <rect x={x + 4} y="18" width="28" height="2" fill={dim} />
                  <rect x={x + 4} y="24" width="20" height="2" fill={dim} />
                </g>
              )}
            </g>
          ))}
          {/* doll silhouette */}
          <rect x="60" y="56" width="40" height="34" fill="none" stroke={fg} strokeWidth="2" />
          <rect x="70" y="66" width="8" height="8" fill={ylw} />
          <rect x="84" y="66" width="8" height="8" fill={ylw} />
          <rect x="72" y="68" width="4" height="4" fill={bg} />
          <rect x="86" y="68" width="4" height="4" fill={bg} />
          <rect x="76" y="80" width="12" height="3" fill={fg} />
          <rect x="14" y="52" width="30" height="3" fill={dim} />
          <rect x="116" y="52" width="30" height="3" fill={dim} />
        </g>
      )}

      {kind === 'pawsplash' && (
        <g>
          {/* cat + water balloon splash */}
          <rect x="26" y="34" width="44" height="40" fill="none" stroke={fg} strokeWidth="2" />
          <rect x="30" y="26" width="10" height="12" fill={fg} />
          <rect x="56" y="26" width="10" height="12" fill={fg} />
          <rect x="36" y="46" width="8" height="8" fill={bg} />
          <rect x="38" y="48" width="4" height="4" fill={acc} />
          <rect x="52" y="46" width="8" height="8" fill={bg} />
          <rect x="54" y="48" width="4" height="4" fill={acc} />
          <rect x="44" y="60" width="8" height="4" fill={acc} />
          {/* balloon + splash */}
          <rect x="104" y="22" width="20" height="20" fill={cyn} />
          <rect x="112" y="42" width="4" height="6" fill={cyn} />
          {[96, 132].map((x, i) => (
            <g key={i}>
              <rect x={x} y="26" width="4" height="4" fill={cyn} />
              <rect x={x + (i === 0 ? -2 : 2)} y="38" width="4" height="4" fill={cyn} />
            </g>
          ))}
          <rect x="100" y="66" width="10" height="10" fill="none" stroke={acc} strokeWidth="2" />
          <rect x="116" y="70" width="8" height="8" fill="none" stroke={dim} strokeWidth="2" />
          <rect x="108" y="84" width="8" height="8" fill={acc} />
        </g>
      )}

      {kind === 'visualnovel' && (
        <g>
          {/* dialogue box over two silhouettes */}
          <rect x="18" y="48" width="30" height="40" fill="none" stroke={dim} strokeWidth="2" />
          <rect x="24" y="54" width="18" height="14" fill={dim} />
          <rect x="112" y="48" width="30" height="40" fill="none" stroke={dim} strokeWidth="2" />
          <rect x="118" y="54" width="18" height="14" fill={dim} />
          <rect x="44" y="12" width="72" height="34" fill="none" stroke={fg} strokeWidth="2" />
          <rect x="56" y="46" width="10" height="10" fill={fg} />
          <rect x="52" y="20" width="44" height="4" fill={fg} />
          <rect x="52" y="28" width="56" height="4" fill={dim} />
          <rect x="52" y="36" width="28" height="4" fill={acc} />
          <rect x="126" y="66" width="8" height="8" fill={acc} />
          <rect x="24" y="66" width="8" height="8" fill={acc} />
        </g>
      )}
    </svg>
  );
}

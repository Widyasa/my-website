import { useEffect, useState } from 'react';

export type WipePhase = 'idle' | 'cover' | 'reveal';

/** Two-layer pixel wipe (pink chase, ink cover) used when switching pages. */
export default function PageWipe({ phase }: { phase: WipePhase }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (phase !== 'idle') setMounted(true);
    else {
      const t = window.setTimeout(() => setMounted(false), 500);
      return () => window.clearTimeout(t);
    }
  }, [phase]);

  if (!mounted && phase === 'idle') return null;

  const covered = phase === 'cover';

  return (
    <div className="pointer-events-none fixed inset-0 z-[9000]" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          background: 'var(--pink)',
          transform: covered ? 'translateY(0)' : phase === 'reveal' ? 'translateY(-100%)' : 'translateY(100%)',
          transition: 'transform 0.34s steps(5)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'var(--ink)',
          transform: covered ? 'translateY(0)' : phase === 'reveal' ? 'translateY(-100%)' : 'translateY(100%)',
          transition: 'transform 0.34s steps(5) 0.08s',
        }}
      />
    </div>
  );
}

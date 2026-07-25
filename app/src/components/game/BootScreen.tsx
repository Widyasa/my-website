import { useEffect, useRef, useState } from 'react';

interface BootScreenProps {
  onDone: () => void;
}

const CELLS = 24;

/** Console-style boot gate: counter 0→100, then PRESS START.
 *  Exits with a scale-burst like a cartridge snapping in. */
export default function BootScreen({ onDone }: BootScreenProps) {
  const [pct, setPct] = useState(0);
  const [ready, setReady] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const doneRef = useRef(false);

  useEffect(() => {
    let current = 0;
    const timer = window.setInterval(() => {
      current = Math.min(100, current + 2 + Math.floor(Math.random() * 9));
      setPct(current);
      if (current >= 100) {
        window.clearInterval(timer);
        setReady(true);
      }
    }, 95);
    return () => window.clearInterval(timer);
  }, []);

  const finish = () => {
    if (doneRef.current || !ready) return;
    doneRef.current = true;
    setLeaving(true);
    window.setTimeout(onDone, 480);
  };

  useEffect(() => {
    if (!ready) return;
    const auto = window.setTimeout(finish, 1400);
    const onKey = () => finish();
    window.addEventListener('keydown', onKey);
    return () => {
      window.clearTimeout(auto);
      window.removeEventListener('keydown', onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  const filled = Math.round((pct / 100) * CELLS);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center px-6 transition-all duration-500"
      onClick={finish}
      role="button"
      aria-label="Enter site"
      style={{
        background: 'var(--ink)',
        transform: leaving ? 'scale(1.6)' : 'scale(1)',
        opacity: leaving ? 0 : 1,
        transitionTimingFunction: 'steps(6)',
      }}
    >
      <div className="font-term absolute left-5 top-5 text-xl" style={{ color: 'var(--line-strong)' }}>
        WIDYA.EXE
      </div>
      <div className="font-term absolute right-5 top-5 text-xl" style={{ color: 'var(--line-strong)' }}>
        v2.0 REBUILD
      </div>

      <div
        className="font-pixel mb-8 text-center text-4xl sm:text-6xl"
        style={{ color: ready ? 'var(--pink)' : 'var(--paper)' }}
      >
        {ready ? 'READY!' : `${pct}%`}
      </div>

      <div
        className="mb-8 flex w-full max-w-md gap-[3px] border p-[5px]"
        style={{ borderColor: 'var(--paper)', borderWidth: 'var(--bw)' }}
      >
        {Array.from({ length: CELLS }).map((_, i) => (
          <span
            key={i}
            className="h-5 flex-1"
            style={{ background: i < filled ? 'var(--pink)' : 'transparent' }}
          />
        ))}
      </div>

      {ready ? (
        <div className="font-pixel blink text-sm sm:text-base">PRESS START</div>
      ) : (
        <div className="font-term text-xl" style={{ color: 'var(--line-strong)' }}>
          LOADING SPRITES…
        </div>
      )}

      <div
        className="font-term absolute bottom-6 text-center text-lg"
        style={{ color: 'var(--line-strong)' }}
      >
        TIP CATCH THE SPRITES IN THE MINI GAME FOR POINTS
      </div>
    </div>
  );
}

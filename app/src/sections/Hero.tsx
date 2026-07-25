import { useEffect, useRef } from 'react';
import MiniGame from '../components/game/MiniGame';
import Reveal from '../components/game/Reveal';
import TypeLine from '../components/game/TypeLine';
import { profile } from '../data/portfolio';

interface HeroProps {
  onViewProjects: () => void;
  onContact: () => void;
}

export default function Hero({ onViewProjects, onContact }: HeroProps) {
  const monoRef = useRef<HTMLDivElement>(null);

  // mouse parallax on the giant backdrop monogram
  useEffect(() => {
    const el = monoRef.current;
    if (!el || !window.matchMedia('(pointer: fine)').matches) return;
    const onMove = (e: MouseEvent) => {
      const dx = (e.clientX / window.innerWidth - 0.5) * 26;
      const dy = (e.clientY / window.innerHeight - 0.5) * 18;
      el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-28 sm:pt-32">
      {/* backdrop monogram */}
      <div
        ref={monoRef}
        aria-hidden
        className="font-pixel pointer-events-none absolute -right-8 -top-10 select-none text-[38vw] leading-none sm:text-[26vw]"
        style={{ color: 'transparent', WebkitTextStroke: '2px color-mix(in srgb, var(--paper) 10%, transparent)', transition: 'transform 0.4s ease-out' }}
      >
        WY
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-7">
          <div className="font-term mb-5 text-2xl" style={{ color: 'var(--pink)' }}>
            <TypeLine text="> hello, world i'm" speed={40} />
          </div>

          <h1 className="font-pixel leading-[1.05]">
            <span className="reveal-line" style={{ ['--rd' as never]: '0ms' }}>
              <span className="text-[clamp(2.6rem,8vw,5.6rem)]">WIDYA</span>
            </span>
            <span className="reveal-line" style={{ ['--rd' as never]: '140ms' }}>
              <span className="text-outline text-[clamp(2.6rem,8vw,5.6rem)]">YASA</span>
            </span>
          </h1>

          <div className="fade-item mt-6 flex flex-wrap items-center gap-x-3 gap-y-2" style={{ ['--rd' as never]: '300ms' }}>
            <span className="hud-pill" style={{ borderColor: 'var(--cyan)', color: 'var(--cyan)' }}>
              FULL-STACK
            </span>
            <span className="font-pixel text-[0.6rem]" style={{ color: 'var(--line-strong)' }}>
              ×
            </span>
            <span className="hud-pill" style={{ borderColor: 'var(--pink)', color: 'var(--pink)' }}>
              GAME DEV
            </span>
          </div>

          <p className="fade-item mt-6 max-w-xl text-lg leading-relaxed" style={{ color: 'color-mix(in srgb, var(--paper) 78%, var(--ink) 22%)', ['--rd' as never]: '420ms' }}>
            {profile.tagline}
          </p>

          <div className="fade-item mt-9 flex flex-wrap gap-5" style={{ ['--rd' as never]: '540ms' }}>
            <button className="push-btn" onClick={onViewProjects}>
              VIEW PROJECTS <span aria-hidden>→</span>
            </button>
            <button className="push-btn push-btn--ghost" onClick={onContact}>
              GET IN TOUCH
            </button>
          </div>

          <dl className="fade-item font-term mt-10 grid max-w-md grid-cols-3 gap-4 text-xl" style={{ ['--rd' as never]: '660ms' }}>
            <div>
              <dt style={{ color: 'var(--line-strong)' }}>BASE</dt>
              <dd>BALI, ID</dd>
            </div>
            <div>
              <dt style={{ color: 'var(--line-strong)' }}>CLASS</dt>
              <dd>DEV ×2</dd>
            </div>
            <div>
              <dt style={{ color: 'var(--line-strong)' }}>STATUS</dt>
              <dd style={{ color: 'var(--pink)' }}>OPEN</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal className="lg:col-span-5" >
          <div className="fade-item" style={{ ['--rd' as never]: '380ms' }}>
            <MiniGame />
            <p className="font-term mt-4 text-center text-lg" style={{ color: 'var(--line-strong)' }}>
              a portfolio should prove the craft so here's a tiny game, catch the sprites
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

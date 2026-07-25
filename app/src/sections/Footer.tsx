import { profile } from '../data/portfolio';
import type { NavTarget } from './Header';

interface FooterProps {
  onNav: (target: NavTarget) => void;
}

export default function Footer({ onNav }: FooterProps) {
  return (
    <footer className="dot-grid border-t" style={{ borderColor: 'var(--line)' }}>
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="block h-4 w-4" style={{ background: 'var(--pink)' }} />
              <span className="font-term text-2xl leading-none">widya_yasa</span>
            </div>
            <p className="font-term mt-3 text-xl" style={{ color: 'var(--line-strong)' }}>
              {profile.role}
            </p>
          </div>

          <nav className="flex gap-8">
            {(['home', 'projects', 'about', 'contact'] as NavTarget[]).map((t) => (
              <button key={t} onClick={() => onNav(t)} className="swap-link font-term text-xl uppercase">
                <span className="swap-a">{t}</span>
                <span className="swap-b" aria-hidden>
                  {t}
                </span>
              </button>
            ))}
          </nav>

          <div className="font-term text-xl" style={{ color: 'var(--line-strong)' }}>
            <div>DENPASAR, BALI</div>
            <div>GMT+8</div>
          </div>
        </div>

        <div
          className="font-term mt-12 flex flex-wrap items-center justify-between gap-4 border-t pt-6 text-lg"
          style={{ borderColor: 'var(--line)', color: 'var(--line-strong)' }}
        >
          <span>© 2026 WIDYA YASA ALL RIGHTS RESERVED</span>
          <span>
            BUILT WITH{' '}
            <span className="heart-beat" style={{ color: 'var(--pink)' }}>
              ♥
            </span>{' '}
            IN HOME NO PIXELS WERE HARMED
          </span>
        </div>
      </div>
    </footer>
  );
}

import { useEffect, useState } from 'react';
import { profile } from '../data/portfolio';

export type NavTarget = 'home' | 'projects' | 'about' | 'contact';

interface HeaderProps {
  page: 'home' | 'projects';
  onNav: (target: NavTarget) => void;
}

const LINKS: { id: NavTarget; label: string }[] = [
  { id: 'home', label: 'HOME' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'about', label: 'ABOUT' },
  { id: 'contact', label: 'CONTACT' },
];

export default function Header({ page, onNav }: HeaderProps) {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 140 && y > lastY && !menuOpen);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [menuOpen]);

  const go = (t: NavTarget) => {
    setMenuOpen(false);
    onNav(t);
  };

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-[800] border-b transition-transform duration-300"
        style={{
          background: 'color-mix(in srgb, var(--ink) 88%, transparent)',
          backdropFilter: 'blur(6px)',
          borderColor: 'var(--line)',
          transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3">
          <button onClick={() => go('home')} className="group flex items-center gap-2.5" data-cursor="link">
            <span
              className="block h-4 w-4 transition-transform duration-200 group-hover:rotate-90"
              style={{ background: 'var(--pink)' }}
            />
            <span className="font-term text-2xl leading-none">
              widya_yasa<span className="blink" style={{ color: 'var(--pink)' }}>_</span>
            </span>
          </button>

          <nav className="ml-auto hidden items-center gap-7 md:flex">
            {LINKS.map((l) => {
              const active = (l.id === 'home' && page === 'home') || (l.id === 'projects' && page === 'projects');
              return (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className={`swap-link font-term text-xl leading-none ${active ? 'active' : ''}`}
                  style={{ color: active ? 'var(--pink)' : 'var(--paper)' }}
                >
                  <span className="swap-a">{l.label}</span>
                  <span className="swap-b" aria-hidden>
                    {l.label}
                  </span>
                </button>
              );
            })}
          </nav>

          <span className="hud-pill ml-4 hidden md:inline-flex" style={{ borderColor: 'var(--pink)' }}>
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="absolute inline-flex h-full w-full animate-ping"
                style={{ background: 'var(--pink)', animationDuration: '1.6s' }}
              />
              <span className="relative inline-flex h-2.5 w-2.5" style={{ background: 'var(--pink)' }} />
            </span>
            {profile.status}
          </span>

          <button
            className="font-pixel ml-auto text-xs md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ color: 'var(--pink)' }}
          >
            {menuOpen ? '✕' : '≡'}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[790] flex flex-col items-center justify-center gap-8 md:hidden" style={{ background: 'var(--ink)' }}>
          {LINKS.map((l, i) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="font-pixel text-2xl"
              style={{ color: i % 2 ? 'var(--paper)' : 'var(--pink)' }}
            >
              {l.label}
            </button>
          ))}
          <span className="hud-pill mt-4" style={{ borderColor: 'var(--pink)' }}>
            {profile.status}
          </span>
        </div>
      )}
    </>
  );
}

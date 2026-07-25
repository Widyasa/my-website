import Reveal from '../components/game/Reveal';
import { about } from '../data/portfolio';

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
      <Reveal className="mb-12">
        <div className="font-term text-xl" style={{ color: 'var(--pink)' }}>
          // ABOUT
        </div>
        <h2 className="font-pixel mt-3 text-xl sm:text-3xl">
          <span className="reveal-line">
            <span>PLAYER PROFILE</span>
          </span>
        </h2>
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'color-mix(in srgb, var(--paper) 80%, var(--ink) 20%)' }}>
            {about.paragraphs.map((p, i) => (
              <p key={i} className="fade-item" style={{ ['--rd' as never]: `${i * 140}ms` }}>
                <span className="font-term mr-2 text-xl" style={{ color: 'var(--pink)' }}>
                  {String(i + 1).padStart(2, '0')} /
                </span>
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal className="lg:col-span-5">
          <div className="fade-item window-chrome" style={{ ['--rd' as never]: '200ms' }}>
            <div className="window-titlebar">
              <span className="window-dot" />
              <span className="window-dot" />
              <span className="window-dot" />
              <span className="font-term ml-2 text-lg leading-none" style={{ color: 'var(--line-strong)' }}>
                SIDE_QUESTS.LOG
              </span>
            </div>
            <div>
              {about.sideQuests.map((q, i) => (
                <div
                  key={q.label}
                  className="group flex items-baseline gap-4 px-5 py-4 transition-colors hover:bg-[var(--pink)] hover:[&_*]:!text-[var(--ink)]"
                  style={{ borderTop: i === 0 ? 'none' : 'var(--bw) solid var(--line)' }}
                  data-cursor="link"
                >
                  <span className="font-term w-24 shrink-0 text-xl" style={{ color: 'var(--pink)' }}>
                    {q.label}
                  </span>
                  <span className="leading-snug" style={{ color: 'color-mix(in srgb, var(--paper) 78%, var(--ink) 22%)' }}>
                    {q.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import Reveal from '../components/game/Reveal';
import { playerStats, profile, skillGroups } from '../data/portfolio';

export default function SkillsSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <Reveal className="mb-12">
        <div className="font-term text-xl" style={{ color: 'var(--pink)' }}>
          // CAPABILITIES
        </div>
        <h2 className="font-pixel mt-3 text-xl sm:text-3xl">
          <span className="reveal-line">
            <span>INVENTORY</span>
          </span>
        </h2>
        <p className="font-term mt-4 max-w-md text-xl leading-snug" style={{ color: 'var(--line-strong)' }}>
          the tools I reach for most, grouped by the layer of the stack they serve
        </p>
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-12">
        {/* player card */}
        <Reveal className="lg:col-span-4">
          <div className="window-chrome fade-item h-fit">
            <div className="window-titlebar">
              <span className="window-dot" />
              <span className="window-dot" />
              <span className="window-dot" />
              <span className="font-term ml-2 text-lg leading-none" style={{ color: 'var(--line-strong)' }}>
                PLAYER_CARD.SYS
              </span>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-4">
                <div
                  className="font-pixel flex h-14 w-14 items-center justify-center border text-sm"
                  style={{ borderColor: 'var(--pink)', color: 'var(--pink)', borderWidth: 'var(--bw)' }}
                >
                  WY
                </div>
                <div>
                  <div className="text-lg font-bold">{profile.name}</div>
                  <div className="font-term text-lg leading-tight" style={{ color: 'var(--pink)' }}>
                    {profile.role.toUpperCase()}
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {playerStats.map((s) => (
                  <div key={s.stat}>
                    <div className="font-term flex justify-between text-lg leading-none">
                      <span>{s.stat}</span>
                      <span style={{ color: 'var(--pink)' }}>{s.value}</span>
                    </div>
                    <div className="mt-1.5 flex gap-[3px]">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <span
                          key={i}
                          className="h-2.5 flex-1"
                          style={{
                            background: i < Math.round((s.value / 100) * 20) ? 'var(--pink)' : 'var(--line)',
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* skill groups */}
        <div className="space-y-10 lg:col-span-8">
          {skillGroups.map((g, gi) => (
            <Reveal key={g.id}>
              <div className="fade-item" style={{ ['--rd' as never]: `${gi * 120}ms` }}>
                <div className="font-term mb-3 flex items-center gap-3 text-xl">
                  <span style={{ color: 'var(--pink)' }}>▣</span>
                  <span>{g.label}</span>
                  <span className="h-[2px] flex-1" style={{ background: 'var(--line)' }} />
                </div>
                <div>
                  {g.items.map((it) => (
                    <div
                      key={it.name}
                      className="group flex items-center gap-3 border-b py-2.5 transition-colors hover:bg-[color-mix(in_srgb,var(--paper)_5%,transparent)]"
                      style={{ borderColor: 'var(--line)' }}
                      data-cursor="link"
                    >
                      <span className="font-pixel w-4 text-[0.6rem] opacity-0 transition-opacity group-hover:opacity-100" style={{ color: 'var(--pink)' }}>
                        ▶
                      </span>
                      <span className="font-medium">{it.name}</span>
                      <span className="ml-auto flex gap-[3px]">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className={`level-cell ${i < it.level ? 'on' : ''}`} />
                        ))}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

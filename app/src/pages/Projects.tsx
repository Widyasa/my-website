import { useState } from 'react';
import Reveal from '../components/game/Reveal';
import ProjectThumb from '../components/game/ProjectThumb';
import { profile, projects, type Project } from '../data/portfolio';

type Filter = 'ALL' | 'WEB APP' | 'GAME';

const FILTERS: Filter[] = ['ALL', 'WEB APP', 'GAME'];

function ProjectCard({ p, i }: { p: Project; i: number }) {
  return (
    <Reveal>
      <article
        className="fade-item group grid border md:grid-cols-12"
        style={{ borderColor: 'var(--line)', ['--rd' as never]: `${(i % 2) * 120}ms` }}
      >
        <div
          className="thumb-scan relative h-52 overflow-hidden border-b md:col-span-5 md:h-auto md:border-b-0 md:border-r"
          style={{ borderColor: 'var(--line)' }}
        >
          <ProjectThumb kind={p.thumb} />
          <span
            className="font-pixel absolute left-3 top-3 px-2 py-1 text-[0.55rem]"
            style={{ background: 'var(--pink)', color: 'var(--ink)' }}
          >
            STAGE {p.stage}
          </span>
        </div>

        <div className="flex flex-col p-6 md:col-span-7 sm:p-8">
          <div className="font-term text-xl" style={{ color: 'var(--line-strong)' }}>
            {p.category} · {p.kind}
          </div>
          <h3 className="mt-1 text-3xl font-bold tracking-tight">{p.title}</h3>
          <div className="font-term mt-1 text-xl" style={{ color: 'var(--cyan)' }}>
            ROLE: {p.role.toUpperCase()}
          </div>
          <p className="mt-3 max-w-lg leading-relaxed" style={{ color: 'color-mix(in srgb, var(--paper) 75%, var(--ink) 25%)' }}>
            {p.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="hud-pill !text-base">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-7">
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="swap-link font-pixel text-[0.65rem]"
              style={{ color: 'var(--pink)' }}
            >
              <span className="swap-a">{p.linkLabel} ↗</span>
              <span className="swap-b" aria-hidden>
                {p.linkLabel} ↗
              </span>
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('ALL');
  const list = projects.filter((p) => filter === 'ALL' || p.category === filter);

  return (
    <section className="mx-auto max-w-6xl px-5 pb-24 pt-28 sm:pt-36">
      <Reveal className="mb-10">
        <div className="font-term text-xl" style={{ color: 'var(--pink)' }}>
          // PORTFOLIO
        </div>
        <h1 className="font-pixel mt-3 leading-[1.1]">
          <span className="reveal-line">
            <span className="text-[clamp(1.8rem,6vw,3.6rem)]">SELECT</span>
          </span>
          <span className="reveal-line" style={{ ['--rd' as never]: '140ms' }}>
            <span className="text-outline text-[clamp(1.8rem,6vw,3.6rem)]">STAGE</span>
          </span>
        </h1>
        <p className="font-term mt-5 max-w-md text-xl leading-snug" style={{ color: 'var(--line-strong)' }}>
          the full list of projects I've worked on from web applications to game prototypes
        </p>
      </Reveal>

      <Reveal className="mb-12 flex flex-wrap gap-3">
        {FILTERS.map((f) => {
          const count = f === 'ALL' ? projects.length : projects.filter((p) => p.category === f).length;
          const active = filter === f;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="hud-pill !text-xl transition-colors"
              style={{
                background: active ? 'var(--pink)' : 'var(--ink)',
                color: active ? 'var(--ink)' : 'var(--paper)',
                borderColor: active ? 'var(--pink)' : 'var(--line-strong)',
              }}
            >
              {f} <b>[{count}]</b>
            </button>
          );
        })}
      </Reveal>

      <div className="space-y-10">
        {list.map((p, i) => (
          <ProjectCard key={p.id} p={p} i={i} />
        ))}
      </div>

      <Reveal className="mt-16 border p-8 text-center" style={{ borderColor: 'var(--line)' }}>
        <div className="font-pixel text-sm sm:text-base">BONUS STAGE</div>
        <p className="font-term mx-auto mt-3 max-w-md text-xl leading-snug" style={{ color: 'var(--line-strong)' }}>
          more experiments, starter packs, and works-in-progress live on my GitHub
        </p>
        <div className="mt-6">
          <a className="push-btn" href={profile.github} target="_blank" rel="noreferrer">
            ENTER GITHUB <span aria-hidden>↗</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}

import Reveal from '../components/game/Reveal';
import ProjectThumb from '../components/game/ProjectThumb';
import { projects, type Project } from '../data/portfolio';

interface WorkSectionProps {
  onOpenProjects: () => void;
}

function StageRow({ p, onClick }: { p: Project; onClick: () => void }) {
  return (
    <Reveal>
      <button
        onClick={onClick}
        className="group block w-full border-t text-left transition-colors duration-150 hover:bg-[var(--pink)]"
        style={{ borderColor: 'var(--line)' }}
        data-cursor="link"
      >
        <div className="grid grid-cols-12 items-center gap-4 px-1 py-5 group-hover:[&_*]:!text-[var(--ink)] sm:px-4">
          <div className="font-term col-span-2 text-2xl sm:col-span-1" style={{ color: 'var(--line-strong)' }}>
            <span className="group-hover:hidden">{p.stage}</span>
            <span className="font-pixel hidden text-xs group-hover:inline">▶</span>
          </div>

          <div className="col-span-10 sm:col-span-4">
            <div className="font-term text-lg leading-none" style={{ color: 'var(--line-strong)' }}>
              {p.category} · {p.kind}
            </div>
            <div className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">{p.title}</div>
          </div>

          <div
            className="col-span-8 hidden text-[0.95rem] leading-snug sm:col-span-4 sm:block"
            style={{ color: 'var(--line-strong)' }}
          >
            {p.description}
          </div>

          <div
            className="col-span-6 hidden h-20 overflow-hidden border sm:col-span-2 sm:block"
            style={{ borderColor: 'var(--line)' }}
          >
            <ProjectThumb kind={p.thumb} />
          </div>

          <div className="col-span-4 text-right font-pixel text-xs sm:col-span-1" style={{ color: 'var(--line-strong)' }}>
            <span className="transition-transform duration-200 group-hover:inline-block group-hover:translate-x-1">→</span>
          </div>
        </div>
      </button>
    </Reveal>
  );
}

export default function WorkSection({ onOpenProjects }: WorkSectionProps) {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="font-term text-xl" style={{ color: 'var(--pink)' }}>
            // SELECTED WORK
          </div>
          <h2 className="font-pixel mt-3 text-xl sm:text-3xl">
            <span className="reveal-line">
              <span>FEATURED STAGES</span>
            </span>
          </h2>
        </div>
        <p className="font-term max-w-xs text-xl leading-snug" style={{ color: 'var(--line-strong)' }}>
          three highlighted builds shipped web platforms and a game-jam horror
        </p>
      </Reveal>

      <div className="border-b" style={{ borderColor: 'var(--line)' }}>
        {featured.map((p) => (
          <StageRow key={p.id} p={p} onClick={onOpenProjects} />
        ))}
      </div>

      <Reveal className="mt-10">
        <button className="push-btn" onClick={onOpenProjects}>
          VIEW ALL STAGES <span aria-hidden>→</span>
        </button>
      </Reveal>
    </section>
  );
}

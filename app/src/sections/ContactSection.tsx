import { useState } from 'react';
import Reveal from '../components/game/Reveal';
import { EMAIL, profile } from '../data/portfolio';

const SOCIALS = [
  { label: 'GITHUB', handle: '@widyasa', url: profile.github },
  { label: 'LINKEDIN', handle: '/in/widya-yasa', url: profile.linkedin },
  { label: 'INSTAGRAM', handle: '@widya_yasaa', url: profile.instagram },
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard blocked */
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 border-t px-5 py-24" style={{ borderColor: 'var(--line)' }}>
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 text-center">
          <div className="font-term text-xl" style={{ color: 'var(--pink)' }}>
            // CONTACT
          </div>
          <h2 className="font-pixel mt-4 leading-[1.15]">
            <span className="reveal-line">
              <span className="text-[clamp(1.6rem,5.5vw,3.4rem)]">JOIN THE</span>
            </span>
            <span className="reveal-line" style={{ ['--rd' as never]: '140ms' }}>
              <span className="text-outline-pink text-[clamp(1.6rem,5.5vw,3.4rem)]">PARTY</span>
            </span>
          </h2>
          <p
            className="fade-item mx-auto mt-6 max-w-xl text-lg leading-relaxed"
            style={{ color: 'color-mix(in srgb, var(--paper) 78%, var(--ink) 22%)', ['--rd' as never]: '280ms' }}
          >
            Have a project in mind or just want to say hi? I'm currently open to freelance work and full-time
            opportunities.
          </p>
        </Reveal>

        {EMAIL && (
          <Reveal className="mb-16 flex flex-wrap justify-center gap-5">
            <a className="push-btn" href={`mailto:${EMAIL}`}>
              SEND AN EMAIL <span aria-hidden>↗</span>
            </a>
            <button className="push-btn push-btn--ghost" onClick={copyEmail}>
              {copied ? 'COPIED ✓' : 'COPY EMAIL'}
            </button>
          </Reveal>
        )}

        <div className="mx-auto max-w-3xl border-b" style={{ borderColor: 'var(--line)' }}>
          {SOCIALS.map((s) => (
            <Reveal key={s.label}>
              <a
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 border-t px-2 py-6 transition-colors hover:bg-[var(--pink)] hover:[&_*]:!text-[var(--ink)] sm:px-5"
                style={{ borderColor: 'var(--line)' }}
              >
                <span className="font-term text-2xl" style={{ color: 'var(--line-strong)' }}>
                  {s.label}
                </span>
                <span className="swap-link ml-auto text-xl font-bold tracking-tight sm:text-2xl">
                  <span className="swap-a">{s.handle}</span>
                  <span className="swap-b" aria-hidden style={{ color: 'var(--ink)' }}>
                    {s.handle}
                  </span>
                </span>
                <span className="font-pixel text-xs transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" style={{ color: 'var(--line-strong)' }}>
                  ↗
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

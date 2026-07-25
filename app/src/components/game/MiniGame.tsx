import { useEffect, useRef, useState } from 'react';

// ------------------------------------------------------------------
// SPRITE CATCHER zero-gravity drifting pixel sprites, click to score.
// ------------------------------------------------------------------

type SpriteKind = 'heart' | 'star' | 'gem' | 'coin';

const SPRITES: Record<SpriteKind, { map: string[]; color: string }> = {
  heart: {
    color: '#ffa7f0',
    map: [
      '.XX..XX.',
      'XXXXXXXX',
      'XXXXXXXX',
      'XXXXXXXX',
      '.XXXXXX.',
      '..XXXX..',
      '...XX...',
    ],
  },
  star: {
    color: '#fdff48',
    map: [
      '...X...',
      '..XXX..',
      'XXXXXXX',
      '.XXXXX.',
      '..XXX..',
      '.XX.XX.',
    ],
  },
  gem: {
    color: '#76f4fc',
    map: [
      '..XXXX..',
      '.XXXXXX.',
      'XXXXXXXX',
      '.XXXXXX.',
      '..XXXX..',
      '...XX...',
    ],
  },
  coin: {
    color: '#fafbfb',
    map: [
      '..XXXX..',
      '.X.XX.X.',
      'XX.XX.XX',
      'XX.XX.XX',
      '.X.XX.X.',
      '..XXXX..',
    ],
  },
};

const KINDS = Object.keys(SPRITES) as SpriteKind[];

interface Body {
  kind: SpriteKind;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  wobble: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
}

interface FloatText {
  x: number;
  y: number;
  life: number;
  text: string;
  color: string;
}

type Phase = 'idle' | 'playing' | 'over';

const ROUND_SECONDS = 20;
const SPRITE_COUNT = 5;

function randomBody(w: number, h: number): Body {
  const kind = KINDS[Math.floor(Math.random() * KINDS.length)];
  const speed = 40 + Math.random() * 70;
  const angle = Math.random() * Math.PI * 2;
  return {
    kind,
    x: 40 + Math.random() * Math.max(1, w - 80),
    y: 40 + Math.random() * Math.max(1, h - 80),
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    size: 30 + Math.random() * 14,
    wobble: Math.random() * Math.PI * 2,
  };
}

export default function MiniGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>('idle');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(ROUND_SECONDS);
  const [hi, setHi] = useState<number>(() => {
    try {
      return Number(window.localStorage.getItem('sprite-catcher-hi') ?? 0);
    } catch {
      return 0;
    }
  });
  const [powerFlash, setPowerFlash] = useState(false);

  const stateRef = useRef({
    phase: 'idle' as Phase,
    bodies: [] as Body[],
    particles: [] as Particle[],
    floats: [] as FloatText[],
    score: 0,
    mouse: { x: -100, y: -100 },
    w: 0,
    h: 0,
    last: 0,
  });

  // keep ref in sync with phase
  useEffect(() => {
    stateRef.current.phase = phase;
  }, [phase]);

  // canvas sizing
  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      stateRef.current.w = rect.width;
      stateRef.current.h = rect.height;
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, []);

  // countdown
  useEffect(() => {
    if (phase !== 'playing') return;
    setTimeLeft(ROUND_SECONDS);
    const timer = window.setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          window.clearInterval(timer);
          setPhase('over');
          setScore((s) => {
            setHi((h) => {
              const next = Math.max(h, s);
              try {
                window.localStorage.setItem('sprite-catcher-hi', String(next));
              } catch {
                /* private mode */
              }
              return next;
            });
            return s;
          });
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [phase]);

  // main loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let raf = 0;

    const drawSprite = (kind: SpriteKind, x: number, y: number, size: number) => {
      const { map, color } = SPRITES[kind];
      const px = size / map[0].length;
      ctx.fillStyle = color;
      for (let r = 0; r < map.length; r++) {
        for (let c = 0; c < map[r].length; c++) {
          if (map[r][c] === 'X') {
            ctx.fillRect(Math.round(x + c * px), Math.round(y + r * px), Math.ceil(px), Math.ceil(px));
          }
        }
      }
    };

    const loop = (now: number) => {
      const st = stateRef.current;
      const dt = Math.min(0.05, (now - st.last) / 1000 || 0);
      st.last = now;

      ctx.clearRect(0, 0, st.w, st.h);

      // faint scanlines
      ctx.fillStyle = 'rgba(250,251,251,0.03)';
      for (let y = 0; y < st.h; y += 6) ctx.fillRect(0, y, st.w, 1);

      if (st.phase === 'playing') {
        // spawn if needed
        while (st.bodies.length < SPRITE_COUNT) st.bodies.push(randomBody(st.w, st.h));

        st.bodies.forEach((b) => {
          b.x += b.vx * dt;
          b.y += b.vy * dt;
          b.wobble += dt * 3;
          if (b.x < 0 || b.x + b.size > st.w) b.vx *= -1;
          if (b.y < 0 || b.y + b.size > st.h) b.vy *= -1;
          b.x = Math.max(0, Math.min(st.w - b.size, b.x));
          b.y = Math.max(0, Math.min(st.h - b.size, b.y));
          const bob = Math.sin(b.wobble) * 3;
          drawSprite(b.kind, b.x, b.y + bob, b.size);
        });
      } else {
        // attract mode: slow drifting silhouettes
        if (st.bodies.length === 0 && st.w > 0) {
          for (let i = 0; i < SPRITE_COUNT; i++) st.bodies.push(randomBody(st.w, st.h));
        }
        ctx.globalAlpha = 0.35;
        st.bodies.forEach((b) => {
          b.x += b.vx * dt * 0.35;
          b.y += b.vy * dt * 0.35;
          b.wobble += dt * 2;
          if (b.x < 0 || b.x + b.size > st.w) b.vx *= -1;
          if (b.y < 0 || b.y + b.size > st.h) b.vy *= -1;
          drawSprite(b.kind, b.x, b.y + Math.sin(b.wobble) * 3, b.size);
        });
        ctx.globalAlpha = 1;
      }

      // particles
      st.particles = st.particles.filter((p) => p.life > 0);
      st.particles.forEach((p) => {
        p.life -= dt;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.vy += 260 * dt;
        ctx.globalAlpha = Math.max(0, p.life / 0.5);
        ctx.fillStyle = p.color;
        ctx.fillRect(Math.round(p.x), Math.round(p.y), 4, 4);
        ctx.globalAlpha = 1;
      });

      // floating +10 texts
      st.floats = st.floats.filter((f) => f.life > 0);
      st.floats.forEach((f) => {
        f.life -= dt;
        f.y -= 34 * dt;
        ctx.globalAlpha = Math.max(0, f.life / 0.7);
        ctx.fillStyle = f.color;
        ctx.font = '14px "Press Start 2P", monospace';
        ctx.fillText(f.text, f.x, f.y);
        ctx.globalAlpha = 1;
      });

      // crosshair
      if (st.phase === 'playing') {
        const { x, y } = st.mouse;
        ctx.strokeStyle = '#ffa7f0';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x - 12, y);
        ctx.lineTo(x - 4, y);
        ctx.moveTo(x + 4, y);
        ctx.lineTo(x + 12, y);
        ctx.moveTo(x, y - 12);
        ctx.lineTo(x, y - 4);
        ctx.moveTo(x, y + 4);
        ctx.lineTo(x, y + 12);
        ctx.stroke();
        ctx.fillStyle = '#ffa7f0';
        ctx.fillRect(x - 1, y - 1, 2, 2);
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const start = () => {
    stateRef.current.bodies = [];
    stateRef.current.particles = [];
    stateRef.current.floats = [];
    stateRef.current.score = 0;
    setScore(0);
    setPhase('playing');
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    stateRef.current.mouse.x = e.clientX - rect.left;
    stateRef.current.mouse.y = e.clientY - rect.top;
  };

  const onPointerDown = (e: React.PointerEvent) => {
    const st = stateRef.current;
    if (st.phase !== 'playing') {
      start();
      return;
    }
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const hitIndex = st.bodies.findIndex(
      (b) => x >= b.x - 6 && x <= b.x + b.size + 6 && y >= b.y - 6 && y <= b.y + b.size + 6
    );
    if (hitIndex >= 0) {
      const b = st.bodies[hitIndex];
      st.bodies.splice(hitIndex, 1);
      const gained = 10;
      const newScore = st.score + gained;
      st.score = newScore;
      setScore(newScore);
      if (newScore % 50 === 0) {
        setPowerFlash(true);
        window.setTimeout(() => setPowerFlash(false), 700);
      }
      const color = SPRITES[b.kind].color;
      for (let i = 0; i < 7; i++) {
        const a = Math.random() * Math.PI * 2;
        const sp = 90 + Math.random() * 160;
        st.particles.push({
          x: x,
          y: y,
          vx: Math.cos(a) * sp,
          vy: Math.sin(a) * sp - 60,
          life: 0.5,
          color,
        });
      }
      st.floats.push({ x: x - 14, y: y - 10, life: 0.7, text: '+10', color });
    }
  };

  return (
    <div className="window-chrome" data-cursor="crosshair">
      <div className="window-titlebar">
        <span className="window-dot" />
        <span className="window-dot" />
        <span className="window-dot" />
        <span className="font-term ml-2 text-lg leading-none tracking-wide" style={{ color: 'var(--line-strong)' }}>
          SPRITE_CATCHER.EXE
        </span>
        <span className="font-term ml-auto text-lg leading-none" style={{ color: 'var(--pink)' }}>
          MINI GAME
        </span>
      </div>

      <div className="flex items-center gap-2 px-3 py-2" style={{ borderBottom: 'var(--bw) solid var(--line)' }}>
        <span className="hud-pill">
          SCORE <b style={{ color: 'var(--pink)' }}>{String(score).padStart(4, '0')}</b>
        </span>
        <span className="hud-pill">
          TIME <b style={{ color: timeLeft <= 5 && phase === 'playing' ? 'var(--yellow)' : 'var(--paper)' }}>{String(timeLeft).padStart(2, '0')}</b>
        </span>
        <span className="hud-pill ml-auto">
          HI <b style={{ color: 'var(--cyan)' }}>{String(hi).padStart(4, '0')}</b>
        </span>
      </div>

      <div ref={wrapRef} className="relative h-[300px] sm:h-[340px]" onPointerMove={onPointerMove} onPointerDown={onPointerDown}>
        <canvas ref={canvasRef} className="absolute inset-0" />

        {phase !== 'playing' && (
          <button
            type="button"
            onClick={start}
            className="absolute inset-0 flex w-full flex-col items-center justify-center gap-3 bg-black/45"
          >
            <div className="font-pixel text-lg sm:text-xl" style={{ color: phase === 'over' ? 'var(--pink)' : 'var(--paper)' }}>
              {phase === 'over' ? 'GAME OVER' : 'READY'}
            </div>
            {phase === 'over' && (
              <div className="font-term text-2xl" style={{ color: 'var(--paper)' }}>
                FINAL SCORE {score}
              </div>
            )}
            <div className="font-pixel blink text-[0.65rem] sm:text-xs" style={{ color: 'var(--yellow)' }}>
              {phase === 'over' ? 'INSERT COIN CLICK TO RETRY' : 'CLICK TO PLAY'}
            </div>
          </button>
        )}

        {powerFlash && (
          <div className="pointer-events-none absolute inset-x-0 top-3 text-center">
            <span
              className="font-pixel inline-block px-3 py-2 text-xs"
              style={{ background: 'var(--power)', color: 'var(--ink)' }}
            >
              POWER UP!
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

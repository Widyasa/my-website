import { useEffect, useRef } from 'react';

/** Two-part cursor: pink dot + difference-blend ring with spring follow.
 *  Ring expands over interactive elements; both hide over crosshair zones
 *  (the mini game draws its own crosshair). Only active on fine pointers. */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.classList.add('cursor-hidden');

    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let scale = 1;
    let targetScale = 1;
    let visible = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!visible) {
        visible = true;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
        rx = mx;
        ry = my;
      }
      const t = e.target as HTMLElement | null;
      const interactive = t?.closest('a, button, [data-cursor="link"]');
      const crosshair = t?.closest('[data-cursor="crosshair"]');
      targetScale = interactive ? 1.9 : 1;
      const hide = Boolean(crosshair);
      dot.style.opacity = hide ? '0' : '1';
      ring.style.opacity = hide ? '0' : '1';
    };

    const onLeave = () => {
      visible = false;
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      scale += (targetScale - scale) * 0.2;
      dot.style.transform = `translate3d(${mx - 4}px, ${my - 4}px, 0)`;
      ring.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0) scale(${scale})`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
      document.body.classList.remove('cursor-hidden');
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-2 w-2 opacity-0"
        style={{ background: 'var(--pink)' }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9997] h-9 w-9 rounded-full opacity-0"
        style={{ border: '2px solid var(--paper)', mixBlendMode: 'difference' }}
      />
    </>
  );
}

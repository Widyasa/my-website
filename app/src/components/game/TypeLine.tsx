import { useEffect, useRef, useState } from 'react';

interface TypeLineProps {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
}

/** Terminal typing effect with a solid block cursor. Starts when visible. */
export default function TypeLine({ text, className = '', speed = 34, startDelay = 200 }: TypeLineProps) {
  const [shown, setShown] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    let timer: number;
    const kick = window.setTimeout(() => {
      timer = window.setInterval(() => {
        i += 1;
        setShown(i);
        if (i >= text.length) window.clearInterval(timer);
      }, speed);
    }, startDelay);
    return () => {
      window.clearTimeout(kick);
      if (timer) window.clearInterval(timer);
    };
  }, [started, text, speed, startDelay]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {text.slice(0, shown)}
      <span className="blink" aria-hidden>
        █
      </span>
    </span>
  );
}

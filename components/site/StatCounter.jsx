'use client';

import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export default function StatCounter({ value }) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef(null);
  const [text, setText] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    const match = value.trim().match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (!match) return; // "S1", "Python · SQL" dst — statis apa adanya, bukan bug

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(entry.target);
          const target = parseFloat(match[1]);
          const decimals = match[1].includes('.') ? match[1].split('.')[1].length : 0;
          const suffix = match[2];
          const dur = 1100;
          const t0 = performance.now();
          function tick(t) {
            const p = Math.min(1, (t - t0) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setText((target * eased).toFixed(decimals) + suffix);
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, reduced]);

  return (
    <div className="num" ref={ref}>
      {text}
    </div>
  );
}

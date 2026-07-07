'use client';

import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export default function SplitReveal({ text, as: Tag = 'h2', className = '' }) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef(null);
  const timerRef = useRef(null);
  const [count, setCount] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(entry.target);

          if (reduced) {
            setCount(text.length);
            return;
          }

          setTyping(true);
          let i = 0;
          timerRef.current = setInterval(() => {
            i += 1;
            setCount(i);
            if (i >= text.length) {
              clearInterval(timerRef.current);
              setTyping(false);
            }
          }, 32);
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearInterval(timerRef.current);
    };
  }, [text, reduced]);

  return (
    <Tag ref={ref} className={`split-reveal ${className}`.trim()}>
      {text.slice(0, count)}
      <span className={`type-cursor${typing ? ' typing' : ''}`}>▌</span>
    </Tag>
  );
}

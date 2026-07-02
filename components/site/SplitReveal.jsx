'use client';

import { useEffect, useRef, useState } from 'react';

export default function SplitReveal({ text, as: Tag = 'h2', className = '' }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const words = text.trim().split(/\s+/);

  return (
    <Tag ref={ref} className={`split-reveal${inView ? ' in' : ''} ${className}`.trim()}>
      {words.map((w, i) => (
        <span key={i}>
          <span className="word">
            <span style={{ transitionDelay: `${i * 45}ms` }}>{w}</span>
          </span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  );
}

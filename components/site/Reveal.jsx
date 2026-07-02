'use client';

import { useEffect, useRef, useState } from 'react';

export default function Reveal({ as: Tag = 'div', stagger = false, className = '', style, children }) {
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
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const base = stagger ? 'stagger' : 'reveal';
  return (
    <Tag ref={ref} className={`${base}${inView ? ' in' : ''} ${className}`.trim()} style={style}>
      {children}
    </Tag>
  );
}

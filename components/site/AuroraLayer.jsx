'use client';

import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export default function AuroraLayer({ variant, depth }) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    function onScroll() {
      el.style.transform = `translateY(${scrollY * depth}px)`;
    }
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, [depth, reduced]);

  return (
    <div className="aurora-layer" ref={ref}>
      <div className={`aurora ${variant}`}></div>
    </div>
  );
}

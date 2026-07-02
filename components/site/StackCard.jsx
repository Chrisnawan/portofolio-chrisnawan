'use client';

import { useSpotlightTilt } from '@/hooks/useSpotlightTilt';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export default function StackCard({ title, chips }) {
  const reduced = usePrefersReducedMotion();
  const ref = useSpotlightTilt({ tilt: false, enabled: !reduced });

  return (
    <div className="stack-card" ref={ref}>
      <h3>{title}</h3>
      <div className="chips">
        {chips.map((c) => (
          <span className="chip" key={c}>{c}</span>
        ))}
      </div>
    </div>
  );
}

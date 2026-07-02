'use client';

import { useMagnetic } from '@/hooks/useMagnetic';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export default function MagneticButton({ className, children, ...props }) {
  const reduced = usePrefersReducedMotion();
  const ref = useMagnetic(!reduced);

  return (
    <button ref={ref} className={className} {...props}>
      {children}
    </button>
  );
}

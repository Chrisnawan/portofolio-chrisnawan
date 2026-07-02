'use client';

import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    function update() {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      el.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
    }
    addEventListener('scroll', update, { passive: true });
    update();
    return () => removeEventListener('scroll', update);
  }, []);

  return <div className="scroll-progress" ref={ref}></div>;
}

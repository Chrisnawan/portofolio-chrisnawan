'use client';

import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export default function IntroScreen() {
  const reduced = usePrefersReducedMotion();
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    if (reduced) return;

    document.documentElement.classList.add('intro-lock');

    const dur = 1700;
    const t0 = performance.now();
    let raf;
    let doneTimeout;
    let removeTimeout;

    function tick(t) {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 2);
      setPct(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        doneTimeout = setTimeout(() => {
          setDone(true);
          document.documentElement.classList.remove('intro-lock');
          removeTimeout = setTimeout(() => setRemoved(true), 900);
        }, 300);
      }
    }
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(doneTimeout);
      clearTimeout(removeTimeout);
      document.documentElement.classList.remove('intro-lock');
    };
  }, [reduced]);

  if (removed) return null;

  return (
    <div className={`intro-screen${done ? ' done' : ''}`}>
      <div className="intro-panel intro-panel-l"></div>
      <div className="intro-panel intro-panel-r"></div>
      <div className="intro-inner">
        <span className="intro-eyebrow">// initializing portfolio</span>
        <h1 className="intro-title">
          Selamat datang
          <br />
          di <span className="grad">portofolio</span> saya
        </h1>
        <div className="intro-progress">
          <div className="intro-bar">
            <span style={{ width: `${pct}%` }}></span>
          </div>
          <span className="intro-pct">{pct}%</span>
        </div>
      </div>
    </div>
  );
}

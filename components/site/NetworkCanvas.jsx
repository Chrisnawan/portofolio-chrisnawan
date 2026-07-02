'use client';

import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export default function NetworkCanvas() {
  const reduced = usePrefersReducedMotion();
  const canvasRef = useRef(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const cx = cv.getContext('2d');
    let raf;
    let pts = [];

    function size() {
      const r = cv.getBoundingClientRect();
      cv.width = r.width * devicePixelRatio;
      cv.height = r.height * devicePixelRatio;
      cx.setTransform(1, 0, 0, 1, 0, 0);
      cx.scale(devicePixelRatio, devicePixelRatio);
      cv.style.width = r.width + 'px';
      cv.style.height = r.height + 'px';
    }
    function init() {
      const r = cv.getBoundingClientRect();
      size();
      const N = Math.min(90, Math.round((r.width * r.height) / 22000));
      pts = Array.from({ length: N }, (_, i) => ({
        x: Math.random() * r.width,
        y: Math.random() * r.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        d: i % 7 === 0,
      }));
    }
    function draw() {
      const r = cv.getBoundingClientRect();
      cx.clearRect(0, 0, r.width, r.height);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > r.width) p.vx *= -1;
        if (p.y < 0 || p.y > r.height) p.vy *= -1;
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 110) {
            cx.strokeStyle = `rgba(123,123,246,${(1 - dist / 110) * 0.14})`;
            cx.lineWidth = 1;
            cx.beginPath();
            cx.moveTo(p.x, p.y);
            cx.lineTo(q.x, q.y);
            cx.stroke();
          }
        }
        cx.beginPath();
        cx.arc(p.x, p.y, p.d ? 2.2 : 1.3, 0, 7);
        cx.fillStyle = p.d ? 'rgba(94,233,208,.5)' : 'rgba(170,165,255,.35)';
        cx.fill();
      }
      raf = requestAnimationFrame(draw);
    }
    function start() {
      if (!cv.getBoundingClientRect().width) return;
      init();
      cancelAnimationFrame(raf);
      if (reduced) {
        draw();
        cancelAnimationFrame(raf);
      } else {
        draw();
      }
    }

    function onResize() {
      cancelAnimationFrame(raf);
      start();
    }
    addEventListener('resize', onResize);
    start();

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener('resize', onResize);
    };
  }, [reduced]);

  return <canvas className="bg-net" ref={canvasRef} />;
}

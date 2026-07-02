'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export default function LanyardPortrait() {
  const reduced = usePrefersReducedMotion();
  const wrapRef = useRef(null);

  useEffect(() => {
    const lanyard = wrapRef.current;
    if (!lanyard || reduced) return;

    let dragging = false;
    let settleFrame = null;
    let x = 0, y = 0, rot = 0, vx = 0, vy = 0, rotVel = 0;
    let dragStartX = 0, dragStartY = 0, startX = 0, startY = 0;
    const MAX_RADIUS = 120;

    function applyTransform() {
      lanyard.style.transform = `translate(${x}px,${y}px) rotate(${rot}deg)`;
    }

    function startIdleIfRest() {
      if (
        Math.abs(x) < 0.4 && Math.abs(y) < 0.4 && Math.abs(rot) < 0.15 &&
        Math.abs(vx) < 0.05 && Math.abs(vy) < 0.05 && Math.abs(rotVel) < 0.05
      ) {
        x = 0; y = 0; rot = 0; vx = 0; vy = 0; rotVel = 0;
        lanyard.style.transform = '';
        lanyard.classList.add('idle');
      }
    }

    function springStep() {
      const stiffness = 0.09, damping = 0.88;
      vx = (vx - stiffness * x) * damping; x += vx;
      vy = (vy - stiffness * y) * damping; y += vy;
      rotVel = (rotVel - stiffness * rot) * damping; rot += rotVel;
      applyTransform();
      const atRest =
        Math.abs(x) < 0.4 && Math.abs(y) < 0.4 && Math.abs(rot) < 0.15 &&
        Math.abs(vx) < 0.05 && Math.abs(vy) < 0.05 && Math.abs(rotVel) < 0.05;
      if (!atRest) {
        settleFrame = requestAnimationFrame(springStep);
      } else {
        settleFrame = null;
        startIdleIfRest();
      }
    }

    function pointerPos(e) {
      const t = e.touches ? e.touches[0] : e;
      return { x: t.clientX, y: t.clientY };
    }

    function onPointerDown(e) {
      if (e.type === 'mousedown' && e.button !== 0) return;
      if (e.cancelable) e.preventDefault();
      dragging = true;
      lanyard.classList.remove('idle');
      lanyard.classList.add('dragging');
      if (settleFrame) { cancelAnimationFrame(settleFrame); settleFrame = null; }
      const p = pointerPos(e);
      dragStartX = p.x; dragStartY = p.y;
      startX = x; startY = y;
      addEventListener('mousemove', onPointerMove);
      addEventListener('touchmove', onPointerMove, { passive: false });
      addEventListener('mouseup', onPointerUp);
      addEventListener('touchend', onPointerUp);
    }
    function onPointerMove(e) {
      if (!dragging) return;
      if (e.touches) e.preventDefault();
      const p = pointerPos(e);
      let dx = startX + (p.x - dragStartX);
      let dy = startY + (p.y - dragStartY);
      const dist = Math.hypot(dx, dy);
      if (dist > MAX_RADIUS) {
        const k = MAX_RADIUS / dist;
        dx *= k; dy *= k;
      }
      x = dx; y = dy;
      rot = Math.max(-48, Math.min(48, x * 0.28));
      applyTransform();
    }
    function onPointerUp() {
      if (!dragging) return;
      dragging = false;
      lanyard.classList.remove('dragging');
      vx = Math.max(-10, Math.min(10, x * 0.18));
      vy = Math.max(-10, Math.min(10, y * 0.18));
      rotVel = Math.max(-8, Math.min(8, rot * 0.18));
      removeEventListener('mousemove', onPointerMove);
      removeEventListener('touchmove', onPointerMove);
      removeEventListener('mouseup', onPointerUp);
      removeEventListener('touchend', onPointerUp);
      springStep();
    }

    lanyard.addEventListener('mousedown', onPointerDown);
    lanyard.addEventListener('touchstart', onPointerDown, { passive: false });
    lanyard.classList.add('idle');

    return () => {
      lanyard.removeEventListener('mousedown', onPointerDown);
      lanyard.removeEventListener('touchstart', onPointerDown);
      removeEventListener('mousemove', onPointerMove);
      removeEventListener('touchmove', onPointerMove);
      removeEventListener('mouseup', onPointerUp);
      removeEventListener('touchend', onPointerUp);
      if (settleFrame) cancelAnimationFrame(settleFrame);
    };
  }, [reduced]);

  return (
    <div className="portrait-wrap" ref={wrapRef}>
      <div className="lanyard-strap">
        <span>CHRISNAWAN.DEV</span>
      </div>
      <div className="lanyard-hook"></div>
      <div className="portrait-card">
        <div className="portrait-ring"></div>
        <div className="portrait">
          <Image
            src="/img/pasfoto.png"
            alt="Chrisnawan Prastya Atmaja"
            fill
            draggable={false}
            style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
            sizes="(max-width: 900px) 300px, 420px"
            priority
          />
          <span className="badge">// data.analyst</span>
        </div>
      </div>
      <span className="drag-hint">⟷ tarik fotonya</span>
    </div>
  );
}

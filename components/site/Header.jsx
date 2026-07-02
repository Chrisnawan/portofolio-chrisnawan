'use client';

import { useEffect, useRef, useState } from 'react';
import { useMagnetic } from '@/hooks/useMagnetic';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const LINKS = [
  { href: '#about', label: 'Tentang' },
  { href: '#stack', label: 'Keahlian' },
  { href: '#projects', label: 'Proyek' },
  { href: '#education', label: 'Pendidikan' },
];

export default function Header() {
  const reduced = usePrefersReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('');
  const [indicatorStyle, setIndicatorStyle] = useState({ opacity: 0 });
  const navRef = useRef(null);
  const linkRefs = useRef({});
  const ctaRef = useMagnetic(!reduced);

  useEffect(() => {
    function onScroll() {
      setScrolled(scrollY > 20);
    }
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref('#' + entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const link = linkRefs.current[activeHref];
    if (!link) {
      setIndicatorStyle({ opacity: 0 });
      return;
    }
    setIndicatorStyle({
      opacity: 1,
      left: link.offsetLeft,
      width: link.offsetWidth,
    });
  }, [activeHref]);

  return (
    <header id="header" className={scrolled ? 'scrolled' : ''}>
      <div className="wrap nav">
        <a href="#hero" className="brand">
          <span className="dot"></span>
          Chrisnawan<span style={{ color: 'var(--muted-dim)' }}>.dev</span>
        </a>
        <nav className={`nav-links${open ? ' open' : ''}`} ref={navRef}>
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              ref={(el) => { linkRefs.current[l.href] = el; }}
              className={activeHref === l.href ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" ref={ctaRef} onClick={() => setOpen(false)}>
            Hubungi Saya
          </a>
          <span className="nav-indicator" style={indicatorStyle}></span>
        </nav>
        <button className="menu-btn" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          ☰
        </button>
      </div>
    </header>
  );
}

'use client';

import { useSpotlightTilt } from '@/hooks/useSpotlightTilt';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export default function ProjectCard({ proyek }) {
  const reduced = usePrefersReducedMotion();
  const ref = useSpotlightTilt({ tilt: true, enabled: !reduced });
  const tech = (proyek.tech || '')
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean);

  return (
    <article className="pcard" ref={ref}>
      <div className="pcard-bar"></div>
      <div className="body">
        {proyek.kategori && <span className="cat">{proyek.kategori}</span>}
        <h3>{proyek.judul}</h3>
        {proyek.periode && <div className="period">{proyek.periode}</div>}
        {proyek.deskripsi && (
          <p>
            {proyek.deskripsi.split('\n').map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </p>
        )}
        {tech.length > 0 && (
          <div className="pbadges">
            {tech.map((t) => (
              <span className="chip" key={t}>{t}</span>
            ))}
          </div>
        )}
        {proyek.link_github && (
          <a href={proyek.link_github} target="_blank" rel="noopener noreferrer" className="plink">
            Lihat di GitHub →
          </a>
        )}
      </div>
    </article>
  );
}

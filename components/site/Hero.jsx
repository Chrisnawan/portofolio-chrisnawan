'use client';

import { useMagnetic } from '@/hooks/useMagnetic';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import Reveal from './Reveal';
import StatCounter from './StatCounter';
import LanyardPortrait from './LanyardPortrait';

export default function Hero() {
  const reduced = usePrefersReducedMotion();
  const ctaRef = useMagnetic(!reduced);

  return (
    <section className="hero section" id="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-left">
            <Reveal as="p" className="hero-hello">
              Halo, saya <b>Chrisnawan Prastya Atmaja</b> 👋
            </Reveal>
            <Reveal as="h1">
              Data Analyst
              <br />& <span className="grad">Visualisasi</span>
              <br />
              Data
            </Reveal>
            <Reveal as="p" className="lead">
              Mahasiswa Informatika AMIKOM yang mengubah data mentah menjadi insight — dari data
              wrangling &amp; EDA hingga dashboard interaktif dengan Python, SQL, dan Streamlit.
            </Reveal>
            <Reveal as="div" className="hero-actions">
              <a href="#contact" className="btn btn-primary" ref={ctaRef}>
                Hubungi Saya →
              </a>
              <a
                href="/files/CV_Chrisnawan_Prastya_Atmaja_Data_Analyst.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                ↓ Unduh CV
              </a>
            </Reveal>
            <Reveal as="div" className="hero-stats" stagger>
              <div className="stat">
                <StatCounter value="9+" />
                <div className="lbl">Sertifikasi Dicoding</div>
              </div>
              <div className="stat">
                <StatCounter value="S1" />
                <div className="lbl">Informatika AMIKOM</div>
              </div>
              <div className="stat">
                <StatCounter value="Python · SQL" />
                <div className="lbl">Tools Utama</div>
              </div>
            </Reveal>
          </div>
          <Reveal as="div" className="hero-right">
            <LanyardPortrait />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

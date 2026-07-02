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
              Halo, saya <b>Chrisnawan Prastya Atmaja</b>
            </Reveal>
            <Reveal as="h1">
              Data Analyst
              <br />& <span className="grad">AI Engineer</span>
            </Reveal>
            <Reveal as="div" className="lead">
              <p>
                Saya seorang mahasiswa Informatika di Universitas AMIKOM Yogyakarta dengan
                ketertarikan mendalam pada dunia data. Fokus saya adalah menerjemahkan data
                kompleks menjadi cerita yang mudah dipahami dan keputusan yang tepat.
              </p>
              <p>
                Alur kerja saya mencakup keseluruhan proses analisis: mulai dari membersihkan dan
                menyiapkan data (data wrangling), menggali pola melalui exploratory data analysis
                (EDA), hingga menyajikan temuan dalam bentuk dashboard interaktif yang bisa
                digunakan langsung oleh stakeholder.
              </p>
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

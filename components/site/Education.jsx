import Reveal from './Reveal';
import SplitReveal from './SplitReveal';

const TIMELINE = [
  {
    yr: '2023 – Sekarang',
    title: 'Universitas AMIKOM Yogyakarta',
    org: 'S1 Informatika',
    desc: 'Berfokus pada analisis data, visualisasi, dan pengembangan perangkat lunak.',
  },
  {
    yr: '2019 – 2022',
    title: 'SMK Penerbangan AAG Adisutjipto',
    org: 'Yogyakarta',
  },
];

const PELATIHAN = [
  { title: 'Teknik Ethical Hacking & Cyber Security (Pentester / White Hat)', yr: 'Okt 2023' },
  { title: 'Membuat Ilustrasi dengan Adobe Illustrator', yr: 'Nov 2023' },
];

const SERTIFIKASI = [
  { title: 'Belajar Fundamental Analisis Data', yr: 'Apr 2026' },
  { title: 'Belajar Matematika untuk Data Science', yr: 'Mar 2026' },
  { title: 'Belajar Machine Learning untuk Pemula', yr: 'Mar 2026' },
  { title: 'Belajar Dasar Data Science', yr: 'Feb 2026' },
  { title: 'Belajar Dasar Visualisasi Data', yr: 'Feb 2026' },
  { title: 'Memulai Pemrograman dengan Python', yr: 'Feb 2026' },
  { title: 'Belajar Dasar Git dengan GitHub', yr: 'Feb 2026' },
  { title: 'Dasar Pemrograman untuk Pengembang Software', yr: 'Feb 2026' },
  { title: 'Pengenalan ke Logika Pemrograman (101)', yr: 'Feb 2026' },
];

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">Perjalanan</Reveal>
        <SplitReveal as="h2" className="section-title" text="Pendidikan & sertifikasi." />
        <div className="about-grid">
          <Reveal>
            <p className="sub-label">Pendidikan</p>
            <div className="timeline">
              {TIMELINE.map((t) => (
                <div className="titem" key={t.title}>
                  <div className="yr">{t.yr}</div>
                  <h3>{t.title}</h3>
                  <div className="org">{t.org}</div>
                  {t.desc && <p>{t.desc}</p>}
                </div>
              ))}
            </div>
            <p className="cert-issuer">Pelatihan Lainnya</p>
            <div className="certs">
              {PELATIHAN.map((c) => (
                <div className="cert" key={c.title}>
                  <span className="ico">✦</span>
                  {c.title}
                  <span className="yr">{c.yr}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <p className="sub-label">Sertifikasi Kompetensi · Dicoding Indonesia</p>
            <div className="certs">
              {SERTIFIKASI.map((c) => (
                <div className="cert" key={c.title}>
                  <span className="ico">✦</span>
                  {c.title}
                  <span className="yr">{c.yr}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

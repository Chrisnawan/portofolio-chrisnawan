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

// Taruh file gambar/PDF sertifikat di folder public/certificates/,
// lalu isi properti `file` dengan nama filenya, mis: 'ethical-hacking.pdf'.
const PELATIHAN = [
  { title: 'Teknik Ethical Hacking & Cyber Security (Pentester / White Hat)', yr: 'Okt 2023', file: 'coursenet-ethical-hacking.pdf' },
  { title: 'Membuat Ilustrasi dengan Adobe Illustrator', yr: 'Nov 2023', file: 'cakap-adobe-illustrator.pdf' },
];

const SERTIFIKAT_KEGIATAN = [
  { title: 'Introduction to Computer (ITC) 2023', yr: 'Ags 2023', file: 'amikom-itc-2023.pdf' },
  { title: 'Webinar Kuliah Kerja Ngoding (KKN)', yr: 'Jan 2024', file: 'geekacademy-webinar-kkn.pdf' },
  { title: 'Kunjungan Industri HMIF', yr: 'Mei 2025', file: 'amikom-kunjungan-industri-hmif.pdf' },
  { title: 'Seminar Stress Management in Career Development', yr: 'Okt 2025', file: 'amikom-seminar-stress-management.pdf' },
];

const SERTIFIKASI = [
  { title: 'Belajar Fundamental Analisis Data', yr: 'Apr 2026', file: 'dicoding-fundamental-analisis-data.pdf' },
  { title: 'Belajar Matematika untuk Data Science', yr: 'Mar 2026', file: 'dicoding-matematika-data-science.pdf' },
  { title: 'Belajar Machine Learning untuk Pemula', yr: 'Mar 2026', file: 'dicoding-machine-learning-pemula.pdf' },
  { title: 'Belajar Dasar Data Science', yr: 'Feb 2026', file: 'dicoding-dasar-data-science.pdf' },
  { title: 'Belajar Dasar Visualisasi Data', yr: 'Feb 2026', file: 'dicoding-dasar-visualisasi-data.pdf' },
  { title: 'Memulai Pemrograman dengan Python', yr: 'Feb 2026', file: 'dicoding-pemrograman-python.pdf' },
  { title: 'Belajar Dasar Git dengan GitHub', yr: 'Feb 2026', file: 'dicoding-dasar-git-github.pdf' },
  { title: 'Dasar Pemrograman untuk Pengembang Software', yr: 'Feb 2026', file: 'dicoding-dasar-pemrograman-software.pdf' },
  { title: 'Pengenalan ke Logika Pemrograman (101)', yr: 'Feb 2026', file: 'dicoding-logika-pemrograman-101.pdf' },
];

function CertItem({ c }) {
  const inner = (
    <>
      <span className="ico">✦</span>
      {c.title}
      <span className="yr">{c.yr}</span>
    </>
  );

  return c.file ? (
    <a href={`/certificates/${c.file}`} target="_blank" rel="noopener noreferrer" className="cert">
      {inner}
    </a>
  ) : (
    <div className="cert">{inner}</div>
  );
}

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
                <CertItem c={c} key={c.title} />
              ))}
            </div>
            <p className="cert-issuer">Sertifikat Kegiatan & Seminar</p>
            <div className="certs">
              {SERTIFIKAT_KEGIATAN.map((c) => (
                <CertItem c={c} key={c.title} />
              ))}
            </div>
          </Reveal>
          <Reveal>
            <p className="sub-label">Sertifikasi Kompetensi · Dicoding Indonesia</p>
            <div className="certs">
              {SERTIFIKASI.map((c) => (
                <CertItem c={c} key={c.title} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

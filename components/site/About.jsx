import Reveal from './Reveal';
import SplitReveal from './SplitReveal';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">Tentang Saya</Reveal>
        <SplitReveal as="h2" className="section-title" text="Mengubah data menjadi keputusan." />
        <div className="about-grid">
          <Reveal as="div" className="about-body">
            <p className="about-name">Chrisnawan Prastya Atmaja</p>
            <p className="about-role">// Aspiring Data Analyst · Data Visualization</p>
            <p style={{ marginTop: 24 }}>
              Saya mahasiswa Informatika di Universitas AMIKOM Yogyakarta yang berfokus pada
              analisis dan visualisasi data. Saya terbiasa mengolah data mulai dari pembersihan
              (data wrangling) dan eksplorasi (EDA) hingga menyajikannya dalam bentuk visualisasi
              dan dashboard interaktif.
            </p>
            <p>
              Didukung sertifikasi kompetensi di bidang analisis data, visualisasi data, dan
              statistika, saya antusias mengubah data mentah menjadi insight yang membantu
              pengambilan keputusan.
            </p>
            <p>
              Selain analisis data, saya juga menyukai dunia pengembangan web dan desain —
              menjembatani angka dengan antarmuka yang mudah dipahami siapa pun.
            </p>
          </Reveal>
          <Reveal as="div" className="about-meta">
            <div className="row"><span>Fokus</span><span>Analisis &amp; Visualisasi Data</span></div>
            <div className="row"><span>Lokasi</span><span>Sanden, Bantul, Yogyakarta</span></div>
            <div className="row"><span>Pendidikan</span><span>S1 Informatika · AMIKOM</span></div>
            <div className="row">
              <span>Email</span>
              <span><a href="mailto:Satyachrisna9@gmail.com">Satyachrisna9@gmail.com</a></span>
            </div>
            <div className="row">
              <span>Status</span>
              <span style={{ color: 'var(--data)' }}>● Terbuka untuk peluang</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

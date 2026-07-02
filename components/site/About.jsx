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
              I am an Informatics student with a strong interest in Artificial Intelligence, Data
              Science, Machine Learning, and Software Development. I have experience developing
              various technology-based projects, including image classification systems, financial
              forecasting models, and interactive dashboards using TensorFlow, Streamlit, FastAPI,
              and Python.
            </p>
            <p>
              My expertise includes data preprocessing, machine learning and deep learning model
              development, API integration, and data visualization. I am also experienced in
              conducting research, collaborative teamwork, and preparing technical reports and
              scientific papers.
            </p>
            <p>
              I am passionate about leveraging technology to solve real-world problems and
              continuously improving my skills in AI Engineering, Data Analytics, and modern
              software development.
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

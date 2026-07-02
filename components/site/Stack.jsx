import Reveal from './Reveal';
import SplitReveal from './SplitReveal';
import StackCard from './StackCard';

const GROUPS = [
  {
    title: 'Analisis & Visualisasi Data',
    chips: ['EDA', 'Data Wrangling', 'Data Preprocessing', 'Descriptive Statistics', 'Data Visualization', 'Dashboard (Streamlit)'],
  },
  {
    title: 'Bahasa & Tools',
    chips: ['Python', 'Pandas', 'NumPy', 'SQL', 'Spreadsheet', 'Git / GitHub'],
  },
  {
    title: 'Machine Learning',
    chips: ['Supervised Learning', 'Unsupervised Learning', 'Feature Engineering', 'Model Evaluation', 'TensorFlow'],
  },
  {
    title: 'Web & Desain',
    chips: ['HTML / CSS', 'Laravel', 'Bootstrap', 'UI/UX', 'Illustrator', 'Photoshop'],
  },
];

export default function Stack() {
  return (
    <section className="section" id="stack">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">Keahlian</Reveal>
        <SplitReveal as="h2" className="section-title" text="Tools & kemampuan." />
        <Reveal as="p" className="section-sub">
          Teknologi dan metode yang saya gunakan untuk berpindah dari data mentah ke insight yang
          bisa ditindaklanjuti.
        </Reveal>
        <Reveal as="div" className="stack-groups" stagger>
          {GROUPS.map((g) => (
            <StackCard key={g.title} title={g.title} chips={g.chips} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

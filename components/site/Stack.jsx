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
    chips: [
      'Python', 'Pandas', 'NumPy', 'SQL', 'MySQL', 'SQLite', 'SQL Server', 'Spreadsheet', 'Git / GitHub',
      'C++', 'C#', 'C', 'Arduino IDE (IoT)', 'Wokwi (ESP32/ESP8266)', 'Linux', 'Bahasa Inggris',
    ],
  },
  {
    title: 'Machine Learning',
    chips: ['Feature Engineering', 'Model Evaluation'],
  },
  {
    title: 'Supervised Learning',
    chips: [
      'Linear Regression', 'Logistic Regression', 'Decision Tree', 'Random Forest',
      'XGBoost', 'LightGBM', 'CatBoost', 'Support Vector Machine (SVM)',
      'K-Nearest Neighbors (KNN)', 'Naive Bayes', 'AdaBoost',
      'Gradient Boosting Machine (GBM)', 'Extra Trees',
    ],
  },
  {
    title: 'Unsupervised Learning',
    chips: [
      'K-Means', 'Hierarchical Clustering', 'DBSCAN', 'Gaussian Mixture Model (GMM)',
      'Mean Shift', 'Principal Component Analysis (PCA)', 'Independent Component Analysis (ICA)',
      't-SNE', 'UMAP',
    ],
  },
  {
    title: 'Semi-Supervised Learning',
    chips: ['Self-Training', 'Label Propagation', 'Label Spreading', 'Pseudo Labeling'],
  },
  {
    title: 'Deep Learning',
    chips: [
      'Multi-Layer Perceptron (MLP)', 'Convolutional Neural Network (CNN)',
      'Recurrent Neural Network (RNN)', 'Long Short-Term Memory (LSTM)',
      'Gated Recurrent Unit (GRU)', 'Autoencoder', 'Generative Adversarial Network (GAN)',
      'TensorFlow',
    ],
  },
  {
    title: 'Web & Desain',
    chips: [
      'HTML / CSS', 'Laravel', 'Bootstrap', 'UI/UX', 'Figma',
      'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign',
      'Adobe Premiere Pro', 'Adobe After Effects', 'Adobe Lightroom',
    ],
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

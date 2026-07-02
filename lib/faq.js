const RULES = [
  {
    keywords: ['halo', 'hai', 'hi', 'hello', 'p', 'permisi'],
    answer: 'Halo! Aku asisten FAQ di portofolio ini. Tanya soal skill, proyek, pendidikan, atau cara menghubungi Chrisnawan ya.',
  },
  {
    keywords: ['siapa', 'kenal', 'tentang', 'about', 'profil'],
    answer:
      'Chrisnawan Prastya Atmaja, mahasiswa Informatika di Universitas AMIKOM Yogyakarta yang fokus di Data Analyst & AI Engineering — dari data wrangling, EDA, machine learning, sampai dashboard interaktif.',
  },
  {
    keywords: ['skill', 'kemampuan', 'bisa apa', 'tools', 'teknologi', 'stack', 'bahasa program'],
    answer:
      'Kemampuannya mencakup Python, SQL (MySQL/SQLite/SQL Server), C/C++/C#, machine learning & deep learning (dari Linear Regression sampai CNN/LSTM/GAN), TensorFlow, Streamlit, Laravel, Figma, Adobe (Photoshop/Illustrator/InDesign/Premiere/After Effects/Lightroom), Arduino/IoT, dan Linux. Lihat detail lengkapnya di section "Tools & kemampuan".',
  },
  {
    keywords: ['proyek', 'project', 'karya', 'portofolio', 'portfolio', 'kerjaan'],
    answer:
      'Ada beberapa proyek yang bisa dilihat di section "Karya & proyek" — mulai dari AI Waste Classification, desain UI/UX MoneyMate di Figma, School Management System, sampai dashboard organisasi kepemudaan. Scroll ke bawah untuk lihat semuanya.',
  },
  {
    keywords: ['pendidikan', 'kuliah', 'kampus', 'sekolah', 'universitas', 'amikom', 's1'],
    answer: 'Sedang menempuh S1 Informatika di Universitas AMIKOM Yogyakarta.',
  },
  {
    keywords: ['cv', 'resume', 'download', 'unduh'],
    answer: 'CV bisa diunduh lewat tombol "↓ Unduh CV" di bagian atas (Hero) halaman ini.',
  },
  {
    keywords: ['kontak', 'contact', 'hubungi', 'email', 'wa', 'whatsapp', 'telepon', 'nomor'],
    answer:
      'Bisa dihubungi lewat email di Satyachrisna9@gmail.com, WhatsApp di +62 882-2784-1733, atau isi form di section Kontak di bagian bawah halaman ini.',
  },
  {
    keywords: ['linkedin'],
    answer: 'LinkedIn: linkedin.com/in/chrisnawanprastya-atmaja',
  },
  {
    keywords: ['github', 'git hub', 'repo'],
    answer: 'GitHub: github.com/Chrisnawan',
  },
  {
    keywords: ['lokasi', 'domisili', 'tinggal', 'alamat', 'kota'],
    answer: 'Berdomisili di Sanden, Bantul, Yogyakarta.',
  },
  {
    keywords: ['sertifikasi', 'sertifikat', 'dicoding'],
    answer: 'Punya 9+ sertifikasi kompetensi dari Dicoding di bidang data & AI.',
  },
  {
    keywords: ['magang', 'kerja', 'lowongan', 'terbuka', 'peluang', 'freelance'],
    answer: 'Statusnya saat ini terbuka untuk peluang magang maupun kolaborasi proyek — silakan hubungi lewat email atau form kontak.',
  },
];

const FALLBACK =
  'Belum ada jawaban pasti untuk itu di FAQ ini. Coba tanya soal skill, proyek, pendidikan, atau cara menghubungi — atau langsung kirim pesan lewat section Kontak.';

export function getFaqAnswer(question) {
  const q = question.toLowerCase();
  for (const rule of RULES) {
    if (rule.keywords.some((kw) => q.includes(kw))) {
      return rule.answer;
    }
  }
  return FALLBACK;
}

export const FAQ_SUGGESTIONS = [
  'Apa saja skill-nya?',
  'Ada proyek apa saja?',
  'Bagaimana cara menghubungi?',
  'Kuliah di mana?',
];

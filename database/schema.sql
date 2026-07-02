-- =========================================================
-- Skema database Postgres — Portofolio Chrisnawan Prastya Atmaja
-- ---------------------------------------------------------
-- Jalankan lewat query console Neon / Vercel Postgres.
-- Hasil konversi dari database/portfolio.sql (MySQL) versi PHP.
-- =========================================================

CREATE TABLE admin (
  id         SERIAL PRIMARY KEY,
  username   VARCHAR(50) NOT NULL UNIQUE,
  password   VARCHAR(255) NOT NULL,   -- hash bcrypt
  nama       VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE proyek (
  id          SERIAL PRIMARY KEY,
  judul       VARCHAR(150) NOT NULL,
  kategori    VARCHAR(120),
  periode     VARCHAR(120),
  deskripsi   TEXT,
  tech        VARCHAR(255),           -- daftar dipisah koma, mis: "Python,TensorFlow,CNN"
  link_github VARCHAR(255),
  urutan      INT DEFAULT 0,          -- makin kecil makin atas
  created_at  TIMESTAMP DEFAULT NOW()
);

CREATE TABLE pesan (
  id         SERIAL PRIMARY KEY,
  nama       VARCHAR(100) NOT NULL,
  email      VARCHAR(150) NOT NULL,
  pesan      TEXT NOT NULL,
  dibaca     BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Akun admin default:
--   username : admin
--   password : admin123   (GANTI setelah deploy pertama!)
INSERT INTO admin (username, password, nama) VALUES
('admin', '$2b$12$yiWEGQyYEc2s.qOohijaBuioTbPp00eRXgRpEUm43YoI9wrMo8oQa', 'Chrisnawan Prastya Atmaja');

INSERT INTO proyek (judul, kategori, periode, deskripsi, tech, link_github, urutan) VALUES
(
  'AI Waste Classification',
  'Computer Vision · Machine Learning',
  'Mei 2026 – Sekarang · Personal Project',
  'Model klasifikasi sampah berbasis Convolutional Neural Network (CNN) dengan TensorFlow, dilengkapi dashboard Streamlit interaktif untuk prediksi dan visualisasi secara real-time. Mencakup data preprocessing, feature engineering, dan evaluasi model menggunakan confusion matrix serta metrik klasifikasi untuk meningkatkan efisiensi pemilahan sampah.',
  'Python,TensorFlow,CNN,Pandas,NumPy,Streamlit',
  'https://github.com/Chrisnawan',
  1
);

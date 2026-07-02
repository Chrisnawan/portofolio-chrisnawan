import Reveal from './Reveal';
import MagneticButton from './MagneticButton';
import { submitPesan } from '@/actions/pesan.actions';

export default function Contact({ sukses, gagal }) {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">Kontak</Reveal>
        <div className="contact-grid">
          <Reveal as="div" className="contact-left">
            <h2>Mari berkolaborasi.</h2>
            <p>
              Punya proyek data, peluang magang, atau sekadar ingin berdiskusi? Saya selalu
              terbuka untuk peluang dan obrolan baru.
            </p>
            <div className="contact-links">
              <a href="mailto:Satyachrisna9@gmail.com" className="clink">
                <span className="ic">✉</span>Satyachrisna9@gmail.com
              </a>
              <a href="https://wa.me/6288227841733" target="_blank" rel="noopener noreferrer" className="clink">
                <span className="ic">☎</span>+62 882-2784-1733
              </a>
              <a href="https://linkedin.com/in/chrisnawanprastya-atmaja" target="_blank" rel="noopener noreferrer" className="clink">
                <span className="ic">in</span>linkedin.com/in/chrisnawanprastya-atmaja
              </a>
              <a href="https://github.com/Chrisnawan" target="_blank" rel="noopener noreferrer" className="clink">
                <span className="ic">gh</span>github.com/Chrisnawan
              </a>
            </div>
          </Reveal>
          <Reveal as="div" className="form">
            {sukses && <div className="alert alert-ok">✓ Terima kasih! Pesan Anda sudah terkirim dan tersimpan.</div>}
            {gagal && <div className="alert alert-err">✕ Maaf, terjadi kesalahan. Mohon lengkapi semua kolom dan coba lagi.</div>}
            <form action={submitPesan}>
              <div className="field">
                <label htmlFor="nm">Nama</label>
                <input id="nm" name="nama" type="text" placeholder="Nama Anda" required />
              </div>
              <div className="field">
                <label htmlFor="em">Email</label>
                <input id="em" name="email" type="email" placeholder="email@anda.com" required />
              </div>
              <div className="field">
                <label htmlFor="ms">Pesan</label>
                <textarea id="ms" name="pesan" placeholder="Ceritakan tentang proyek atau peluang Anda..." required></textarea>
              </div>
              <MagneticButton className="btn btn-primary" type="submit">
                Kirim Pesan →
              </MagneticButton>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

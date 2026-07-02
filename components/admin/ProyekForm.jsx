'use client';

import { useActionState } from 'react';

export default function ProyekForm({ action, initial = {}, submitLabel }) {
  const [state, formAction, pending] = useActionState(action, null);

  return (
    <>
      {state?.error && <div className="alert alert-err">{state.error}</div>}
      <div className="card card-pad">
        <form action={formAction}>
          <div className="field">
            <label>Judul Proyek *</label>
            <input name="judul" type="text" defaultValue={initial.judul} required />
          </div>
          <div className="field">
            <label>Kategori</label>
            <input
              name="kategori"
              type="text"
              defaultValue={initial.kategori}
              placeholder="mis: Computer Vision · Machine Learning"
            />
          </div>
          <div className="field">
            <label>Periode</label>
            <input
              name="periode"
              type="text"
              defaultValue={initial.periode}
              placeholder="mis: Mei 2026 – Sekarang · Personal Project"
            />
          </div>
          <div className="field">
            <label>Deskripsi</label>
            <textarea name="deskripsi" defaultValue={initial.deskripsi} placeholder="Penjelasan singkat proyek..."></textarea>
          </div>
          <div className="field">
            <label>Teknologi</label>
            <input name="tech" type="text" defaultValue={initial.tech} placeholder="Python, TensorFlow, CNN, Streamlit" />
            <div className="hint">Pisahkan dengan koma.</div>
          </div>
          <div className="field">
            <label>Link GitHub</label>
            <input
              name="link_github"
              type="text"
              defaultValue={initial.link_github}
              placeholder="https://github.com/Chrisnawan/nama-repo"
            />
          </div>
          <div className="field">
            <label>Urutan</label>
            <input name="urutan" type="number" defaultValue={initial.urutan ?? 0} />
            <div className="hint">Angka makin kecil tampil makin atas.</div>
          </div>
          <button className="btn btn-primary" type="submit" disabled={pending}>
            {pending ? 'Menyimpan...' : submitLabel}
          </button>
        </form>
      </div>
    </>
  );
}

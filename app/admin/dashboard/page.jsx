import Link from 'next/link';
import { getProyek, getPesan, markAllPesanRead } from '@/lib/db';
import { getCurrentAdmin } from '@/lib/auth';
import { logout } from '@/actions/auth.actions';
import { deleteProyek } from '@/actions/proyek.actions';
import { deletePesan } from '@/actions/pesan.actions';
import DeleteButton from '@/components/admin/DeleteButton';

export const metadata = { title: 'Dashboard — Admin Portofolio' };

function formatTanggal(iso) {
  return new Date(iso).toLocaleString('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default async function DashboardPage() {
  const admin = await getCurrentAdmin();
  await markAllPesanRead();
  const [proyek, pesan] = await Promise.all([getProyek(), getPesan()]);

  return (
    <>
      <div className="topbar">
        <div className="brand">
          <span className="dot"></span>Admin Panel
        </div>
        <div className="right">
          <span style={{ color: 'var(--muted)' }}>Halo, {admin?.nama || admin?.username}</span>
          <Link href="/" target="_blank">Lihat Website ↗</Link>
          <form action={logout}>
            <button type="submit">Keluar</button>
          </form>
        </div>
      </div>

      <div className="admin-container">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-sub">Kelola proyek yang tampil di website dan baca pesan yang masuk.</p>

        <div className="section-head">
          <h2>Proyek ({proyek.length})</h2>
          <Link href="/admin/proyek/tambah" className="btn btn-primary btn-sm">+ Tambah Proyek</Link>
        </div>
        <div className="card">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Judul</th>
                <th>Kategori</th>
                <th>Teknologi</th>
                <th style={{ width: 150 }}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {proyek.length === 0 ? (
                <tr><td colSpan={4} className="muted">Belum ada proyek.</td></tr>
              ) : (
                proyek.map((p) => (
                  <tr key={p.id}>
                    <td>
                      <strong>{p.judul}</strong>
                      <br />
                      <span className="muted">{p.periode}</span>
                    </td>
                    <td>{p.kategori}</td>
                    <td className="muted">{p.tech}</td>
                    <td>
                      <div className="admin-actions">
                        <Link href={`/admin/proyek/edit/${p.id}`} className="btn btn-ghost-admin btn-sm">Edit</Link>
                        <DeleteButton action={deleteProyek} id={p.id} confirmMessage="Hapus proyek ini?" />
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="section-head">
          <h2>Pesan Masuk ({pesan.length})</h2>
        </div>
        <div className="card">
          <table className="admin-table">
            <thead>
              <tr>
                <th style={{ width: 170 }}>Pengirim</th>
                <th>Pesan</th>
                <th style={{ width: 150 }}>Waktu</th>
                <th style={{ width: 80 }}></th>
              </tr>
            </thead>
            <tbody>
              {pesan.length === 0 ? (
                <tr><td colSpan={4} className="muted">Belum ada pesan.</td></tr>
              ) : (
                pesan.map((m) => (
                  <tr key={m.id}>
                    <td>
                      <strong>{m.nama}</strong>
                      <br />
                      <span className="muted">{m.email}</span>
                    </td>
                    <td style={{ whiteSpace: 'pre-line' }}>{m.pesan}</td>
                    <td className="muted">{formatTanggal(m.created_at)}</td>
                    <td>
                      <DeleteButton action={deletePesan} id={m.id} confirmMessage="Hapus pesan ini?" />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

import Link from 'next/link';
import ProyekForm from '@/components/admin/ProyekForm';
import { createProyek } from '@/actions/proyek.actions';

export const metadata = { title: 'Tambah Proyek — Admin' };

export default function TambahProyekPage() {
  return (
    <>
      <div className="topbar">
        <div className="brand">
          <span className="dot"></span>Admin Panel
        </div>
        <div className="right">
          <Link href="/admin/dashboard">← Kembali ke Dashboard</Link>
        </div>
      </div>
      <div className="admin-container">
        <h1 className="page-title">Tambah Proyek</h1>
        <p className="page-sub">Proyek baru akan langsung tampil di bagian &quot;Proyek&quot; pada website.</p>
        <ProyekForm action={createProyek} submitLabel="Simpan Proyek" />
      </div>
    </>
  );
}

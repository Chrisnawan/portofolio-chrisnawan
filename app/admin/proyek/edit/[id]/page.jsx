import { redirect } from 'next/navigation';
import Link from 'next/link';
import ProyekForm from '@/components/admin/ProyekForm';
import { updateProyek } from '@/actions/proyek.actions';
import { getProyekById } from '@/lib/db';

export const metadata = { title: 'Edit Proyek — Admin' };

export default async function EditProyekPage({ params }) {
  const { id } = await params;
  const proyek = await getProyekById(parseInt(id, 10));
  if (!proyek) redirect('/admin/dashboard');

  const action = updateProyek.bind(null, proyek.id);

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
        <h1 className="page-title">Edit Proyek</h1>
        <p className="page-sub">Perubahan akan langsung tampil di website.</p>
        <ProyekForm action={action} initial={proyek} submitLabel="Simpan Perubahan" />
      </div>
    </>
  );
}

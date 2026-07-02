'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { sql } from '@/lib/db';
import { getCurrentAdmin } from '@/lib/auth';

async function requireAdmin() {
  const admin = await getCurrentAdmin();
  if (!admin) redirect('/admin/login');
}

function readProyekForm(formData) {
  return {
    judul: (formData.get('judul') || '').trim(),
    kategori: (formData.get('kategori') || '').trim(),
    periode: (formData.get('periode') || '').trim(),
    deskripsi: (formData.get('deskripsi') || '').trim(),
    tech: (formData.get('tech') || '').trim(),
    linkGithub: (formData.get('link_github') || '').trim(),
    urutan: parseInt(formData.get('urutan') || '0', 10) || 0,
  };
}

export async function createProyek(prevState, formData) {
  await requireAdmin();
  const p = readProyekForm(formData);
  if (!p.judul) return { error: 'Judul proyek wajib diisi.' };

  await sql`
    INSERT INTO proyek (judul, kategori, periode, deskripsi, tech, link_github, urutan)
    VALUES (${p.judul}, ${p.kategori}, ${p.periode}, ${p.deskripsi}, ${p.tech}, ${p.linkGithub}, ${p.urutan})
  `;
  revalidatePath('/');
  revalidatePath('/admin/dashboard');
  redirect('/admin/dashboard');
}

export async function updateProyek(id, prevState, formData) {
  await requireAdmin();
  const p = readProyekForm(formData);
  if (!p.judul) return { error: 'Judul proyek wajib diisi.' };

  await sql`
    UPDATE proyek SET
      judul = ${p.judul}, kategori = ${p.kategori}, periode = ${p.periode},
      deskripsi = ${p.deskripsi}, tech = ${p.tech}, link_github = ${p.linkGithub}, urutan = ${p.urutan}
    WHERE id = ${id}
  `;
  revalidatePath('/');
  revalidatePath('/admin/dashboard');
  redirect('/admin/dashboard');
}

export async function deleteProyek(formData) {
  await requireAdmin();
  const id = parseInt(formData.get('id'), 10);
  await sql`DELETE FROM proyek WHERE id = ${id}`;
  revalidatePath('/');
  revalidatePath('/admin/dashboard');
  redirect('/admin/dashboard');
}

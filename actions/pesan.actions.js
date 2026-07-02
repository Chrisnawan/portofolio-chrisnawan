'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { sql } from '@/lib/db';
import { getCurrentAdmin } from '@/lib/auth';

export async function submitPesan(prevState, formData) {
  const nama = (formData.get('nama') || '').trim();
  const email = (formData.get('email') || '').trim();
  const pesan = (formData.get('pesan') || '').trim();
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!nama || !pesan || !emailValid) {
    redirect('/?error=1#contact');
  }

  let ok = true;
  try {
    await sql`INSERT INTO pesan (nama, email, pesan) VALUES (${nama}, ${email}, ${pesan})`;
  } catch {
    ok = false;
  }
  redirect(ok ? '/?sukses=1#contact' : '/?error=1#contact');
}

export async function deletePesan(formData) {
  const admin = await getCurrentAdmin();
  if (!admin) redirect('/admin/login');

  const id = parseInt(formData.get('id'), 10);
  await sql`DELETE FROM pesan WHERE id = ${id}`;
  revalidatePath('/admin/dashboard');
  redirect('/admin/dashboard');
}

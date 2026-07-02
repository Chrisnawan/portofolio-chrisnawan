'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { Resend } from 'resend';
import { sql } from '@/lib/db';
import { getCurrentAdmin } from '@/lib/auth';

const NOTIF_EMAIL = 'Satyachrisna9@gmail.com';

async function sendPesanNotification({ nama, email, pesan }) {
  if (!process.env.RESEND_API_KEY) return;
  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: 'Portofolio <onboarding@resend.dev>',
    to: NOTIF_EMAIL,
    replyTo: email,
    subject: `Pesan baru dari ${nama} (Portofolio)`,
    text: `Nama: ${nama}\nEmail: ${email}\n\nPesan:\n${pesan}`,
  });
}

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

  if (ok) {
    try {
      await sendPesanNotification({ nama, email, pesan });
    } catch {
      // Penyimpanan ke database tetap berhasil walau notifikasi email gagal terkirim.
    }
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

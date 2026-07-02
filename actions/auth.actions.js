'use server';

import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';
import { sql } from '@/lib/db';
import { createSession, destroySession } from '@/lib/auth';

export async function login(prevState, formData) {
  const username = (formData.get('username') || '').trim();
  const password = formData.get('password') || '';

  const rows = await sql`SELECT * FROM admin WHERE username = ${username} LIMIT 1`;
  const admin = rows[0];

  if (!admin || !(await bcrypt.compare(password, admin.password))) {
    return { error: 'Username atau password salah.' };
  }

  await createSession({
    adminId: admin.id,
    username: admin.username,
    nama: admin.nama || admin.username,
  });
  redirect('/admin/dashboard');
}

export async function logout() {
  await destroySession();
  redirect('/admin/login');
}

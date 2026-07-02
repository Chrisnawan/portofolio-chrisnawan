import { neon } from '@neondatabase/serverless';

const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;

export const sql = neon(connectionString);

export async function getProyek() {
  return sql`SELECT * FROM proyek ORDER BY urutan ASC, id DESC`;
}

export async function getProyekById(id) {
  const rows = await sql`SELECT * FROM proyek WHERE id = ${id}`;
  return rows[0] || null;
}

export async function getPesan() {
  return sql`SELECT * FROM pesan ORDER BY created_at DESC`;
}

export async function markAllPesanRead() {
  await sql`UPDATE pesan SET dibaca = TRUE WHERE dibaca = FALSE`;
}

export async function getAdminByUsername(username) {
  const rows = await sql`SELECT * FROM admin WHERE username = ${username} LIMIT 1`;
  return rows[0] || null;
}

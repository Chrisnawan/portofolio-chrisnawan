import { redirect } from 'next/navigation';
import { getCurrentAdmin } from '@/lib/auth';
import LoginForm from '@/components/admin/LoginForm';

export const metadata = { title: 'Login Admin — Portofolio' };

export default async function LoginPage() {
  const admin = await getCurrentAdmin();
  if (admin) redirect('/admin/dashboard');

  return (
    <div className="login-wrap">
      <div className="login-box">
        <div className="brand">
          <span className="dot"></span>Admin Panel
        </div>
        <p className="sub">Masuk untuk mengelola proyek & pesan.</p>
        <LoginForm />
      </div>
    </div>
  );
}

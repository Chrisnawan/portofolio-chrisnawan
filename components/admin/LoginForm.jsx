'use client';

import { useActionState } from 'react';
import { login } from '@/actions/auth.actions';

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(login, null);

  return (
    <>
      {state?.error && <div className="alert alert-err">{state.error}</div>}
      <form action={formAction}>
        <div className="field">
          <label htmlFor="u">Username</label>
          <input id="u" name="username" type="text" required autoFocus />
        </div>
        <div className="field">
          <label htmlFor="p">Password</label>
          <input id="p" name="password" type="password" required />
        </div>
        <button className="btn btn-primary" type="submit" disabled={pending}>
          {pending ? 'Memproses...' : 'Masuk →'}
        </button>
      </form>
    </>
  );
}

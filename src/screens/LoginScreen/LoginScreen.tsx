import React from 'react';
import { useAuth } from '../../hooks';

export default function LoginScreen() {
  const user = useAuth();

  return (
    <div className="centered">
      <button
        onClick={user.signInWithGoogle}
        className="bg-transparent text-blue-dark font-semibold py-2 px-4 border border-blue rounded"
      >
        Signin with Google
      </button>
      {user.error && <span>{user.error}</span>}
    </div>
  );
}

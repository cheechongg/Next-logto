'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const Login = ({ isAuth }: { isAuth: boolean }) => {
  const { push } = useRouter();

  return (
    <div>
      {isAuth ? (
        <button onClick={() => push('/api/logto/sign-out')}>Sign Out</button>
      ) : (
        <button onClick={() => push('/api/logto/sign-in')}>Sign In</button>
      )}
    </div>
  );
};

export default Login;

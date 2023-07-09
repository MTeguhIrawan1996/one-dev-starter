import * as React from 'react';

import { AuthCard, AuthWrapper } from '@/components/elements';

import { AuthBook } from './parts';

const AuthPage = () => {
  return (
    <AuthWrapper>
      <AuthCard titleCard="Login">
        <AuthBook />
      </AuthCard>
    </AuthWrapper>
  );
};

export default AuthPage;

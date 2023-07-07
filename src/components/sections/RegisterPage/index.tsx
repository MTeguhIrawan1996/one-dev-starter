import * as React from 'react';

import { AuthCard, AuthWrapper } from '@/components/elements';

import { RegisterBook } from './parts';

const RegisterPage = () => {
  return (
    <AuthWrapper>
      <AuthCard enableBack titleCard="Registrasi">
        <RegisterBook />
      </AuthCard>
    </AuthWrapper>
  );
};

export default RegisterPage;

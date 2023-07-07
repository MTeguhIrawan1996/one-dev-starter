import { Box } from '@mantine/core';
import * as React from 'react';

import { AuthCard, AuthWrapper, GlobalForm } from '@/components/elements';

import registerField from '@/constans/Field/register-field';
import {
  RegisterFormProvider,
  RegisterFormValue,
  useRegisterForm,
} from '@/utils/context/form/register-context';

const RegisterPage = () => {
  const form = useRegisterForm({
    initialValues: {
      name: '',
      email: '',
      date: null,
      cpassword: '',
      password: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      name: (value) => (value ? null : 'Invalid name'),
    },
  });

  const onSubmitForm = async (value: RegisterFormValue) => {
    // form.setFieldError('cpassword', 'No special characters allowed');
    // form.setErrors({ path: 'Error message', path2: 'Another error' });
    // form.setErrors({ cpassword: 'Too short', password: 'Invalid email' });
    // eslint-disable-next-line no-console
    console.log(value);
  };
  return (
    <AuthWrapper>
      <AuthCard enableBack titleCard="Registrasi">
        <Box w="100%">
          <RegisterFormProvider form={form}>
            <GlobalForm
              field={registerField}
              form={form}
              onSubmitForm={onSubmitForm}
            />
          </RegisterFormProvider>
        </Box>
      </AuthCard>
    </AuthWrapper>
  );
};

export default RegisterPage;

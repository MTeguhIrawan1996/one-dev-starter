import { Box } from '@mantine/core';
import { zodResolver } from '@mantine/form';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import * as React from 'react';

import { GlobalForm } from '@/components/elements';

import authField from '@/constans/Field/auth-field';
import {
  AuthFormProvider,
  AuthFormValue,
  useAuthForm,
} from '@/utils/context/form/auth-context';
import { authValidationSchema } from '@/utils/form-validation/auth/auth-validation';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IAuthBookProps {}

const AuthBook: React.FC<IAuthBookProps> = () => {
  const router = useRouter();
  const form = useAuthForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: zodResolver(authValidationSchema),
  });

  // eslint-disable-next-line unused-imports/no-unused-vars
  const onSubmitForm = async (value: AuthFormValue) => {
    const res: any = await signIn('credentials', {
      redirect: false,
      email: value.email,
      password: value.password,
      callbackUrl: '/',
    });

    res.error ? alert(res.error) : router.push('/');
  };
  return (
    <Box w="100%">
      <AuthFormProvider form={form}>
        <GlobalForm
          field={authField}
          form={form}
          onSubmitForm={onSubmitForm}
          // isLoading={loading}
        />
      </AuthFormProvider>
    </Box>
  );
};

export default AuthBook;

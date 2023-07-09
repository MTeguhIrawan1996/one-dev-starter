import { Box } from '@mantine/core';
import { zodResolver } from '@mantine/form';
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
  const form = useAuthForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: zodResolver(authValidationSchema),
  });

  // eslint-disable-next-line unused-imports/no-unused-vars
  const onSubmitForm = async (value: AuthFormValue) => {
    return;
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

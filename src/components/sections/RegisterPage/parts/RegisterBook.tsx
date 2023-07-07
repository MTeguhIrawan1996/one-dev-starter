import { useMutation } from '@apollo/client';
import { Box } from '@mantine/core';
import { zodResolver } from '@mantine/form';
import * as React from 'react';

import { GlobalForm } from '@/components/elements';

import registerField from '@/constans/Field/register-field';
import {
  IRegisterUserRequest,
  IRegisterUserResponse,
  REGISTER_USER,
} from '@/graphql/mutation/auth/useRegisterUser';
import {
  RegisterFormProvider,
  RegisterFormValue,
  useRegisterForm,
} from '@/utils/context/form/register-context';
import { registerValidationSchema } from '@/utils/form-validation/auth/register-validation';
import { dateToString } from '@/utils/helper/dateToString';

import { IExtensionGql } from '@/types/global';

const RegisterBook = () => {
  const form = useRegisterForm({
    initialValues: {
      fullName: '',
      email: '',
      date: null,
      cpassword: '',
      password: '',
    },
    validate: zodResolver(registerValidationSchema),
  });

  const [exceuteRegister, { loading }] = useMutation<
    IRegisterUserResponse,
    IRegisterUserRequest
  >(REGISTER_USER, {
    onError: ({ graphQLErrors }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ extensions }) => {
          const newExtensions = extensions as unknown as IExtensionGql;
          if (newExtensions.code === 'BAD_REQUEST') {
            form.setErrors({
              email: newExtensions.originalError.message,
            });
          }
        });
    },
    // eslint-disable-next-line unused-imports/no-unused-vars
    onCompleted: (data: IRegisterUserResponse) => {
      // console.log(data);
    },
  });

  const onSubmitForm = async (value: RegisterFormValue) => {
    const date = dateToString(value.date);
    await exceuteRegister({
      variables: {
        fullname: value.fullName,
        email: value.email,
        birthDay: date,
        password: value.password,
        repassword: value.cpassword,
      },
    });
  };
  return (
    <Box w="100%">
      <RegisterFormProvider form={form}>
        <GlobalForm
          field={registerField}
          form={form}
          onSubmitForm={onSubmitForm}
          isLoading={loading}
        />
      </RegisterFormProvider>
    </Box>
  );
};

export default RegisterBook;

// form-context.ts file
import { createFormContext } from '@mantine/form';

export interface AuthFormValue {
  email: string;
  password: string;
}

// You can give context variables any name
export const [AuthFormProvider, useAuthFormContext, useAuthForm] =
  createFormContext<AuthFormValue>();

// form-context.ts file
import { createFormContext } from '@mantine/form';

export interface RegisterFormValue {
  name: string;
  email: string;
  date: Date | string | null;
  password: string;
  cpassword: string;
}

// You can give context variables any name
export const [RegisterFormProvider, useRegisterFormContext, useRegisterForm] =
  createFormContext<RegisterFormValue>();

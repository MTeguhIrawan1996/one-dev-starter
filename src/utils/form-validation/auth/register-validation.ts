import { z } from 'zod';

import {
  zDateValidation,
  zEmailValidation,
  zPasswordValidation,
  zRequiredString,
} from '../global';

export const registerValidationSchema = z
  .object({
    fullName: zRequiredString,
    email: zEmailValidation,
    password: zPasswordValidation,
    cpassword: zRequiredString,
    date: zDateValidation,
  })
  .refine((data) => data.password === data.cpassword, {
    message: 'Konfirmasi kata sandi tidak sama',
    path: ['cpassword'], // path of error
  });

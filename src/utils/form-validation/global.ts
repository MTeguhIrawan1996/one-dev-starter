import { z } from 'zod';

export const zRequiredString = z.string().nonempty({ message: 'Wajib diisi' });

export const zPasswordValidation = z
  .string()
  .min(8, { message: 'Kata sandi minimal 8 karakter' })
  .regex(/^(?=.*[A-Z])(?=.*[!@#$%^&_*])(?=.*[0-9])[a-zA-Z0-9!@#$%^&_*]*$/, {
    message: 'Format kata sandi salah',
  })
  .nonempty({ message: 'Wajib diisi ' });

export const zEmailValidation = z
  .string()
  .email({ message: 'Format email salah' })
  .nonempty({ message: 'Wajib diisi' });

export const zDateValidation = z.date({
  required_error: 'Please select a date and time',
  invalid_type_error: 'Wajib diisi',
});

export const forgotPasswordValidate = z.object({
  email: z
    .string()
    .email({ message: 'Format email salah' })
    .nonempty({ message: 'Email wajib diisi' }),
});

export const resetPasswordValidate = z
  .object({
    password: z
      .string()
      .min(8, { message: 'Kata sandi minimal 8 karakter' })
      .regex(/^(?=.*[A-Z])(?=.*[!@#$%^&_*])(?=.*[0-9])[a-zA-Z0-9!@#$%^&_*]*$/, {
        message: 'Format kata sandi salah',
      })
      .nonempty({ message: 'Kata sandi wajib diisi' }),
    confirm: z
      .string()
      .nonempty({ message: 'Konfirmasi kata sandi wajib diisi' }),
  })
  .refine((data) => data.password === data.confirm, {
    message: 'Konfirmasi kata sandi tidak sama',
    path: ['confirm'], // path of error
  });

export const prioritasValidate = z.object({
  name: z.string().nonempty({ message: 'Prioritas wajib diisi' }),
});

export const projectValidate = z.object({
  projectName: z.string().nonempty({ message: 'Nama Project wajib diisi' }),
  description: z.string().nonempty({ message: 'Deskripsi wajib diisi' }),
  idPriority: z.string().nonempty({ message: 'Pilih prioritas' }),

  deadLine: z.date({
    required_error: 'Please select a date and time',
    invalid_type_error: 'Deadline harus dipilih',
  }),
});

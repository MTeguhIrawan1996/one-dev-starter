import { ControllerPropsTeguh } from '@/types/global';

const registerField: ControllerPropsTeguh[] = [
  {
    control: 'text-input',
    name: 'fullName',
    label: 'Nama Lengkap',
    withAsterisk: true,
  },
  {
    control: 'text-input',
    name: 'email',
    label: 'Email',
  },
  {
    control: 'date-input',
    name: 'date',
    label: 'Tanggal lahir',
    placeholder: 'MM/DD/YYYY',
    withAsterisk: true,
  },
  {
    control: 'password-input',
    name: 'password',
    label: 'Password',
  },
  {
    control: 'password-input',
    name: 'cpassword',
    label: 'Confirm Password',
  },
];

export default registerField;

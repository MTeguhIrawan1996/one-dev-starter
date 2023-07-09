import { ControllerPropsTeguh } from '@/types/global';

const authField: ControllerPropsTeguh[] = [
  {
    control: 'text-input',
    name: 'email',
    label: 'Email',
    withAsterisk: true,
  },
  {
    control: 'password-input',
    name: 'password',
    label: 'Password',
    withAsterisk: true,
  },
];

export default authField;

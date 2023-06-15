import { SelectProps, TextInputProps } from '@mantine/core';

export type ControllerPropsTeguh =
  | ({ control: 'select' } & SelectProps &
      React.RefAttributes<HTMLInputElement>)
  | ({ control: 'text-input' } & TextInputProps &
      React.RefAttributes<HTMLInputElement>);

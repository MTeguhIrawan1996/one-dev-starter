import { PasswordInputProps, SelectProps, TextInputProps } from '@mantine/core';
import { DatePickerInputProps } from '@mantine/dates';

export type ControllerPropsTeguh =
  | ({ control: 'select' } & SelectProps &
      React.RefAttributes<HTMLInputElement>)
  | ({ control: 'text-input' } & TextInputProps &
      React.RefAttributes<HTMLInputElement>)
  | ({ control: 'password-input' } & PasswordInputProps &
      React.RefAttributes<HTMLInputElement>)
  | ({ control: 'date-input' } & DatePickerInputProps &
      React.RefAttributes<HTMLInputElement>);

export interface IExtensionKey {
  extensions: {
    code: string;
    originalError: {
      message: string;
    };
  };
}
export interface INotExtensionKey {
  code: string;
  originalError: {
    message: string;
  };
}

export type IExtensionGql = IExtensionKey & INotExtensionKey;

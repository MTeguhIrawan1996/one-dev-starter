import { PasswordInput, Select, TextInput } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import * as React from 'react';
import 'dayjs/locale/id';

import { ControllerPropsTeguh } from '@/types/global';

const FormController: React.FC<ControllerPropsTeguh> = (props) => {
  const { control } = props;
  switch (control) {
    case 'select':
      return <Select {...props} />;
    case 'text-input':
      return <TextInput {...props} />;
    case 'password-input':
      return <PasswordInput {...props} />;
    case 'date-input':
      return (
        <DatePickerInput locale="id" valueFormat="DD MMMM YYYY" {...props} />
      );
    default:
      return null;
  }
};

export default FormController;

import { Select, TextInput } from '@mantine/core';
import * as React from 'react';

import { ControllerPropsTeguh } from '@/types/global';

const FormController: React.FC<ControllerPropsTeguh> = (props) => {
  const { control } = props;
  switch (control) {
    case 'select':
      return <Select {...props} />;
    case 'text-input':
      return <TextInput {...props} />;
    default:
      return null;
  }
};

export default FormController;

import { Box, Button, Flex, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import * as React from 'react';

import { InnerWrapper } from '@/components/elements';
import FormController from '@/components/elements/form/FormController';

import { ControllerPropsTeguh } from '@/types/global';

interface FormValues {
  name: string;
  email: string;
  idExample: string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IFormContentProps {}

// eslint-disable-next-line unused-imports/no-unused-vars
const FormContent: React.FC<IFormContentProps> = (props) => {
  const form = useForm<FormValues>({
    initialValues: {
      name: '',
      email: '',
      idExample: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  React.useEffect(() => {
    form.setValues({
      name: 'Teguh Value',
      email: 'email value',
      idExample: 'react',
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fields: ControllerPropsTeguh[] = [
    {
      control: 'text-input',
      name: 'name',
      label: 'Nama Lengkap',
    },
    {
      control: 'text-input',
      name: 'email',
      label: 'Email',
    },
    {
      control: 'select',
      name: 'idExample',
      label: 'Example Select',
      placeholder: 'Pick one',
      data: [
        { value: 'react', label: 'React' },
        { value: 'angular', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' },
      ],
    },
  ];
  return (
    <InnerWrapper>
      <Box w="100%">
        <form onSubmit={form.onSubmit(() => ({}))}>
          <Flex direction="column" gap="md" w="50%">
            {fields.map(({ name, ...val }, i) => (
              <FormController
                {...val}
                {...form.getInputProps(`${name}`)}
                key={i}
              />
            ))}
          </Flex>
          <Group mt="xl" w="50%">
            <Button type="submit" w="100%">
              Submit
            </Button>
          </Group>
        </form>
      </Box>
    </InnerWrapper>
  );
};

export default FormContent;

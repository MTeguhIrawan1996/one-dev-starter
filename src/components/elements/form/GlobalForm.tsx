import { Icon } from '@iconify/react';
import { Box, Button, Flex, Group, Text } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import * as React from 'react';

import FormController from './FormController';

import { ControllerPropsTeguh } from '@/types/global';

interface IGlobalFormProps {
  form: UseFormReturnType<any>;
  field: ControllerPropsTeguh[];
  onSubmitForm?: (values: any) => Promise<void>;
}

const GlobalForm: React.FC<IGlobalFormProps> = ({
  form,
  field,
  onSubmitForm,
}) => {
  return (
    <form onSubmit={form.onSubmit((val) => onSubmitForm?.(val))}>
      <Flex direction="column" gap="md" w="100%">
        {field.map(({ name, ...val }, i) => (
          <FormController
            {...val}
            {...form.getInputProps(`${name}`)}
            name={name}
            key={i}
            error={
              form.errors[name as string] && (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Icon
                    icon="tabler:alert-circle"
                    width={16}
                    height={16}
                    style={{ marginRight: 5 }}
                  />
                  <Text span fw={400} fz={12}>
                    {form.errors[name as string]}
                  </Text>
                </Box>
              )
            }
          />
        ))}
      </Flex>
      <Group mt="xl" w="100%">
        <Button type="submit" w="100%">
          Submit
        </Button>
      </Group>
    </form>
  );
};

export default GlobalForm;

import { Flex } from '@mantine/core';

import { FormContent } from './parts';

const FormExamplePage = () => {
  return (
    <Flex
      direction="column"
      justify="center"
      align="flex-start"
      gap="xl"
      className="rootYPaddings"
    >
      <FormContent />
    </Flex>
  );
};

export default FormExamplePage;

import { Flex } from '@mantine/core';

import { Counter, Username } from './parts';

const ZustandPage = () => {
  return (
    <Flex
      direction="column"
      justify="center"
      align="flex-start"
      gap="xl"
      className="rootYPaddings"
    >
      <Counter />
      <Username />
    </Flex>
  );
};

export default ZustandPage;

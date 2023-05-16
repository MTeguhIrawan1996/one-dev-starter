import { Flex } from '@mantine/core';
import * as React from 'react';

import { Hero } from './parts';

const LandingPage = () => {
  return (
    <Flex
      direction="column"
      justify="center"
      align="flex-start"
      gap="xl"
      className="rootYPaddings"
    >
      <Hero />
      <Hero />
    </Flex>
  );
};

export default LandingPage;

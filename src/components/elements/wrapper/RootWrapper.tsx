import { Flex } from '@mantine/core';
import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IRootWrapperProps {
  children: React.ReactNode;
}

const RootWrapper: React.FC<IRootWrapperProps> = ({ children }) => {
  return (
    <Flex
      direction="column"
      justify="center"
      align="flex-start"
      gap="xl"
      className="rootYPaddings"
      bg="grape"
    >
      {children}
    </Flex>
  );
};

export default RootWrapper;

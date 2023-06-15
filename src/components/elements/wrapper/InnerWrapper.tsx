import { Box, Container } from '@mantine/core';
import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IInnerWrapperProps {}

const InnerWrapper: React.FC<IInnerWrapperProps> = ({ children }) => {
  return (
    <Box bg="blue" w="100%" px="md" className="innerYPaddings">
      <Container size="xl" bg="yellow" className="paddings">
        {children}
      </Container>
    </Box>
  );
};

export default InnerWrapper;

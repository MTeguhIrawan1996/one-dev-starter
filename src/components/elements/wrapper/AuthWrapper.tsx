import { Flex } from '@mantine/core';
import * as React from 'react';

interface IAuthWrapperProps {
  children: React.ReactNode;
}

const AuthWrapper: React.FC<IAuthWrapperProps> = ({ children }) => {
  return (
    <Flex h="100vh" justify="center" align="center">
      {children}
    </Flex>
  );
};

export default AuthWrapper;

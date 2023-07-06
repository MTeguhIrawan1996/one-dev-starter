import {
  Box,
  Button,
  Container,
  Flex,
  Group,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import * as React from 'react';
import { shallow } from 'zustand/shallow';

import useCounter from '@/utils/store/counter';

const Username = () => {
  const [username, setUsername] = useCounter(
    (state) => [state.username, state.setUsername],
    shallow
  );
  const [usernameState, setUsernameState] = React.useState<string>('');

  const handleSubmit = () => {
    setUsername(usernameState);
  };

  return (
    <Box bg="blue" w="100%" px="md" className="innerYPaddings">
      <Container size="xl" bg="yellow" className="paddings">
        <Flex align="flex-start" justify="center" direction="column" gap="md">
          <Title order={1}>Username</Title>
          <Text span>state: {username}</Text>
          <Group>
            <TextInput
              placeholder="Your username"
              onChange={(e) => setUsernameState(e.target.value)}
            />
            <Button variant="outline" onClick={handleSubmit}>
              Submit
            </Button>
          </Group>
        </Flex>
      </Container>
    </Box>
  );
};

export default Username;

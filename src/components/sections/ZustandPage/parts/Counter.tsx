import {
  Box,
  Button,
  Container,
  Flex,
  Group,
  Text,
  Title,
} from '@mantine/core';
import * as React from 'react';
import { shallow } from 'zustand/shallow';

import useCounter from '@/utils/store/counter';

const Counter = () => {
  const [count, increase, decrease] = useCounter(
    (state) => [state.count, state.increase, state.decrease],
    shallow
  );

  React.useEffect(() => {
    useCounter.persist.rehydrate();
  }, []);

  return (
    <Box bg="blue" w="100%" px="md" className="innerYPaddings">
      <Container size="xl" bg="yellow" className="paddings">
        <Flex align="flex-start" justify="center" direction="column" gap="md">
          <Title order={1}>Counter</Title>
          <Text span>State {count}</Text>
          <Group>
            <Button variant="outline" onClick={increase}>
              Increment
            </Button>
            <Button variant="outline" onClick={decrease}>
              Decrement
            </Button>
          </Group>
        </Flex>
      </Container>
    </Box>
  );
};

export default Counter;

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

import useCounter from '@/utils/store/counter';
import useStore from '@/utils/store/useStore';

const Counter = () => {
  const store = useStore(useCounter, (state) => state);

  return (
    <Box bg="blue" w="100%" px="md" className="innerYPaddings">
      <Container size="xl" bg="yellow" className="paddings">
        <Flex align="flex-start" justify="center" direction="column" gap="md">
          <Title order={1}>Counter</Title>
          <Text span>State : {store?.count}</Text>
          <Group>
            <Button variant="outline" onClick={store?.increase}>
              Increment
            </Button>
            <Button variant="outline" onClick={store?.decrease}>
              Decrement
            </Button>
          </Group>
        </Flex>
      </Container>
    </Box>
  );
};

export default Counter;

import { Box, Container, Flex } from '@mantine/core';

const Hero = () => {
  return (
    <Box bg="blue" w="100%" px="md" className="innerYPaddings">
      <Container size="xl" bg="yellow" className="paddings">
        <Flex align="center">HERO</Flex>
      </Container>
    </Box>
  );
};

export default Hero;

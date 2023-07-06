import { Flex } from '@mantine/core';

import { MapContent } from './parts';

const MapPage = () => {
  return (
    <Flex
      direction="column"
      justify="center"
      align="flex-start"
      gap="xl"
      className="rootYPaddings"
    >
      <MapContent />
    </Flex>
  );
};

export default MapPage;

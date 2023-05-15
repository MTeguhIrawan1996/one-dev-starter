import { Box, Flex } from '@mantine/core';

import LandingPageLayout from '@/components/layouts/landingPage';

import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Box>
        <Flex h="150vh">Landing Page</Flex>
      </Box>
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};

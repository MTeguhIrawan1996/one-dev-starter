import LandingPageLayout from '@/components/layouts/landingPage';
import LandingPage from '@/components/sections/LandingPage';

import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <LandingPage />
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};

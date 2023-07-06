import LandingPageLayout from '@/components/layouts/landingPage';
import { ZustandPage } from '@/components/sections';

import { NextPageWithLayout } from '../_app';

const Zustand: NextPageWithLayout = () => {
  return (
    <>
      <ZustandPage />
    </>
  );
};

export default Zustand;

Zustand.getLayout = function getLayout(page: React.ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};

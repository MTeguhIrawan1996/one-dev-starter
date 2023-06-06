import LandingPageLayout from '@/components/layouts/landingPage';
import { MapPage } from '@/components/sections';

import { NextPageWithLayout } from '../_app';

const Map: NextPageWithLayout = () => {
  return (
    <>
      <MapPage />
    </>
  );
};

export default Map;

Map.getLayout = function getLayout(page: React.ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};

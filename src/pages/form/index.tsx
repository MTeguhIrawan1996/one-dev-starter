import LandingPageLayout from '@/components/layouts/landingPage';
import { FormExamplePage } from '@/components/sections';

import { NextPageWithLayout } from '../_app';

const FormExample: NextPageWithLayout = () => {
  return <FormExamplePage />;
};

export default FormExample;

FormExample.getLayout = function getLayout(page: React.ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};

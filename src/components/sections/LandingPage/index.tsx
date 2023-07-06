import * as React from 'react';

import { RootWrapper } from '@/components/elements';

import { Hero } from './parts';

const LandingPage = () => {
  return (
    <RootWrapper>
      <Hero />
      <Hero />
    </RootWrapper>
  );
};

export default LandingPage;

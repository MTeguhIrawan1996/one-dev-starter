import { AppShell } from '@mantine/core';

import layoutStyle from '@/styles/Layout';

import Footer from './Footer';
import Navbar from './Nav';

type LayoutProps = {
  children: React.ReactNode;
};

const LandingPageLayout = ({ children }: LayoutProps) => {
  const { classes } = layoutStyle();
  return (
    <AppShell
      header={<Navbar />}
      footer={<Footer />}
      className={classes.rootLayout}
    >
      {children}
    </AppShell>
  );
};

export default LandingPageLayout;

import { AppShell } from '@mantine/core';

import layoutStyle from '@/styles/Layout';

import Footer from './Footer';
import Navbar from './Nav';

type LayoutProps = {
  children: React.ReactNode;
  page?: 'map' | 'landing';
};

const LandingPageLayout = ({ children, page }: LayoutProps) => {
  const { classes } = layoutStyle();
  return (
    <AppShell
      header={<Navbar />}
      footer={page === 'map' ? undefined : <Footer />}
      padding={0}
      className={classes.rootLayout}
    >
      {children}
    </AppShell>
  );
};

export default LandingPageLayout;

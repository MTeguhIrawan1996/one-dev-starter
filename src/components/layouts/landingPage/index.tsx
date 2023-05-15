import { AppShell } from '@mantine/core';

// import { inter } from '@/styles/font';
import Navbar from './Nav';

type LayoutProps = {
  children: React.ReactNode;
};

const LandingPageLayout = ({ children }: LayoutProps) => {
  return (
    <AppShell header={<Navbar />} padding="md">
      {children}
    </AppShell>
  );
};

export default LandingPageLayout;

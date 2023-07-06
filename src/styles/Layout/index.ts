import { createStyles } from '@mantine/core';

const layoutStyle = createStyles(() => ({
  rootLayout: {
    position: 'relative',
    overflow: 'hidden',
    background: ' linear-gradient(180deg, #FFFFFF 0%, #F2F9FF 100%)',
  },
  navbar: {
    display: 'flex',
    alignItems: 'center',
  },
  innerNavbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '0px',
  },
  innerFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem',
  },
}));

export default layoutStyle;

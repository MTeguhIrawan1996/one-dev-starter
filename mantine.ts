import { MantineProviderProps } from '@mantine/core';

export const theme: MantineProviderProps['theme'] = {
  // fontFamily: 'Cooming soon, cursive',
  fontFamily: 'Inter, sans-serif',
  spacing: { xs: '12px', sm: '16px', md: '24px', lg: '32px', xl: '40px' },
  breakpoints: {
    xs: '36em',
    sm: '48em',
    md: '62em',
    lg: '75em',
    xl: '88em',
  },
  components: {
    Container: {
      defaultProps: {
        sizes: {
          xs: 540,
          sm: 720,
          md: 960,
          lg: 1140,
          xl: 1440,
        },
      },
    },
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
  },
  headings: {
    // properties for all headings\
    // fontFamily: 'Inter, sans-serif',
    fontWeight: 400,

    // properties for individual headings, all of them are optional
    sizes: {
      h1: { fontSize: '32px' },
      h2: { fontSize: '28px' },
      h3: { fontSize: '26px' },
      h4: { fontSize: '24px' },
      h5: { fontSize: '22px' },
      h6: { fontSize: '16px' },
    },
  },
  colors: {
    brand: [
      '#F3F0FF',
      '#E5DBFF',
      '#D0BFFF',
      '#B197FC',
      '#9775FA',
      '#845EF7',
      '#7950F2',
      '#7048E8',
      '#6741D9',
      '#5F3DC4',
    ],
  },
  primaryColor: 'brand',

  globalStyles: (theme) => ({
    '.rootYPaddings': {
      paddingBottom: '2rem',
      paddingTop: '2rem',
    },
    '.innerYPaddings': {
      paddingBottom: '0.5rem',
      paddingTop: '0.5rem',
    },
    '.paddings': {
      padding: theme.spacing.xs,
    },
  }),
};

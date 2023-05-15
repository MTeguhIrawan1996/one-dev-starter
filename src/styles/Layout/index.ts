import { createStyles, em, getBreakpointValue } from '@mantine/core';

const landingStyle = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors.blue,

    [`@media (min-width: ${em(getBreakpointValue(theme.breakpoints.md))})`]: {
      backgroundColor: theme.colors.red,
    },
  },
}));

export default landingStyle;

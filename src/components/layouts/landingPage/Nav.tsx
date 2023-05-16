import { Container, Header } from '@mantine/core';

import layoutStyle from '@/styles/Layout';

const Navbar = () => {
  const { classes } = layoutStyle();
  return (
    <Header height={60} bg="blue" px="md" className={classes.navbar}>
      <Container fluid w="100%" className={classes.innerNavbar}>
        <span>Navbar</span>
        <span>Navbar</span>
      </Container>
    </Header>
  );
};

export default Navbar;

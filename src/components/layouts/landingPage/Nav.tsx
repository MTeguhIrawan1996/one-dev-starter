import { Container, Flex, Header } from '@mantine/core';
import Link from 'next/link';

import Links from '@/constans/links';
import layoutStyle from '@/styles/Layout';

const Navbar = () => {
  const { classes } = layoutStyle();
  return (
    <Header height={60} px="md" className={classes.navbar}>
      <Container fluid w="100%" className={classes.innerNavbar}>
        <span>Navbar</span>
        <Flex justify="center" align="center" gap="xl">
          {Links.map((val, i) => (
            <Link href={val.link} key={i}>
              {val.title}
            </Link>
          ))}
        </Flex>
      </Container>
    </Header>
  );
};

export default Navbar;

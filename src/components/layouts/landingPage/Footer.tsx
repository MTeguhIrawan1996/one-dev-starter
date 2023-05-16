import { Container, Footer as FooterComponent } from '@mantine/core';

import layoutStyle from '@/styles/Layout';

const Footer = () => {
  const { classes } = layoutStyle();

  return (
    <FooterComponent height={60} bg="grape" px="md" className={classes.footer}>
      <Container fluid w="100%" className={classes.innerFooter}>
        <span>Footer</span>
        <span>Footer</span>
      </Container>
    </FooterComponent>
  );
};

export default Footer;

import { Header } from '@mantine/core';

interface INavbarProps {
  links?: string;
}

const Navbar: React.FC<INavbarProps> = () => {
  return (
    <Header height={60} mb={120} bg="blue">
      Navbar
    </Header>
  );
};

export default Navbar;

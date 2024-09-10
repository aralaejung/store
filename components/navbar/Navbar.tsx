import Container from '@/components/global/Container';
import Logo from '@/components/navbar/Logo';
import NavSearch from '@/components/navbar/NavSearch';
import CartButton from '@/components/navbar/CartButton';
import DarkMode from '@/components/navbar/DarkMode';
import LinksDropdown from '@/components/navbar/LinksDropdown';
import { Suspense } from 'react';

function Navbar() {
  return (
    <nav className="border-b">
      <Container className="flex flex-col sm:flex-row  sm:justify-between sm:items-center flex-wrap gap-4 py-8">
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className="flex gap-4 items-center">
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;

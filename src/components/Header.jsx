import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Header = () => {
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">Logo</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/">Anasayfa</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact">İletişim</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Header;

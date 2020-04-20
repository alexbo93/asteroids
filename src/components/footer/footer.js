import React from 'react';

import { FooterContainer, FooterNav, FooterNavItem } from './footer.styled';
import { NavLink } from '../nav-link';

const Footer = () => (
  <FooterContainer data-testid="footer-container">
    <FooterNav>
      <FooterNavItem>
        <NavLink to="/">Home</NavLink>
      </FooterNavItem>
      |
      <FooterNavItem>
        <NavLink to="/asteroids">Asteroids</NavLink>
      </FooterNavItem>
      |
      <FooterNavItem>
        <NavLink to="/pod">POD</NavLink>
      </FooterNavItem>
    </FooterNav>
  </FooterContainer>
);

export default Footer;

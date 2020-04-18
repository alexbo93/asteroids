import React from 'react';
import { Link } from 'react-router-dom';

import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderNav,
  HeaderNavItem,
  HeaderLink
} from "./header.styled"

const Header = () => (
  <HeaderContainer>
    <HeaderLogoContainer>
      <img src="./assets/asteroids_200x200.png" alt="Logo" height="40" width="40"></img>
      <span>Asteroids</span>
    </HeaderLogoContainer>
    <HeaderNav>
        <HeaderNavItem>
          <HeaderLink to="/">Home</HeaderLink>
        </HeaderNavItem>
        <HeaderNavItem>
          <HeaderLink to="/asteroids">List'Em</HeaderLink>
        </HeaderNavItem>
        <HeaderNavItem>
          <HeaderLink to="/pod">Picture</HeaderLink>
        </HeaderNavItem>
    </HeaderNav>
  </HeaderContainer>
);
export default Header;
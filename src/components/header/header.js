import React from 'react';
import { Link } from 'react-router-dom';

import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderNav,
  HeaderNavItem
} from "./header.styled"

const Header = () => (
  <HeaderContainer>
    <HeaderLogoContainer>
      <img src="./assets/asteroids_200x200.png" alt="Logo" height="40" width="40"></img>
      <span>Asteroids</span>
    </HeaderLogoContainer>
    <HeaderNav>
        <HeaderNavItem>
          <Link to="/">Home</Link>
        </HeaderNavItem>
        <HeaderNavItem>
          <Link to="/list">List'Em</Link>
        </HeaderNavItem>
        <HeaderNavItem>
          <Link to="/pod">Picture</Link>
        </HeaderNavItem>
    </HeaderNav>
  </HeaderContainer>
);
export default Header;
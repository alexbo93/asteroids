import React from 'react';

import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderNav,
  HeaderNavItem,
  HeaderLink,
  HeaderNavContainer,
} from './header.styled';

const Header = () => (
  <HeaderContainer>
    <HeaderLogoContainer>
      <img
        src="./assets/asteroids_200x200.png"
        alt="Logo"
        height="50"
        width="50"
      ></img>
      <span>ASTEROIDS</span>
    </HeaderLogoContainer>
    <HeaderNavContainer>
      <HeaderNav>
        <HeaderNavItem>
          <HeaderLink to="/">
            Home<i className="fas fa-home"></i>
          </HeaderLink>
        </HeaderNavItem>
        <HeaderNavItem>
          <HeaderLink to="/asteroids">
            List'Em<i className="fas fa-list-ul"></i>
          </HeaderLink>
        </HeaderNavItem>
        <HeaderNavItem>
          <HeaderLink to="/pod">
            Picture<i className="far fa-image"></i>
          </HeaderLink>
        </HeaderNavItem>
      </HeaderNav>
    </HeaderNavContainer>
  </HeaderContainer>
);
export default Header;

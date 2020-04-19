import React from 'react';

import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderNav,
  HeaderNavItem,
  HeaderNavContainer,
} from './header.styled';
import { NavLink } from '../nav-link';

const Header = () => (
  <HeaderContainer>
    <HeaderLogoContainer>
      <img
        src="assets/asteroids_200x200.png"
        alt="Logo"
        height="50"
        width="50"
      ></img>
    </HeaderLogoContainer>
    <HeaderNavContainer>
      <HeaderNav>
        <HeaderNavItem>
          <NavLink to="/">
            <span>Home</span>
            <i className="fas fa-home"></i>
          </NavLink>
        </HeaderNavItem>
        <HeaderNavItem>
          <NavLink to="/asteroids">
            <span>List'Em</span>
            <i className="fas fa-list-ul"></i>
          </NavLink>
        </HeaderNavItem>
        <HeaderNavItem>
          <NavLink to="/pod">
            <span>Picture</span>
            <i className="far fa-image"></i>
          </NavLink>
        </HeaderNavItem>
      </HeaderNav>
    </HeaderNavContainer>
  </HeaderContainer>
);
export default Header;

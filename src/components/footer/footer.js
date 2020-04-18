import React from "react";

import {
  FooterContainer,
  FooterNav,
  FooterNavItem,
  FooterLink
} from "./footer.styled";

const Footer = () => (
  <FooterContainer>
    <FooterNav>
      <FooterNavItem><FooterLink to="/">Home</FooterLink></FooterNavItem>
      <FooterNavItem><FooterLink to="/asteroids">Asteroids</FooterLink></FooterNavItem>
      <FooterNavItem><FooterLink to="/pod">POD</FooterLink></FooterNavItem>
    </FooterNav>
  </FooterContainer>
);

export default Footer;
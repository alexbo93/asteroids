import React from "react";
import { Link } from "react-router-dom";

// import {
//   FooterContainer,
//   FooterNav,
//   FooterNavItem,
//   FooterLink
// } from "./footer.styled";

const Footer = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/asteroids">Asteroids</Link></li>
      <li><Link to="/pod">POD</Link></li>
    </ul>
  </div>
);

export default Footer;
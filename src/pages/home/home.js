import React from 'react';

import { MainButtonLink } from "../../components/button"

const Home = () => (
  <React.Fragment>
    <img src="./assets/hero2.jpg" alt="hero" />
    <div>
      <MainButtonLink to="/asteroids">
        Go to the List
      </MainButtonLink>
    </div>
  </React.Fragment>
);

export default Home;
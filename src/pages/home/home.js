import React from 'react';

import { HomeContainer, HomeContent, HomeButtonLink } from './home.styled';

const Home = () => (
  <React.Fragment>
    <HomeContainer>
      <HomeContent>
        <h1>NEO Earth Close Approaches</h1>
        <p>
          As they orbit the Sun, NEOs can occasionally approach close to Earth.
          Note that a “close” passage astronomically can be very far away in
          human terms: millions or even tens of millions of kilometers.
          <br />
          <br />
          This app generates a list of all the NEOs grouped by days. The
          retrieved results match with all NEOs detected during last 7 days.
          <br />
          <br />
          You also have the chance to see the fabulous NASA's Picture of the
          day!
        </p>
        <HomeButtonLink to="/asteroids">Go to the List</HomeButtonLink>
        <HomeButtonLink to="/pod">Go to Picture</HomeButtonLink>
      </HomeContent>
    </HomeContainer>
  </React.Fragment>
);

export default Home;

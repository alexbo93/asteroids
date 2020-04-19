import React from 'react';

import { HomeContainer, HomeContent } from './home.styled';
import { MainButtonLink } from '../../components/button';

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
          This app generates a list of all the NEOs grouped by days. By default
          today's NEOs will be displayed, but results from yesterday and
          tomorrow can be retrieved.
        </p>
        <MainButtonLink to="/asteroids">Go to the List</MainButtonLink>
      </HomeContent>
    </HomeContainer>
  </React.Fragment>
);

export default Home;

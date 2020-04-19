import React from 'react';

import { MainContainer } from '../../components/container';

import { AsteroidsFilterContainer } from './asteroids.styled';
import AsteroidsList from './list';
import useAsteroids from './list/asteroids-hooks';
import Filters from './filters';

const Asteroids = () => {
  const { asteroids, onFilterChange, getFilteredAsteroids } = useAsteroids();

  return (
    <MainContainer>
      <h1>Asteroids</h1>
      <AsteroidsFilterContainer>
        <Filters onFilterChange={onFilterChange} />
      </AsteroidsFilterContainer>
      <AsteroidsList asteroids={getFilteredAsteroids(asteroids)} />
    </MainContainer>
  );
};

export default Asteroids;

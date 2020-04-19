import React from 'react';

import { MainContainer } from '../../components/container';

import { AsteroidsFilterContainer } from './asteroids.styled';
import AsteroidsList from './list';
import useAsteroids from './list/asteroids-hooks';
import Filters from './filters';

const Asteroids = () => {
  const {
    asteroids,
    onFilterChange,
    getAsteroidsWithFiltersAndOrder,
    onOrderSet,
  } = useAsteroids();

  return (
    <MainContainer>
      <h1>Asteroids</h1>
      <AsteroidsFilterContainer>
        <Filters onFilterChange={onFilterChange} />
      </AsteroidsFilterContainer>
      <AsteroidsList
        asteroids={getAsteroidsWithFiltersAndOrder(asteroids)}
        onLabelSelected={onOrderSet}
      />
      <p>* Click on each attribute name label to display ordered results</p>
    </MainContainer>
  );
};

export default Asteroids;

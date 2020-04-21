import React from 'react';

import AsteroidListItem from './list-item';
import AsteroidListLabels from './list-labels';
import { AsteroidsListContainer } from './asteroids-list.styled';

const AsteroidsList = ({ asteroids, onLabelSelected }) => {
  const getList = () =>
    asteroids &&
    asteroids.map((asteroid) => (
      <AsteroidListItem asteroid={asteroid} key={asteroid.id} />
    ));

  return (
    <AsteroidsListContainer data-testid="asteroids-list__list-container">
      <AsteroidListLabels onLabelSelected={onLabelSelected} />
      {asteroids && asteroids.length ? getList() : 'There are no asteroids'}
    </AsteroidsListContainer>
  );
};

export default AsteroidsList;

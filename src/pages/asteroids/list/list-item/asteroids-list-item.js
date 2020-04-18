import React from 'react';
import { Link } from 'react-router-dom';

import { getRounded } from '../../../../utils/number-utils';

import {
  AsteroidListItemContainer,
  AsteroidIconContainer,
  AsteroidDetailIconContainer,
  AsteroidVariableInfoContainer,
} from './asteroids-list-item.styled';

const AsteroidsListItem = ({ asteroid }) => (
  <AsteroidListItemContainer>
    <AsteroidIconContainer>
      <i className="fas fa-meteor fa-lg"></i>
      <span>{asteroid.name}</span>
    </AsteroidIconContainer>
    <AsteroidVariableInfoContainer>
      <span>{getRounded(asteroid.miss_distance)}</span>
    </AsteroidVariableInfoContainer>
    <AsteroidVariableInfoContainer>
      <span>{getRounded(asteroid.velocity)}</span>
    </AsteroidVariableInfoContainer>
    <AsteroidVariableInfoContainer>
      <span>{asteroid.is_hazardous}</span>
    </AsteroidVariableInfoContainer>
    <AsteroidDetailIconContainer>
      <Link to={`/asteroid/${asteroid.id}`}>
        <i className="fas fa-arrow-alt-circle-right"></i>
      </Link>
    </AsteroidDetailIconContainer>
  </AsteroidListItemContainer>
);

export default AsteroidsListItem;

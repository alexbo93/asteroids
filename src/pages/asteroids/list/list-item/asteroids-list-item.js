import React from 'react';
import { Link } from 'react-router-dom';

import { getRounded } from '../../../../utils/number-utils';

import {
  AsteroidListItemContainer,
  AsteroidIconContainer,
  AsteroidDetailIconContainer,
  AsteroidVariableInfoContainer,
} from './asteroids-list-item.styled';
import { AsteroidType } from '../../../../utils/proptypes';

const AsteroidsListItem = ({ asteroid }) => (
  <AsteroidListItemContainer data-testid="asteroid-list__item-container">
    <AsteroidIconContainer>
      <i className="fas fa-meteor fa-lg"></i>
      <span data-testid="asteroid-name">{asteroid.name}</span>
    </AsteroidIconContainer>
    <AsteroidVariableInfoContainer data-testid="asteroid-distance">
      <span>{getRounded(asteroid.miss_distance)}</span>
    </AsteroidVariableInfoContainer>
    <AsteroidVariableInfoContainer data-testid="asteroid-velocity">
      <span>{getRounded(asteroid.velocity)}</span>
    </AsteroidVariableInfoContainer>
    <AsteroidVariableInfoContainer>
      <span data-testid="asteroid-hazardous">
        {asteroid.is_hazardous ? (
          <i className="fas fa-exclamation-triangle"></i>
        ) : (
          '-'
        )}
      </span>
    </AsteroidVariableInfoContainer>
    <AsteroidDetailIconContainer>
      <Link data-testid="asteroid-link" to={`/asteroid/${asteroid.id}`}>
        <i className="fas fa-arrow-alt-circle-right"></i>
      </Link>
    </AsteroidDetailIconContainer>
  </AsteroidListItemContainer>
);

AsteroidsListItem.propTypes = {
  asteroid: AsteroidType.isRequired,
};

export default AsteroidsListItem;

import React from 'react';
import PropTypes from 'prop-types';

import AsteroidListItem from './list-item';
import AsteroidListLabels from './list-labels';
import { AsteroidsListContainer } from './asteroids-list.styled';
import { AsteroidType } from '../../../utils/proptypes';

const AsteroidsList = ({ asteroids, onLabelSelected }) => {
  const getList = () =>
    asteroids.map((asteroid) => (
      <AsteroidListItem asteroid={asteroid} key={asteroid.id} />
    ));

  return (
    <AsteroidsListContainer data-testid="asteroids-list__list-container">
      <AsteroidListLabels onLabelSelected={onLabelSelected} />
      {asteroids.length ? getList() : 'There are no asteroids'}
    </AsteroidsListContainer>
  );
};

AsteroidsList.propTypes = {
  asteroids: PropTypes.arrayOf(AsteroidType),
  onLabelSelected: PropTypes.func.isRequired,
};

AsteroidsList.defaultProps = {
  asteroids: [],
};

export default AsteroidsList;

import React from 'react';
import PropTypes from 'prop-types';

import {
  AsteroidsListLabelsContainer,
  AsteroidName,
  AsteroidVariableLabel,
} from './asteroids-list-labels.styled.js';

const AsteroidsListLabels = ({ onLabelSelected }) => (
  <AsteroidsListLabelsContainer data-testid="asteroids-list__labels-container">
    <AsteroidName
      data-testid="label-name"
      onClick={() => onLabelSelected('name')}
    >
      Name*
    </AsteroidName>
    <AsteroidVariableLabel
      data-testid="label-distance"
      onClick={() => onLabelSelected('miss_distance')}
    >
      Distance (km)*
    </AsteroidVariableLabel>
    <AsteroidVariableLabel
      data-testid="label-velocity"
      onClick={() => onLabelSelected('velocity')}
    >
      Velocity (km/s)*
    </AsteroidVariableLabel>
    <AsteroidVariableLabel>Hazardous?</AsteroidVariableLabel>
  </AsteroidsListLabelsContainer>
);

AsteroidsListLabels.propTypes = {
  onLabelSelected: PropTypes.func.isRequired,
};

export default AsteroidsListLabels;

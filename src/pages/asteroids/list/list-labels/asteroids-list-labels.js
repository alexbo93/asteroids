import React from 'react';

import {
  AsteroidsListLabelsContainer,
  AsteroidName,
  AsteroidVariableLabel,
} from './asteroids-list-labels.styled.js';

const AsteroidsListLabels = ({ onLabelSelected }) => (
  <AsteroidsListLabelsContainer>
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

export default AsteroidsListLabels;

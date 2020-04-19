import React from 'react';

import {
  AsteroidsListLabelsContainer,
  AsteroidName,
  AsteroidVariableLabel,
} from './asteroids-list-labels.styled.js';

const AsteroidsListLabels = ({ onLabelSelected }) => (
  <AsteroidsListLabelsContainer>
    <AsteroidName onClick={() => onLabelSelected('name')}>Name*</AsteroidName>
    <AsteroidVariableLabel onClick={() => onLabelSelected('miss_distance')}>
      Distance (km)*
    </AsteroidVariableLabel>
    <AsteroidVariableLabel onClick={() => onLabelSelected('velocity')}>
      Velocity (km/s)*
    </AsteroidVariableLabel>
    <AsteroidVariableLabel>Hazardous?</AsteroidVariableLabel>
  </AsteroidsListLabelsContainer>
);

export default AsteroidsListLabels;

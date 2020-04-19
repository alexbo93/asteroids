import React from 'react';

import {
  AsteroidsListLabelsContainer,
  AsteroidName,
  AsteroidVariableLabel,
} from './asteroids-list-labels.styled.js';

const AsteroidsListLabels = () => (
  <AsteroidsListLabelsContainer>
    <AsteroidName>Name</AsteroidName>
    <AsteroidVariableLabel>Distance (km)</AsteroidVariableLabel>
    <AsteroidVariableLabel>Velocity (km/s)</AsteroidVariableLabel>
    <AsteroidVariableLabel>Hazardous?</AsteroidVariableLabel>
  </AsteroidsListLabelsContainer>
);

export default AsteroidsListLabels;

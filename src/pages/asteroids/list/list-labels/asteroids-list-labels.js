import React from 'react';

import {
  AsteroidsListLabelsContainer,
  AsteroidName,
  AsteroidVariableLabel,
} from './asteroids-list-labels.styled.js';

const AsteroidsListLabels = () => (
  <AsteroidsListLabelsContainer>
    <AsteroidName>Name</AsteroidName>
    <AsteroidVariableLabel>Distance</AsteroidVariableLabel>
    <AsteroidVariableLabel>Velocity</AsteroidVariableLabel>
    <AsteroidVariableLabel>Hazardous?</AsteroidVariableLabel>
  </AsteroidsListLabelsContainer>
);

export default AsteroidsListLabels;

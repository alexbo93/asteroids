import React from 'react';
import { useSelector } from 'react-redux';

import { CustomHr, InfoContainer } from '../../components/container';
import { selectAsteroid } from '../../features/asteroids';
import {
  AsteroidDetailsContainer,
  AsteroidDetailImage,
  AsteroidInformationContainer,
  AsteroidInformationLine,
  AsteroidInformationLabel,
  AsteroidNotFound,
  BackLinkContainer,
} from './asteroid.styled.js';
import { getRounded } from '../../utils/number-utils';
import { MainButtonLink } from '../../components/button';

const Asteroid = ({ match }) => {
  const asteroid = useSelector((state) =>
    selectAsteroid(state, match.params.id)
  );

  const getAdditionalInformation = (asteroid) => (
    <InfoContainer data-testid="asteroid-additional">
      Want further information? Please visit
      <br />
      <a href={asteroid.additional_info}>{asteroid.additional_info}</a>
    </InfoContainer>
  );

  const getAsteroidData = (asteroid) => (
    <React.Fragment>
      <AsteroidInformationContainer>
        <h3>Asteroid: {asteroid && asteroid.name}</h3>
        <CustomHr />
      </AsteroidInformationContainer>
      <AsteroidInformationLine data-testid="asteroid-distance">
        <AsteroidInformationLabel>Distance to Earth</AsteroidInformationLabel>
        {asteroid && getRounded(asteroid.miss_distance)} Km
      </AsteroidInformationLine>
      <AsteroidInformationLine data-testid="asteroid-velocity">
        <AsteroidInformationLabel>Velocity</AsteroidInformationLabel>
        {asteroid && getRounded(asteroid.velocity)} Km/s
      </AsteroidInformationLine>
      <AsteroidInformationLine data-testid="asteroid-orbit">
        <AsteroidInformationLabel>Orbiting...</AsteroidInformationLabel>
        {asteroid && asteroid.orbiting_body}
      </AsteroidInformationLine>
      <AsteroidInformationLine data-testid="asteroid-date">
        <AsteroidInformationLabel>Closest Date & Time</AsteroidInformationLabel>
        {asteroid && asteroid.closer_on} GMT
      </AsteroidInformationLine>
      {asteroid &&
        asteroid.additional_info &&
        getAdditionalInformation(asteroid)}
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <BackLinkContainer>
        <MainButtonLink to="/asteroids">Go Back to List</MainButtonLink>
      </BackLinkContainer>
      <AsteroidDetailsContainer data-testid="asteroid-container">
        <AsteroidDetailImage>
          <i className="fas fa-meteor fa-10x"></i>
        </AsteroidDetailImage>
        {asteroid ? (
          getAsteroidData(asteroid)
        ) : (
          <AsteroidNotFound data-testid="asteroid-not-found">
            No Asteroid found with this id
          </AsteroidNotFound>
        )}
      </AsteroidDetailsContainer>
    </React.Fragment>
  );
};

export default Asteroid;

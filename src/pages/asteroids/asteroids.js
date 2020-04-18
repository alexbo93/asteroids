import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MainContainer } from '../../components/container';

import { AsteroidsFilterContainer } from './asteroids.styled';
import AsteroidsList from './list';
import Filters from './filters';
import { selectAsteroids, getAsteroids } from '../../features/asteroids';

const Asteroids = () => {
  const asteroids = useSelector(selectAsteroids);
  const dispatch = useDispatch();

  useEffect(() => {
    if (asteroids && asteroids.length === 0) {
      dispatch(getAsteroids());
    }
  }, [asteroids]);

  const [list, setList] = useState(asteroids);
  console.log('store filters in redux and filter in hooks!');

  return (
    <MainContainer>
      <h1>Asteroids</h1>
      <AsteroidsFilterContainer>
        <Filters />
      </AsteroidsFilterContainer>
      <AsteroidsList asteroids={asteroids} />
    </MainContainer>
  );
};

export default Asteroids;

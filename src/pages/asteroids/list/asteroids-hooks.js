import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectAsteroids } from '../../../features/asteroids';

const useAsteroids = () => {
  const asteroids = useSelector(selectAsteroids);
  const dispatch = useDispatch();
};

export default useAsteroids;

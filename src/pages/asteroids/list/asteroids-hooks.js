import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectAsteroids } from '../../../features/asteroids';
import { deepCopy } from '../../../utils/copy-utils';

const useAsteroids = () => {
  const asteroids = useSelector(selectAsteroids);
  const [filters, setFilters] = useState({
    velocity: '',
    miss_distance: '',
    is_hazardous: false,
  });

  const onFilterChange = (filter, value) => {
    const newFilters = { ...filters, [filter]: value };
    setFilters(newFilters);
  };

  const getFilteredAsteroids = (asteroids) => {
    let newList = deepCopy(asteroids);

    if (filters.velocity !== '') {
      newList = newList.filter(
        (asteroid) => parseFloat(asteroid.velocity) <= filters.velocity
      );
    }
    if (filters.miss_distance !== '') {
      newList = newList.filter(
        (asteroid) =>
          parseFloat(asteroid.miss_distance) <= filters.miss_distance
      );
    }
    newList = newList.filter(
      (asteroid) => asteroid.is_hazardous === filters.is_hazardous
    );
    return newList;
  };

  return {
    asteroids,
    onFilterChange,
    getFilteredAsteroids,
  };
};

export default useAsteroids;

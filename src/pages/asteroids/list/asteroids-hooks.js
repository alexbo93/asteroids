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

  const [order, setOrder] = useState({
    param: 'name',
    desc: true,
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

  const orderList = (list) => {
    let ordered = deepCopy(list);
    const descOrderFn = (a, b) =>
      parseFloat(a[order.param]) > parseFloat(b[order.param]) ? -1 : 1;
    const ascOrderFn = (a, b) =>
      parseFloat(a[order.param]) > parseFloat(b[order.param]) ? 1 : -1;

    const sortFn = order.desc ? descOrderFn : ascOrderFn;
    return ordered.sort(sortFn);
  };

  const getAsteroidsWithFiltersAndOrder = (asteroids) => {
    let list = getFilteredAsteroids(asteroids);
    list = orderList(list);

    return list;
  };

  const onOrderSet = (name) =>
    setOrder({
      param: name,
      desc: name === order.param ? !order.desc : true,
    });

  return {
    asteroids,
    onFilterChange,
    getAsteroidsWithFiltersAndOrder,
    onOrderSet,
  };
};

export default useAsteroids;

import React from 'react';

import {
  FiltersContainer,
  FiltersListContainer,
  FilterItemRight,
  FilterItemLeft,
} from './filter.styled';
import { LUNAR_DISTANCE } from '../../../constants';
import { CustomSelect } from '../../../components/input';

const Filters = ({ onFilterChange }) => {
  const onHandleChange = (event, name) => {
    const value =
      event.target.checked || event.target.checked === false
        ? event.target.checked
        : event.target.value;
    onFilterChange(name, value);
  };

  return (
    <FiltersContainer>
      <FiltersListContainer>
        <FilterItemLeft>
          <CustomSelect
            id="filter-distance"
            onChange={(event) => onHandleChange(event, 'miss_distance')}
          >
            <option value="">Filter by Distance</option>
            <option value={LUNAR_DISTANCE}>{'<= Lunar Distance'}</option>
            <option value={LUNAR_DISTANCE * 5}>{'<= 5 Lunar Distance'}</option>
            <option value={LUNAR_DISTANCE * 10}>
              {'<= 10 Lunar Distance'}
            </option>
            <option value={Number.MAX_VALUE}>{'> 10 Lunar distance'}</option>
          </CustomSelect>
        </FilterItemLeft>
        <FilterItemRight>
          <CustomSelect
            id="filter-velocity"
            onChange={(event) => onHandleChange(event, 'velocity')}
          >
            <option value="">Filter by Velocity</option>
            <option value={10}>{'<= 10 km/s'}</option>
            <option value={20}>{'<= 20 km/s'}</option>
            <option value={Number.MAX_VALUE}>{'> 20 km/s'}</option>
          </CustomSelect>
        </FilterItemRight>
        <div>
          <label htmlFor="filter-hazardous">Show Hazardous</label>
          <input
            type="checkbox"
            id="filter-hazardous"
            name="filter-hazardous"
            onChange={(event) => onHandleChange(event, 'is_hazardous')}
          />
        </div>
      </FiltersListContainer>
    </FiltersContainer>
  );
};

export default Filters;

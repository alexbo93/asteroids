import React from 'react';

import {
  FiltersContainer,
  FiltersListContainer,
  FilterItemRight,
  FilterItemLeft,
  HazardousInfoLabel,
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
            data-testid="filter-distance"
            onChange={(event) => onHandleChange(event, 'miss_distance')}
          >
            <option value="">Filter by Distance</option>
            <option value={LUNAR_DISTANCE}>{'<= Lunar Distance'}</option>
            <option value={LUNAR_DISTANCE * 5}>{'<= 5 Lunar Distance'}</option>
            <option value={LUNAR_DISTANCE * 10}>
              {'<= 10 Lunar Distance'}
            </option>
          </CustomSelect>
        </FilterItemLeft>
        <FilterItemRight>
          <CustomSelect
            id="filter-velocity"
            data-testid="filter-velocity"
            onChange={(event) => onHandleChange(event, 'velocity')}
          >
            <option value="">Filter by Velocity</option>
            <option value={5}>{'<= 5 km/s'}</option>
            <option value={10}>{'<= 10 km/s'}</option>
            <option value={20}>{'<= 20 km/s'}</option>
          </CustomSelect>
        </FilterItemRight>
        <div>
          <label htmlFor="filter-hazardous">Show Hazardous</label>
          <input
            data-testid="filter-hazardous"
            type="checkbox"
            id="filter-hazardous"
            name="filter-hazardous"
            onChange={(event) => onHandleChange(event, 'is_hazardous')}
          />
          <HazardousInfoLabel>
            By Default, non-hazardous NEOs will be shown
          </HazardousInfoLabel>
        </div>
      </FiltersListContainer>
    </FiltersContainer>
  );
};

export default Filters;

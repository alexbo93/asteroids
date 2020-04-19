import React from 'react';

import {
  FiltersContainer,
  FiltersListContainer,
  FilterItemRight,
  FilterItemLeft,
} from './filter.styled';
import { LUNAR_DISTANCE } from '../../../constants';
import { CustomSelect } from '../../../components/input';

const Filters = () => {
  return (
    <FiltersContainer>
      <FiltersListContainer>
        <FilterItemLeft>
          <CustomSelect id="filter-distance">
            <option value="">Filter by Distance</option>
            <option value={LUNAR_DISTANCE}>{'<= Lunar Distance'}</option>
            <option value={LUNAR_DISTANCE * 5}>{'<= 5 Lunar Distance'}</option>
            <option value={LUNAR_DISTANCE * 10}>
              {'<= 10 Lunar Distance'}
            </option>
          </CustomSelect>
        </FilterItemLeft>
        <FilterItemRight>
          <CustomSelect id="filter-velocity">
            <option value="">Filter by Velocity</option>
            <option value={10}>{'<= 10 km/s'}</option>
            <option value={20}>{'<= 20 km/s'}</option>
            <option value={Number.MAX_VALUE}>{'> 20 km/s'}</option>
          </CustomSelect>
        </FilterItemRight>
        <div>
          <label for="filter-hazardous">Show Hazardous</label>
          <input
            type="checkbox"
            id="filter-hazardous"
            name="filter-hazardous"
            value="Bike"
          />
        </div>
      </FiltersListContainer>
    </FiltersContainer>
  );
};

export default Filters;

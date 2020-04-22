import styled from 'styled-components';

export const FiltersContainer = styled.div`
  border: 1px solid #999;
  background-color: #ddd;
  padding: 30px;
  width: 100%;
  margin-bottom: 30px;
  border-radius: 5px;
  display: inline-block;

  @media (max-width: 600px) {
    padding: 15px;
  }
`;

export const FilterItem = styled.div`
  width: 50%;
  display: inline-block;
  margin-bottom: 10px;

  select {
    width: 80%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const FilterItemRight = styled(FilterItem)`
  select {
    float: right;
  }

  @media (max-width: 600px) {
    select {
      float: left;
    }
  }
`;

export const FilterItemLeft = styled(FilterItem)`
  select {
    float: left;
  }
`;

export const HazardousInfoLabel = styled.span`
  display: block;
  font-size: 14px;
  font-style: italic;
`;

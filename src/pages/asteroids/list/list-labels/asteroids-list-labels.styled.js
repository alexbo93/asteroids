import styled from 'styled-components';

export const AsteroidsListLabelsContainer = styled.div`
  display: inline-block;
  width: 100%;
  margin-bottom: 20px;
  padding: 0 20px;
  font-weight: bold;
`;

export const AsteroidName = styled.div`
  display: inline-block;
  width: 35%;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const AsteroidVariableLabel = styled.div`
  display: inline-block;
  width: 20%;

  @media (max-width: 600px) {
    display: none;
  }
`;

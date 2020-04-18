import styled from 'styled-components';

export const AsteroidListItemContainer = styled.div`
  height: 50px;
  width: 100%;
  padding: 0 20px;
  border: 1px solid #999;
  background-color: #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const AsteroidDetailIconContainer = styled.div`
  float: right;

  a {
    color: inherit;
  }

  i {
    vertical-align: middle;
    line-height: 50px;
    cursor: pointer;

    &:hover {
      font-size: 1.5rem;
    }
  }
`;

export const AsteroidIconContainer = styled.div`
  width: 35%;
  display: inline-block;

  i {
    margin-right: 10px;
  }

  i,
  span {
    vertical-align: middle;
    line-height: 50px;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const AsteroidVariableInfoContainer = styled.div`
  width: 20%;
  display: inline-block;

  @media (max-width: 600px) {
    display: none;
  }
`;

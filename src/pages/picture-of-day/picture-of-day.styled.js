import styled from 'styled-components';
import { MainContainer } from '../../components/container';

export const PodImage = styled.img`
  width: 100%;
  text-align: center;
`;

export const PodContainer = styled(MainContainer)`
  width: 60%;
  margin: 30px auto;
  padding: 30px;
  border: 1px solid #999;
  border-radius: 5px;
  background-color: #ddd;

  h1 {
    margin-top: 0;
  }
`;

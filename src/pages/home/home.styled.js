import styled from 'styled-components';

export const HomeContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('./assets/hero2.jpg');
  min-height: 95vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding: 70px 0px;
`;

export const HomeContent = styled.div`
  color: white;
  text-align: center;
  margin: 0 auto;
  width: 60%;

  a {
    margin-top: 20px;
  }

  @media (max-width: 600px) {
    a {
      margin-top: 0;
    }
  }
`;

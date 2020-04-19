import styled from 'styled-components';

export const AsteroidDetailsContainer = styled.div`
  width: 50%;
  margin: 30px auto 50px;
  border: 1px solid #999;
  border-radius: 5px;
  background-color: #ddd;
  padding: 30px;
  min-height: 500px;

  @media (max-width: 768px) and (min-width: 601px) {
    width: 80%;
    padding: 15px;
  }

  @media (max-width: 600px) {
    width: 95%;
    padding: 15px;
  }
`;

export const AsteroidDetailImage = styled.div`
  font-size: 24px;
  text-align: center;

  i {
    text-align: center;
  }
`;

export const AsteroidInformationContainer = styled.div`
  h3 {
    text-align: center;
  }
`;

export const AsteroidInformationLine = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

export const AsteroidInformationNameData = styled.span`
  color: red;
  font-weight: bold;
`;

export const AsteroidInformationLabel = styled.div`
  font-weight: bold;
  margin-right: 20px;
  width: 170px;
  display: inline-block;

  @media (max-width: 600px) {
    width: 130px;
  }
`;

export const AsteroidFurtherInformationContainer = styled.div`
  margin-top: 40px;
  background-color: #d6eaf8;
  border: 1px solid #85c1e9;
  border-radius: 5px;
  padding: 20px 10px;
  text-align: center;
`;

export const AsteroidNotFound = styled.div`
  text-align: center;
  font-weight: bold;
  margin-top: 70px;
`;

export const BackLinkContainer = styled.div`
  width: 50%;
  margin-bottom: 10px;
  margin: 0 auto;

  @media (max-width: 768px) and (min-width: 601px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    width: 95%;
  }
`;

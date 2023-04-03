import styled from 'styled-components';
import { GiSoccerField } from 'react-icons/gi';

export const ServicesContainer = styled.div`
  height: auto;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  padding-bottom: 40px;
`;

export const ServicesWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  /* padding: 0 50px; */

  /* @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  } */

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    /* padding: 40px; */
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 300px;
  width: 300px;
  padding: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    height: auto;
    /* width: 100%; */
  }
`;

export const ServicesIcon = styled.div`
  font-size: 0px;
  currentcolor: '#01426C';
  fill: '#01426C';
  stroke: '#01426C';
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  padding-left: 15px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const SportsIcon = styled(GiSoccerField)`
  color: '#01426C';
`;

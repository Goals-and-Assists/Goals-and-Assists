import styled from "styled-components";

export const DonateContainer = styled.div`
  background: #010606;
  height: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    height: auto;
  }
`;

export const DonateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
  /* align-items: center; */
  /* border: 3px solid red; */

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const DonateHeaderWrapper = styled.div`
  padding-bottom: 25px;
`;
export const DonateOptionWrapper = styled.div`
  border: 2px solid #fff;
  height: 280px;
  width: 450px;
  margin: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    height: 200px;
    width: 300px;
  }
`;

export const DonateH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  display: flex;
  justify-content: center;
  text-allign: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const DonateH2 = styled.h1`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 10px;
  padding-left: 15px;
  display: flex;
  justify-content: center;
  text-allign: center;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const DonateH3 = styled.h1`
  font-size: 1rem;
  color: #fff;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  text-allign: center;

  @media screen and (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const PayPalBtnWrap = styled.div``;

export const ContributionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Contribution = styled.p`
  color: #fff;
  /* display: flex; */
  align-items: center;
  justify-content: center;
`;

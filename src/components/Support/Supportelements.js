import styled from "styled-components";

export const SupportContainer = styled.div`
  color: #000;
  background: "#f9f9f9";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SupportWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
`;

export const TopLineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SupportH1 = styled.h1`
  font-size: 2.5rem;
  color: #01426c;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

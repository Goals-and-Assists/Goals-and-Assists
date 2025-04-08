import styled from 'styled-components';

export const SupportItemsContainer = styled.div`
  /* height: 800px; */
  color: #000;
  background: '#f9f9f9';
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
`;

export const SupportItemsWrapper = styled.div`
  width: 75%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const TextWrapper = styled.div``;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1.%;
  font-weight: 600;
  color: '#f7f8fa';

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const Subtitle = styled.p`
  margin-bottom: 24px;
  font-size: 18px;
  line-height: 1.2;
  color: '#fff';
  text-indent: 2%;

  @media screen and (max-width: 768px) {
    text-indent: 10%;
  }
`;

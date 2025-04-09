import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.4) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }

  @media screen and (max-width: 768px) {
    height: 600px;
    padding: 36px 0px;
  }

  @media screen and (max-width: 480px) {
    height: 500px;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImgBg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeroContent = styled.div`
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.7);
  z-index: 3;
  position: absolute;
  padding: 24px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90%;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding: 12px 16px;
  }
`;

export const HeroContentBg = styled.div`
  display: flex;
  justify-content: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 16px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  max-width: 500px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    margin-top: 12px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    margin-top: 8px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 16px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ImgLogo = styled.img`
  width: 250px;
  height: auto;
  margin-top: 20px;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 200px;
    padding-top: 20px;
  }

  @media screen and (max-width: 480px) {
    width: 160px;
    padding-top: 10px;
  }
`;

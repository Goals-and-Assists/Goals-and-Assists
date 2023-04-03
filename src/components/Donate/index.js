import React from 'react';
import {
  DonateContainer,
  DonateWrapper,
  DonateHeaderWrapper,
  DonateH1,
  DonateH2,
  DonateH3,
  DonateOptionWrapper,
  PayPalBtnWrap,
  ContributionWrapper,
  Contribution,
  DonateIcon,
} from './DonateElements';
import DonateButton from '../PayPal/DonateButton';
// import DonationForm from './ElavonForm';
import Zelle from '../Zelle/Zelle';
import { BiDonateHeart } from 'react-icons/bi';

const Donate = () => {
  return (
    <DonateContainer id='donate'>
      <DonateH1>Donate to Goals and Assists</DonateH1>
      <DonateHeaderWrapper>
        <DonateH2>
          Your donation allow us provide the financial stability needed to
          support these students and these programs.
        </DonateH2>
        <DonateH2>
          Contributions to Goals and Assists are tax-deductible.
        </DonateH2>
      </DonateHeaderWrapper>
      <DonateWrapper>
        <DonateOptionWrapper>
          <DonateIcon>
            <BiDonateHeart style={{ color: '#01426c', fontSize: '80px' }} />
          </DonateIcon>
          <DonateH2>Donate with PayPal</DonateH2>
          <DonateH3>Make a one time or monthly recurring donation</DonateH3>
          <PayPalBtnWrap>
            <DonateButton />
          </PayPalBtnWrap>
        </DonateOptionWrapper>
        {/* <DonateOptionWrapper>
          <DonateIcon>
            <BiDonateHeart style={{ color: '#01426c', fontSize: '80px' }} />
          </DonateIcon>
          <DonateH2>Donate with Elavon</DonateH2>
          <DonateH3>Make a one time donation</DonateH3>
          <DonationForm />
        </DonateOptionWrapper> */}
      </DonateWrapper>
      <DonateWrapper>
        <DonateOptionWrapper>
          <DonateIcon>
            <BiDonateHeart style={{ color: '#01426c', fontSize: '80px' }} />
          </DonateIcon>
          <DonateH2>Donate with Zelle</DonateH2>
          <DonateH3>Send your donation using Zelle with this QR code:</DonateH3>
          <Zelle />
        </DonateOptionWrapper>
        <DonateOptionWrapper>
          <DonateIcon>
            <BiDonateHeart style={{ color: '#01426c', fontSize: '80px' }} />
          </DonateIcon>
          <DonateH2>Send a Check to Goals and Assists</DonateH2>
          <DonateH3>
            Email us for information on where to send your check:
          </DonateH3>
          <DonateH3>goalsandassistsorg@gmail.com</DonateH3>
        </DonateOptionWrapper>
      </DonateWrapper>
      <ContributionWrapper>
        <Contribution>
          Goals and Assists is a non-profit public benefit 501(c)(3) corporation
          (EIN 87-3901111) and is operated exclusively for educational and
          charitable purposes within the meaning of Section 501 (c)(3) of the
          Internal Revenue code.
        </Contribution>
        <Contribution>
          Goals and Assists is not organized and shall not be operated for the
          private gain of any person.
        </Contribution>
      </ContributionWrapper>
    </DonateContainer>
  );
};

export default Donate;

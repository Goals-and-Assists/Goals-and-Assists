import React from "react";
import {
  DonateOptionContainer,
  DonateOptionWrapper,
  DonateH2,
  DonateH3,
  PayPalBtnWrap,
} from "./DonateOptionsElements";
import DonateButton from "../PayPal/DonateButton";

const DonateOptions = () => {
  return (
    <DonateOptionContainer>
      <DonateOptionWrapper>
        <DonateH2>Donate with PayPal</DonateH2>
        <DonateH3>Make a one time or monthly recurring donation</DonateH3>
        <PayPalBtnWrap>
          <DonateButton />
        </PayPalBtnWrap>
      </DonateOptionWrapper>
    </DonateOptionContainer>
  );
};

export default DonateOptions;

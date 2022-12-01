import React from 'react'
import {
    DonateContainer,
    DonateWrapper,
    DonateH1,
    DonateH2, 
    PayPalWrapper,
    PayPalBtnWrap
} from './DonateElements'
import PayPalCheckoutButton from '../PayPal/PayPalCheckoutButton'

const Donate = () => {
  const product = {
    description: "Donate to International students in the US",
    price: 25
  }
  return (
    <DonateContainer id='donate'>
        <DonateWrapper>
            <DonateH1>
                Donate to Goals and Assists
            </DonateH1>
            <PayPalWrapper>
              <DonateH2>Donate with PayPal</DonateH2>
              <PayPalBtnWrap>
                <PayPalCheckoutButton product={product} />
              </PayPalBtnWrap>
            </PayPalWrapper>
        </DonateWrapper>
    </DonateContainer>
  )
}

export default Donate
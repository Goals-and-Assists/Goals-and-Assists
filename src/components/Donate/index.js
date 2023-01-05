import React from 'react'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import {
    DonateContainer,
    DonateWrapper,
    DonateH1,
    DonateH2, 
    DonateH3,
    DonateOptionWrapper,
    PayPalBtnWrap
} from './DonateElements'
// import PayPalCheckoutButton from '../PayPal/PayPalCheckoutButton'
// import DonateForm from '../PayPal/DonateForm'
import DonateButton from '../PayPal/DonateButton'
import Zelle from '../Zelle/Zelle'
import AmazonSmile from '../AmazonSmile/AmazonSmile'
// import DonateOptions from '../DonateOptions/DonateOptions'

const Donate = () => {
  // const product = {
  //   description: "Donate to International students in the US",
  //   price: 25
  // }
  return (
    <PayPalScriptProvider
      options={{
        'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID,
        components: 'buttons',
        currency: 'USD',
      }}
    >
      <DonateContainer id='donate'>
              <DonateH1>
                  Donate to Goals and Assists
              </DonateH1>
              <DonateH2>
                Your donations allow us provide the financial stability needed to support these students and these programs.
              </DonateH2>
          <DonateWrapper>
              <DonateOptionWrapper>
                  <DonateH2>Donate with PayPal</DonateH2>
                  <DonateH3>Make a one time or monthly recurring donation</DonateH3>
                  <PayPalBtnWrap>
                    <DonateButton />
                  </PayPalBtnWrap>
                </DonateOptionWrapper>
                <DonateOptionWrapper>
                  <DonateH2>Donate with Amazon Smile</DonateH2>
                  <DonateH3>Make Goals and Assists your beneficiary on AmazonSmile and .05% of the profits will automatically be doanted to us!
                  </DonateH3>
                  <AmazonSmile />
                </DonateOptionWrapper>
                </DonateWrapper>
              <DonateWrapper>
                <DonateOptionWrapper>
                  <DonateH2>Donate with Zelle</DonateH2>
                  <DonateH3>Send your doantion to Goals and Assists using Zelle</DonateH3>
                  <Zelle />
                </DonateOptionWrapper>
                <DonateOptionWrapper>
                  <DonateH2>Send a Check to Goals and Assists</DonateH2>
                  <DonateH3>Email us for infomration on where to send your donation check:</DonateH3>
                  <DonateH3>goalsandassistsorg@gmail.com</DonateH3>
                </DonateOptionWrapper>
              </DonateWrapper>

      </DonateContainer>
    </PayPalScriptProvider>
  )
}

export default Donate
import React from 'react'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import {
    DonateContainer,
    DonateWrapper,
    DonateH1,
    DonateH2, 
    PayPalWrapper,
    PayPalBtnWrap
} from './DonateElements'
import PayPalCheckoutButton from '../PayPal/PayPalCheckoutButton'
// import DonateForm from '../PayPal/DonateForm'
import DonateButton from '../PayPal/DonateButton'

const Donate = () => {
  const product = {
    description: "Donate to International students in the US",
    price: 25
  }
  return (
    <PayPalScriptProvider
      options={{
        'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID,
        components: 'buttons',
        currency: 'USD',
      }}
    >
      <DonateContainer id='donate'>
          <DonateWrapper>
              <DonateH1>
                  Donate to Goals and Assists
              </DonateH1>
              <PayPalWrapper>
                <DonateH2>Donate with PayPal {'(Coming soon!)'}</DonateH2>
                <PayPalBtnWrap>
                  <PayPalCheckoutButton product={product} />
                  {/* <DonateForm /> */}
                  <DonateButton />
                </PayPalBtnWrap>
              </PayPalWrapper>
          </DonateWrapper>
      </DonateContainer>
    </PayPalScriptProvider>
  )
}

export default Donate
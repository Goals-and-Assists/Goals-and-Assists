import React from 'react'
import Home from './pages'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

const App = () => {
  return (
    <PayPalScriptProvider options={{'client-id': ''}}>
      <>
        <Home />
      </>
    </PayPalScriptProvider>
  )
}

export default App

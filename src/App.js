import React from "react";
import Home from "./pages";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const App = () => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
        "disable-funding": ["paylater", "card"],
      }}
    >
      <>
        <Home />
      </>
    </PayPalScriptProvider>
  );
};

export default App;

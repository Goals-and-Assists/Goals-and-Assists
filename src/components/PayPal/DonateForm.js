import React, { useState, useEffect, useRef } from "react";
import { DonateFormContainer } from "./DonateFormElements";
import { PayPalButtons } from "@paypal/react-paypal-js";

const DonateForm = () => {
  const [amount, setAmount] = useState("5.00");

  function AmountPicker({ onAmountChange }) {
    return (
      <fieldset onChange={onAmountChange}>
        <legend>Donation Amount</legend>
        <label>
          <input
            type="radio"
            value="5.00"
            defaultChecked="true"
            name="amount"
          />
          5.00
        </label>
        <label>
          <input type="radio" value="10.00" name="amount" id="radio-6" />
          10.00
        </label>
        <label>
          <input type="radio" value="15.00" name="amount" id="radio-9" />
          15.00
        </label>
      </fieldset>
    );
  }

  const DonateButton = ({ currency, amount }) => {
    const amountRef = useRef(amount);
    useEffect(() => {
      amountRef.current = amount;
    }, [amount]);

    return (
      <PayPalButtons
        style={{ color: "black", label: "donate" }}
        fundingSource="paypal"
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amountRef.current,
                  breakdown: {
                    item_total: {
                      currency_code: currency,
                      value: amountRef.current,
                    },
                  },
                },
                items: [
                  {
                    name: "Goals and Assists Fundraiser",
                    description:
                      "All proceeds directly support international student athletes.",
                    quantity: "1",
                    unit_amount: {
                      currency_code: currency,
                      value: amountRef.current,
                    },
                    category: "DONATION",
                  },
                ],
              },
            ],
          });
        }}
      />
    );
  };

  return (
    <DonateFormContainer>
      <AmountPicker
        onAmountChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <DonateButton currency="USD" amount={amount} />
    </DonateFormContainer>
  );
};

export default DonateForm;

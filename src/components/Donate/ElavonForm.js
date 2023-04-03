import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormLabel = styled.label`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #fff;
`;

const FormH2 = styled.div`
  font-size: 1.2rem;
  /* padding: 0.5rem; */
  margin-bottom: 1rem;
`;

const FormInput = styled.input`
  font-size: 1.2rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FormButton = styled.button`
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  background-color: #007aff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0058a3;
  }
`;

function DonationForm() {
  const [amount, setAmount] = useState('');

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your Elavon payment integration code goes here
    console.log(`Donation amount: ${amount}`);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormLabel>
        <FormH2>Donation Amount:</FormH2>
        <FormInput type='number' value={amount} onChange={handleAmountChange} />
      </FormLabel>
      <FormButton type='submit'>Donate</FormButton>
    </FormContainer>
  );
}

export default DonationForm;

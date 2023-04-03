import React, { useEffect, useRef } from 'react';
import { DonateFormContainer } from './DonateFormElements';
import styled from 'styled-components';

const StyledDonateButton = styled.div`
  & button {
    max-width: 100px; // set your desired width
    height: 50px; // set your desired height
  }
`;

const DonateButton = () => {
  const buttonRef = useRef(null);
  const buttonId = 'donate-button';
  useEffect(() => {
    const button = window.PayPal.Donation.Button({
      env: 'production',
      hosted_button_id: 'JPB9347CK6TZE',
      image: {
        src: 'https://pics.paypal.com/00/s/NDQ1NTRjMDktMGFmNC00NmFjLTg3NzMtOGI2YTBkM2QzMWY1/file.PNG',
        alt: 'Donate with PayPal button',
        title: 'PayPal - The safer, easier way to pay online!',
        style: {
          size: 'responsive', // or "small", "large", "responsive"
        },
      },
    });
    button.render(`#${buttonRef.current.id}`);
  }, []);
  return (
    <>
      <StyledDonateButton>
        <div ref={buttonRef} id={buttonId} />
      </StyledDonateButton>
    </>
  );
};

export default DonateButton;

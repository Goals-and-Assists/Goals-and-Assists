import React, { useEffect, useRef } from 'react';

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
      },
    });

    button.render(`#${buttonRef.current.id}`);
  }, []);
  return (
    <>
      <div ref={buttonRef} id={buttonId} />
    </>
  );
};

export default DonateButton;

import React, { useEffect, useMemo, useRef } from 'react';
// import { Helmet } from 'react-helmet'

// let counter = 0;

// const generateId = () => {
//     return `ID-${++counter}`; // if it is necessary, use some better unique id generator
// };

const DonateButton = () => {
    // const buttonRef = useRef(null);
    // const buttonId = 'Z9PE2RJPT8LG8';
    // useEffect(() => {
    //     const button = window.PayPal.Donation.Button({
    //         env:'sandbox',
    //         hosted_button_id:'Z9PE2RJPT8LG8',
    //         image: {
    //         src:'https://pics-v2.sandbox.paypal.com/00/s/NzZlZTI0MjUtNzg4ZC00N2VlLThlODktNTkzYjM5MTQ5YmNj/file.PNG',
    //         alt:'Donate with PayPal button',
    //         title:'PayPal - The safer, easier way to pay online!',
    //         }
    //     });
    //     button.render(`#${buttonId}`); // you can change the code and run it when DOM is ready
    // }, []);
    return (
        // <div ref={buttonRef} id={buttonId} />
        <>
            <form action="https://www.paypal.com/donate" method="post" target="_top">
            <input type="hidden" name="hosted_button_id" value="ZJNQ8XKDM8H86" />
            <input type="image" src="https://pics.paypal.com/00/s/NDQ1NTRjMDktMGFmNC00NmFjLTg3NzMtOGI2YTBkM2QzMWY1/file.PNG" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
        </>
    );
};

export default DonateButton;
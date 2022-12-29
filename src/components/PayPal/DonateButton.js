import React from 'react';
// import { Helmet } from 'react-helmet'
import {
    DonateFormContainer
} from './DonateFormElements'

// const paypal = window.PayPal.Donation.Button({
//     env:'production',
//     hosted_button_id:'JPB9347CK6TZE',
//     image: {
//     src:'https://pics.paypal.com/00/s/NDQ1NTRjMDktMGFmNC00NmFjLTg3NzMtOGI2YTBkM2QzMWY1/file.PNG',
//     alt:'Donate with PayPal button',
//     title:'PayPal - The safer, easier way to pay online!',
//     }
//     })

const DonateButton = () => {
    // const buttonId = 'donate-button'
    // useEffect(() => {
    //     const button = window.PayPal.Donation.Button({
    //         env:'production',
    //         hosted_button_id:'JPB9347CK6TZE',
    //         image: {
    //         src:'https://pics.paypal.com/00/s/NDQ1NTRjMDktMGFmNC00NmFjLTg3NzMtOGI2YTBkM2QzMWY1/file.PNG',
    //         alt:'Donate with PayPal button',
    //         title:'PayPal - The safer, easier way to pay online!',
    //         }
    //     });
    //     button.render(`#${buttonId}`); // you can change the code and run it when DOM is ready
    // }, [buttonId]);
    return (
        
        <>
        <DonateFormContainer>
        {/* <div id="paypal-donate-button-container"></div> */}
        {/* <div id={buttonId} /> */}
        {/* <div id={containerId}>
        <div id={buttonId}></div>
        {paypal.render(`#${buttonId}`)} */}
        
            <form action="https://www.paypal.com/donate" method="post" target="_top">
            <input type="hidden" name="hosted_button_id" value="ZJNQ8XKDM8H86" />
            <input type="image" src="https://pics.paypal.com/00/s/NDQ1NTRjMDktMGFmNC00NmFjLTg3NzMtOGI2YTBkM2QzMWY1/file.PNG" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
        </DonateFormContainer>
        </>
    );
};

export default DonateButton;
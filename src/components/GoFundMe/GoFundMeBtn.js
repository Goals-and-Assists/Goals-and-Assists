// GoFundMeButton.js
import React from 'react';
// import { GoFundMeButton } from './GoFundMeBtnElements';

function GoFundMeButton() {
  return (
    <a
      href='https://gofund.me/1d79e43c'
      target='_blank'
      rel='noopener noreferrer'
      style={buttonStyle}
    >
      Donate to Isaac's GoFundMe
    </a>
  );
}

const buttonStyle = {
  display: 'inline-block',
  padding: '10px 20px',
  textAlign: 'center',
  color: '',
  backgroundColor: '#fdb72f',
  borderRadius: '5px',
  textDecoration: 'none',
  fontWeight: 'bold',
  cursor: 'pointer',
};

export default GoFundMeButton;

import React from 'react';
import './SignInput.css';
import Email from '../../assets/sign/email.svg';

const SignInput: React.FC = () => {
  return (
    <div className='sign-input'>
      <img src={Email} alt='Email' />
      <div className='sign-input-text'>dandelion607@cotato.com</div>
    </div>
  );
};

export default SignInput;

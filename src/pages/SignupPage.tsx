import React from 'react';
import './SignupPage.css';
import LogoCloud from '../assets/sign/logoCloud.svg';
import SignForm from '../components/sign/SignForm';

const SignupPage: React.FC = () => {
  return (
    <div className='signup-page'>
      <img src={LogoCloud} alt='LogoCloud' />
      <SignForm buttonText='Sign Up' />
    </div>
  );
};

export default SignupPage;

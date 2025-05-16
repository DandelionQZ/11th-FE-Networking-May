import React from 'react';
import './LoginPage.css';
import LogoCloud from '../assets/sign/logoCloud.svg';
import SignForm from '../components/sign/SignForm';

const LoginPage: React.FC = () => {
  return (
    <div className='login-page'>
      <img src={LogoCloud} alt='LogoCloud' />
      <SignForm />
    </div>
  );
};

export default LoginPage;

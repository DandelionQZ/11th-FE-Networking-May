import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import LogoCloud from '../assets/sign/logoCloud.svg';
import SignForm from '../components/sign/SignForm';

const LoginPage: React.FC = () => {
  const navigator = useNavigate();
  return (
    <div className='login-page'>
      <img src={LogoCloud} alt='LogoCloud' />
      <SignForm buttonText='Login' />
      <button onClick={() => navigator('/signup')}>Switch to Signup</button>
    </div>
  );
};

export default LoginPage;

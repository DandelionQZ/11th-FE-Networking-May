import React from 'react';
import './SignupPage.css';
import LogoCloud from '../assets/sign/logoCloud.svg';
import SignForm from '../components/sign/SignForm';
import { useNavigate } from 'react-router-dom';

const SignupPage: React.FC = () => {
  const navigator = useNavigate();
  return (
    <div className='signup-page'>
      <img src={LogoCloud} alt='LogoCloud' />
      <SignForm buttonText='Sign Up' />
      <p onClick={() => navigator('/login')}>
        Switch to <span>Login</span>
      </p>
    </div>
  );
};

export default SignupPage;

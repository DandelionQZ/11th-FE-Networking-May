import React from 'react';
import './SignOut.css';
import { useNavigate } from 'react-router-dom';

const SignOut: React.FC = () => {
  const navigator = useNavigate();

  return (
    <div onClick={() => navigator('/login')} className='sign-out'>
      로그아웃
    </div>
  );
};

export default SignOut;

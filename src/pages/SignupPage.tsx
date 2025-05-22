import React from 'react';
import './SignupPage.css';
import LogoCloud from '../assets/sign/logoCloud.svg';
import SignForm from '../components/sign/SignForm';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/userStore';
import { useShallow } from 'zustand/shallow';
import { postSignup } from '../apis/user';

const SignupPage: React.FC = () => {
  const navigate = useNavigate();

  const { email, password, clear } = useUserStore(
    useShallow((state) => ({
      email: state.email,
      password: state.password,
      clear: state.clear,
    }))
  );

  const onHandleSubmit = async () => {
    if (password.length < 8) {
      alert('비밀번호는 8자리 이상이어야 합니다');
      return;
    }

    try {
      await postSignup(email, password);
      alert('회원가입 성공');
      clear();
      navigate('/login');
    } catch (err) {
      alert('회원가입 실패');
      console.log('회원가입 실패 err:', err);
    }
  };

  return (
    <div className='signup-page'>
      <img src={LogoCloud} alt='LogoCloud' />
      <SignForm buttonText='Sign Up' onSubmitFn={onHandleSubmit} />
      <p onClick={() => navigate('/login')}>
        Switch to <span>Login</span>
      </p>
    </div>
  );
};

export default SignupPage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import LogoCloud from '../assets/sign/logoCloud.svg';
import SignForm from '../components/sign/SignForm';
import { useShallow } from 'zustand/shallow';
import { useUserStore } from '../store/userStore';
import { postLogin } from '../apis/user';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const { email, password, clear, setUserId } = useUserStore(
    useShallow((state) => ({
      email: state.email,
      password: state.password,
      clear: state.clear,
      setUserId: state.setUserId,
    }))
  );

  const onHandleSubmit = async () => {
    try {
      await postLogin(email, password).then((res) => {
        setUserId(res.data.userId);
      });
      clear();
      navigate('/');
    } catch (err) {
      alert('로그인 실패');
      console.log('로그인 실패 err:', err);
    }
  };
  return (
    <div className='login-page'>
      <img src={LogoCloud} alt='LogoCloud' />
      <SignForm buttonText='Login' onSubmitFn={onHandleSubmit} />
      <p onClick={() => navigate('/signup')}>
        Switch to <span>Signup</span>
      </p>
    </div>
  );
};

export default LoginPage;

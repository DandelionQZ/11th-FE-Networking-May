import React from 'react';
import './SignForm.css';
import SignInput from './SignInput';
import { useUserStore } from '../../store/userStore';
import { useShallow } from 'zustand/shallow';
import { postSignup } from '../../apis/user';
import { useNavigate } from 'react-router-dom';

interface SignFormProps {
  buttonText: string;
}

const SignForm: React.FC<SignFormProps> = ({ buttonText }) => {
  const navigate = useNavigate();

  const { email, password, clear } = useUserStore(
    useShallow((state) => ({
      email: state.email,
      password: state.password,
      clear: state.clear,
    }))
  );

  const onHandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await postSignup(email, password)
      .then(() => {
        clear();
        navigate('/login');
      })
      .catch((err) => {
        alert('회원가입 실패');
        console.log('회원가입 실패 err:', err);
      });
  };

  return (
    <form className='sign-form' onSubmit={onHandleSubmit}>
      <div className='sign-input-set'>
        <SignInput name='email' placeholder='Enter your email' />
        <SignInput name='password' placeholder='Enter your password' />
      </div>
      <button className='sign-form-btn' type='submit'>
        {buttonText}
      </button>
    </form>
  );
};

export default SignForm;

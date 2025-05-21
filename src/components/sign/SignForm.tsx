import React from 'react';
import './SignForm.css';
import SignInput from './SignInput';
import { useUserStore } from '../../store/userStore';
import { useShallow } from 'zustand/shallow';
import { postSignup } from '../../apis/user';

interface SignFormProps {
  buttonText: string;
}

const SignForm: React.FC<SignFormProps> = ({ buttonText }) => {
  const { email, password } = useUserStore(
    useShallow((state) => ({
      email: state.email,
      password: state.password,
    }))
  );

  const onHandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    postSignup(email, password);
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

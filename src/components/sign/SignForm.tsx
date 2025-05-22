import React from 'react';
import './SignForm.css';
import SignInput from './SignInput';

interface SignFormProps {
  buttonText: string;
  onSubmitFn: () => void;
}

const SignForm: React.FC<SignFormProps> = ({ buttonText, onSubmitFn }) => {
  return (
    <form
      className='sign-form'
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitFn();
      }}>
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

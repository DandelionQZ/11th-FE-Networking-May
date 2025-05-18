import React from 'react';
import './SignForm.css';
import SignInput from './SignInput';

interface SignFormProps {
  buttonText: string;
}

const SignForm: React.FC<SignFormProps> = ({ buttonText }) => {
  return (
    <form className='sign-form' action='/'>
      <div className='sign-input-set'>
        <SignInput type='email' name='email' placeholder='Enter your email' />
        <SignInput
          type='password'
          name='password'
          placeholder='Enter your password'
        />
      </div>
      <button className='sign-form-btn' type='submit'>
        {buttonText}
      </button>
    </form>
  );
};

export default SignForm;

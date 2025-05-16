import React from 'react';
import './SignForm.css';
import SignInput from './SignInput';

const SignForm: React.FC = () => {
  return (
    <form className='sign-form' action=''>
      <div className='sign-input-set'>
        <SignInput />
        <SignInput />
      </div>
      <input className='sign-form-btn' type='button' value='Sign Up' />
    </form>
  );
};

export default SignForm;

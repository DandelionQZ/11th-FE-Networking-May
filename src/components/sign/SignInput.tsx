import React from 'react';
import './SignInput.css';
import Email from '../../assets/sign/email.svg';
import Password from '../../assets/sign/password.svg';

interface SignInputProps {
  name: string;
  placeholder: string;
}

const SignInput: React.FC<SignInputProps> = ({ name, placeholder }) => {
  const defaultIcon = (() => {
    if (name === 'password') return Password;
    return Email;
  })();

  return (
    <div className='sign-input'>
      <img className='sign-input-img' src={defaultIcon} alt={`${name} icon`} />
      <input
        className='sign-input-text'
        type={name}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SignInput;

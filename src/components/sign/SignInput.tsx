import React from 'react';
import './SignInput.css';
import Email from '../../assets/sign/email.svg';
import Password from '../../assets/sign/password.svg';

interface SignInputProps {
  type: string;
  name: string;
  placeholder: string;
  icon?: string;
}

const SignInput: React.FC<SignInputProps> = ({
  type,
  name,
  placeholder,
  icon,
}) => {
  const defaultIcon = (() => {
    if (icon) return icon;
    if (type === 'password') return Password;
    return Email;
  })();

  return (
    <div className='sign-input'>
      <img src={defaultIcon} alt={`${name} icon`} />
      <input
        className='sign-input-text'
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SignInput;

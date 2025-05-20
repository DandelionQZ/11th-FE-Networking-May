import React from 'react';
import './SignInput.css';
import Email from '../../assets/sign/email.svg';
import Password from '../../assets/sign/password.svg';
import { useUserStore } from '../../store/userStore';
import { useShallow } from 'zustand/shallow';

interface SignInputProps {
  name: string;
  placeholder: string;
}

const SignInput: React.FC<SignInputProps> = ({ name, placeholder }) => {
  const { setEmail, setPassword } = useUserStore(
    useShallow((state) => ({
      setEmail: state.setEmail,
      setPassword: state.setPassword,
    }))
  );

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (name === 'password') return setPassword(e.target.value);
    return setEmail(e.target.value);
  };

  const defaultIcon = (() => {
    if (name === 'password') return Password;
    return Email;
  })();

  return (
    <div className='sign-input'>
      <img className='sign-input-img' src={defaultIcon} alt={`${name} icon`} />
      <input
        className='sign-input-text'
        onChange={onHandleChange}
        type={name}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SignInput;

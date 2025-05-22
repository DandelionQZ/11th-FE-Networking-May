import React from 'react';
import './SignOut.css';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../store/userStore';
import { useShallow } from 'zustand/shallow';
import { postLogout } from '../../apis/user';

const SignOut: React.FC = () => {
  const navigate = useNavigate();

  const { setUserId } = useUserStore(
    useShallow((state) => ({
      setUserId: state.setUserId,
    }))
  );

  const onHandleSubmit = async () => {
    try {
      await postLogout().then((res) => {
        console.log('res:', res);
        setUserId('');
      });
      navigate('/login');
    } catch (err) {
      alert('로그아웃 실패');
      console.log('로그아웃 실패 err:', err);
    }
  };

  return (
    <div onClick={onHandleSubmit} className='sign-out'>
      로그아웃
    </div>
  );
};

export default SignOut;

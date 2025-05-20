import React from 'react';
import './HomePage.css';
import ContentPage from './ContentPage';
import Sidebar from '../components/sidebar/Sidebar';
import SignOut from '../components/sign/SignOut';

const HomePage: React.FC = () => {
  return (
    <>
      <SignOut />
      <Sidebar />
      <ContentPage />
    </>
  );
};

export default HomePage;

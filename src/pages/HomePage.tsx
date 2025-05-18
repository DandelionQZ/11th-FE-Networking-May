import React from 'react';
import './HomePage.css';
import ContentPage from './ContentPage';
import Sidebar from '../components/sidebar/Sidebar';

const HomePage: React.FC = () => {
  return (
    <>
      <Sidebar />
      <ContentPage />
    </>
  );
};

export default HomePage;

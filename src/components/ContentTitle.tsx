import React from 'react';
import './ContentTitle.css';

interface ContentTitleProps {
  text: string;
}

const ContentTitle: React.FC<ContentTitleProps> = ({ text }) => {
  return <div className='content-title'>{text}</div>;
};

export default ContentTitle;

import React, { useState } from 'react';
import plusIcon from '../../assets/plus-front-clay.png';
import AddLocationModal from '../addLocationModal/AddLocationModal';
import './AddButton.css';

function AddButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className='add-button-container'>
        <button
          className='add-icon-button'
          style={{ backgroundImage: `url(${plusIcon})` }}
          aria-label='Add'
          onClick={handleOpenModal}
        />
        <h3 className='add-button-text'>추가하기</h3>
      </div>
      {isModalOpen && <AddLocationModal onClose={handleCloseModal} />}
    </>
  );
}

export default AddButton;

import React, { useState } from 'react';
import plusIcon from '../../assets/plus-front-clay.png';
import AddLocationModal from '../addLocationModal/AddLocationModal';
import './AddButton.css';
import axios from 'axios';

interface AddButtonProps {
  onAddSuccess: () => void;
}

function AddButton({ onAddSuccess }: AddButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectPlace = (place: {
    id: string;
    place_name: string;
    x: string;
    y: string;
  }) => {
    onAddSuccess(); // AddLocationModal에서 POST 성공 후 호출됨
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

      {isModalOpen && (
        <AddLocationModal
          onClose={handleCloseModal}
          onSelectPlace={handleSelectPlace}
        />
      )}
    </>
  );
}

export default AddButton;

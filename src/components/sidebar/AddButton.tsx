import React, { useState } from 'react';
import plusIcon from '../../assets/plus-front-clay.png';
import AddLocationModal from '../addLocationModal/AddLocationModal';
import './AddButton.css';
import type { Location } from './LocationManager';

interface AddButtonProps {
  setLocations: React.Dispatch<React.SetStateAction<Location[]>>;
}

function AddButton({ setLocations }: AddButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectPlace = (place: { id: string; place_name: string }) => {
    setLocations((prev) => {
      if (prev.some((loc) => loc.id === place.id)) return prev;
      return [...prev, { id: place.id, name: place.place_name }];
    });
    handleCloseModal();
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

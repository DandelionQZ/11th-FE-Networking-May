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

  const handleSelectPlace = async (place: {
    id: string;
    place_name: string;
    x: string;
    y: string;
  }) => {
    try {
      await axios.post('http://15.164.233.124:8080/locations', {
        locationName: place.place_name,
        latitude: parseFloat(place.y),
        longitude: parseFloat(place.x),
      });

      onAddSuccess(); // 서버에서 목록 새로고침
      setIsModalOpen(false);
    } catch (error) {
      console.error('위치 추가 실패:', error);
      alert('위치 추가에 실패했습니다.');
    }
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

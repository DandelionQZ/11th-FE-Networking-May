import './AddLocationModal.css';
import exitIcon from '../../assets/multiply.svg';
import cloudsIcon from '../../assets/Clouds.svg';
import searchIcon from '../../assets/search-icon.svg';
import checkIcon from '../../assets/checkedicon.svg';
import axios from 'axios';
import { useState } from 'react';

interface Place {
  id: string;
  place_name: string;
  address_name: string;
  x: string; // 경도
  y: string; // 위도
}

function AddLocationModal() {
  const [keyword, setKeyword] = useState('');
  const [places, setPlaces] = useState<Place[]>([]);
  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);

  const KAKAO_API_KEY = 'a0725f82bdf6500af25bcfda34faa2d8';

  const handleSearch = async () => {
    try {
      const res = await axios.get(
        'https://dapi.kakao.com/v2/local/search/keyword.json',
        {
          params: { query: keyword },
          headers: { Authorization: `KakaoAK ${KAKAO_API_KEY}` },
        }
      );
      setPlaces(res.data.documents);
      setSelectedPlaceId(null);
    } catch (error) {
      console.error('검색 실패:', error);
    }
  };

  const handleConfirm = () => {
    const selected = places.find((place) => place.id === selectedPlaceId);
    if (selected) {
      console.log('선택된 장소:', selected);
      // 선택된 장소 받아오면 어떻게 할지 이제 구현.......
    } else {
      alert('장소를 선택해주세요!');
    }
  };

  return (
    <div className='addlo-overlay'>
      <div className='addlo-content'>
        <img src={exitIcon} className='addlo-exit-button' />
        <div className='addlo-header'>
          <img className='addlo-header-icon' src={cloudsIcon} />
          <p className='addlo-header-title'>날씨 위치 추가</p>
        </div>

        <div className='addlo-search-container'>
          <p className='addlo-search-title'>장소 이름</p>
          <div className='addlo-search-wrapper'>
            <input
              className='addlo-search-input'
              type='text'
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder='장소를 검색하세요'
            />
            <img
              src={searchIcon}
              className='addlo-search-button'
              onClick={handleSearch}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>

        <div className='addlo-list-container'>
          {places.map((place) => (
            <div
              key={place.id}
              className={`addlo-list-item ${
                selectedPlaceId === place.id ? 'selected' : ''
              }`}
              onClick={() => setSelectedPlaceId(place.id)}>
              <span className='addlo-list-item-name'>{place.place_name}</span>
              <span className='addlo-list-item-address'>
                {place.address_name}
              </span>
              {selectedPlaceId === place.id && (
                <img src={checkIcon} className='addlo-checkicon' />
              )}
            </div>
          ))}
        </div>

        <div className='addlo-footer'>
          <button className='addlo-confirm-button' onClick={handleConfirm}>
            <span className='addlo-confirm-button-text'>확인</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddLocationModal;

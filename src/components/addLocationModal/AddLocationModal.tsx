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
interface AddLocationModalProps {
  onClose: () => void;
  onSelectPlace: (place: {
    id: string;
    place_name: string;
    x: string;
    y: string;
  }) => void;
}

function AddLocationModal({ onClose, onSelectPlace }: AddLocationModalProps) {
  const [keyword, setKeyword] = useState('');
  const [places, setPlaces] = useState<Place[]>([]);
  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    try {
      const res = await axios.get(
        'https://dapi.kakao.com/v2/local/search/keyword.json',
        {
          params: { query: keyword },
          headers: {
            Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_API_KEY}`,
          },
        }
      );
      setPlaces(res.data.documents);
      setSelectedPlaceId(null);
    } catch (error) {
      console.error('검색 실패:', error);
    }
  };

  const handleConfirm = async () => {
    const selected = places.find((place) => place.id === selectedPlaceId);
    if (!selected) {
      alert('장소를 선택해주세요!');
      return;
    }
    if (selected.place_name.length < 2 || selected.place_name.length > 10) {
      alert('장소 이름은 2~10자여야 합니다.');
      return;
    }

    const lat = parseFloat(selected.y);
    const lng = parseFloat(selected.x);

    if (lat < -90 || lat > 90 || lng < -180 || lng > 180) {
      alert('위도 또는 경도 값이 유효하지 않습니다.');
      return;
    }

    const body = {
      locationName: selected.place_name,
      latitude: lat,
      longitude: lng,
    };

    setIsLoading(true);
    try {
      const response = await axios.post(
        'http://15.164.233.124:8080/locations',
        body
      );

      if (response.data.isSuccess) {
        alert('위치가 성공적으로 추가되었습니다!');
        onSelectPlace(selected);
        onClose();
      } else {
        alert('위치 추가에 실패했습니다.');
      }
    } catch (error: any) {
      if (
        error.response?.data?.message === 'LOCATION_NAME_DUPLICATED_EXCEPTION'
      ) {
        alert('이미 등록된 이름입니다.');
      } else {
        alert('위치 추가 중 오류가 발생했습니다.');
      }
      console.error('위치 추가 에러:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='addlo-overlay'>
      <div className='addlo-content'>
        <img
          src={exitIcon}
          className='addlo-exit-button'
          onClick={onClose}
          style={{ cursor: 'pointer' }}
        />
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
          <button
            className='addlo-confirm-button'
            onClick={handleConfirm}
            disabled={isLoading}>
            <span className='addlo-confirm-button-text'>
              {isLoading ? '등록 중...' : '확인'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddLocationModal;

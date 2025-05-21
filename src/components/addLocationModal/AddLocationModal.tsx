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
  onSelectPlace: (place: { id: string; place_name: string }) => void;
}
function AddLocationModal({ onClose, onSelectPlace }: AddLocationModalProps) {
  const [keyword, setKeyword] = useState('');
  const [places, setPlaces] = useState<Place[]>([]);
  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);

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

    const body = {
      locationName: selected.place_name,
      latitude: parseFloat(selected.y), // 위도
      longitude: parseFloat(selected.x), // 경도
    };

    try {
      const response = await axios.post(
        'http://15.164.233.124:8080/locations',
        body
      );

      if (response.data.isSuccess) {
        alert('위치가 성공적으로 추가되었습니다!');
        onSelectPlace(selected); // 상태 갱신
        onClose(); // 모달 닫기
      } else {
        alert('위치 추가에 실패했습니다.');
      }
    } catch (error: any) {
      if (error.response?.data?.message) {
        alert('에러: ' + error.response.data.message);
      } else {
        alert('위치 추가 중 오류가 발생했습니다.');
      }
      console.error('위치 추가 에러:', error);
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
            // todo : 밑의 장소이름과 주소 담는 div 태그를 컴포넌트화 하기
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

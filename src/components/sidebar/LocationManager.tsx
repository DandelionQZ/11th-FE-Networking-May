import { useState, useEffect } from 'react';
import axios from 'axios';
import AddButton from './AddButton';
import LocationList from './LocationList';
import './Sidebar.css';
import mapPin from '../../assets/map-pin-front-color.png';

export interface Location {
  locationId: number;
  locationName: string;
  latitude: number;
  longitude: number;
  pinned: boolean;
}

function LocationManager() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchLocations = async () => {
    try {
      setLoading(true);
      const res = await axios.get('http://15.164.233.124:8080/locations');
      setLocations(res.data);
    } catch (err) {
      console.error('위치 목록 불러오기 실패', err);
    } finally {
      setLoading(false);
    }
  };

  const deleteLocation = async (locationId: number) => {
    try {
      await axios.delete(`http://15.164.233.124:8080/locations/${locationId}`);
      await fetchLocations();
    } catch (error) {
      console.error('삭제 실패:', error);
      alert('위치 삭제 중 오류가 발생했습니다.');
    }
  };

  const togglePin = async (locationId: number, currentPinned: boolean) => {
    try {
      await axios.patch('http://15.164.233.124:8080/locations/pin', {
        locationId,
        isPinned: !currentPinned,
      });
      await fetchLocations();
    } catch (error) {
      console.error('핀 토글 실패:', error);
      alert('핀 상태 변경 중 오류가 발생했습니다.');
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  return (
    <div className='sidebar'>
      <div className='sidebar-home-container'>
        <button
          className='home-button'
          style={{ backgroundImage: `url(${mapPin})` }}
        />
        <h2 className='sidebar-title'>위치목록</h2>
      </div>

      <AddButton onAddSuccess={fetchLocations} />
      <LocationList
        locations={locations}
        onTogglePin={togglePin}
        onDelete={deleteLocation}
      />
    </div>
  );
}

export default LocationManager;

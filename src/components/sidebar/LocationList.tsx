import './LocationList.css';
import LocationPin from './LocationPin';
import DeleteLocationModal from '../deleteModal/DeleteLocationModal';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getLocations, putLocations } from '../../apis/location';
import type { locationType } from '../../types';
import { useLocationStore } from '../../store/locationStore';
import { useShallow } from 'zustand/shallow';

// interface LocationListProps {
//   locations: Location[];
//   onTogglePin: (locationId: number, currentPinned: boolean) => void;
//   onDelete: (locationId: number) => void;
// }

// const LocationList: React.FC<LocationListProps> = ({
//   locations,
//   onTogglePin,
//   onDelete,
// }) => {
const LocationList: React.FC = () => {
  const { data } = useQuery({
    queryKey: ['locations'],
    queryFn: async () => {
      const data = await getLocations();
      if (!data) throw new Error('No data received from getLocations API');
      return data;
    },
  });

  const { locations, setLocations } = useLocationStore(
    useShallow((state) => ({
      locations: state.locations,
      setLocations: state.setLocations,
    }))
  );

  if (data) {
    console.log('getLocations ::: ', data.content);
    setLocations(data.content);
  }

  const [pendingDeleteLocation, setPendingDeleteLocation] = useState<
    number | null
  >(null);

  // 위치 삭제
  const confirmDelete = () => {
    alert('기능 개발중 입니다..');
    // if (pendingDeleteLocation !== null) {
    //   onDelete(pendingDeleteLocation);
    //   setPendingDeleteLocation(null);
    // }
  };

  const togglePin = async (locationId: number, currentPinned: boolean) => {
    // useLocationStore.getState().setIsPinned(123, true);

    try {
      putLocations(locationId, !currentPinned);
    } catch (error) {
      console.error('putLocations 실패 error :', error);
      alert('핀 상태 변경 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className='location-list'>
      {locations.map((loc: locationType) => (
        <LocationPin
          key={loc.locationId}
          text={loc.locationName}
          isSelected={loc.isPinned}
          onImageClick={() => togglePin(loc.locationId, loc.isPinned)}
          onTrashClick={() => setPendingDeleteLocation(loc.locationId)}
          showBadge={loc.locationName === '강남역'}
        />
      ))}

      {pendingDeleteLocation !== null && (
        <DeleteLocationModal
          onCancel={() => setPendingDeleteLocation(null)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  );
};

export default LocationList;

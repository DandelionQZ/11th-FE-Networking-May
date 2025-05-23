import './LocationList.css';
import LocationPin from './LocationPin';
import type { Location } from './LocationManager';

interface LocationListProps {
  locations: Location[];
}

const LocationList: React.FC<LocationListProps> = ({ locations }) => {
  return (
    <div className='location-list'>
      {locations.map((loc) => (
        <LocationPin
          key={loc.locationId}
          text={loc.locationName}
          isSelected={loc.pinned}
          onImageClick={() => {}} // 핀 토글 구현할 때 연결
          onTrashClick={() => {}} // 삭제 기능 나구현 시 연결
          showBadge={loc.locationName === '강남역'}
        />
      ))}
    </div>
  );
};

export default LocationList;

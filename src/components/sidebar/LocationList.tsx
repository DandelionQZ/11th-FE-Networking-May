import './LocationList.css';
import LocationPin from './LocationPin';
import type { Location } from './LocationManager';

interface LocationListProps {
  locations: Location[];
  onTogglePin: (locationId: number, currentPinned: boolean) => void;
}

const LocationList: React.FC<LocationListProps> = ({
  locations,
  onTogglePin,
}) => {
  return (
    <div className='location-list'>
      {locations.map((loc) => (
        <LocationPin
          key={loc.locationId}
          text={loc.locationName}
          isSelected={loc.pinned}
          onImageClick={() => onTogglePin(loc.locationId, loc.pinned)}
          onTrashClick={() => {}}
          showBadge={loc.locationName === '강남역'}
        />
      ))}
    </div>
  );
};

export default LocationList;

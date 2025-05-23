import './LocationList.css';
import LocationPin from './LocationPin';
import DeleteLocationModal from '../deleteModal/DeleteLocationModal';
import { useState } from 'react';
import type { Location } from './LocationManager';

interface LocationListProps {
  locations: Location[];
  onTogglePin: (locationId: number, currentPinned: boolean) => void;
  onDelete: (locationId: number) => void;
}

const LocationList: React.FC<LocationListProps> = ({
  locations,
  onTogglePin,
  onDelete,
}) => {
  const [pendingDeleteLocation, setPendingDeleteLocation] = useState<
    number | null
  >(null);

  const confirmDelete = () => {
    if (pendingDeleteLocation !== null) {
      onDelete(pendingDeleteLocation);
      setPendingDeleteLocation(null);
    }
  };

  return (
    <div className='location-list'>
      {locations.map((loc) => (
        <LocationPin
          key={loc.locationId}
          text={loc.locationName}
          isSelected={loc.pinned}
          onImageClick={() => onTogglePin(loc.locationId, loc.pinned)}
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

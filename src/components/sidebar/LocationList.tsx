import './LocationList.css';
import LocationPin from './LocationPin';
import DeleteLocationModal from '../deleteModal/DeleteLocationModal';
import { useState } from 'react';
import type { Location } from './LocationManager';

interface LocationListProps {
  locations: Location[];
  setLocations: React.Dispatch<React.SetStateAction<Location[]>>;
}

const LocationList: React.FC<LocationListProps> = ({
  locations,
  setLocations,
}) => {
  const [pendingDeleteLocation, setPendingDeleteLocation] = useState<
    string | null
  >(null);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const confirmDelete = () => {
    if (!pendingDeleteLocation) return;
    setLocations((prev) =>
      prev.filter((loc) => loc.id !== pendingDeleteLocation)
    );
    setSelectedIds((prev) => prev.filter((id) => id !== pendingDeleteLocation));
    setPendingDeleteLocation(null);
  };

  const handleImageClick = (id: string) => {
    const isSelected = selectedIds.includes(id);
    let newSelectedIds: string[];

    if (isSelected) {
      newSelectedIds = selectedIds.filter((sid) => sid !== id);
    } else {
      newSelectedIds = [id, ...selectedIds];
    }

    setSelectedIds(newSelectedIds);

    setLocations((prev) => {
      const selected = newSelectedIds
        .map((selId) => prev.find((loc) => loc.id === selId))
        .filter(Boolean) as Location[];

      const unselected = prev.filter((loc) => !newSelectedIds.includes(loc.id));

      return [...selected, ...unselected];
    });
  };

  return (
    <div className='location-list'>
      {locations.map((loc) => (
        <LocationPin
          key={loc.id}
          text={loc.name}
          isSelected={selectedIds.includes(loc.id)}
          onImageClick={() => handleImageClick(loc.id)}
          onTrashClick={() => setPendingDeleteLocation(loc.id)}
          showBadge={loc.id === 'gangnam'}
        />
      ))}
      {pendingDeleteLocation && (
        <DeleteLocationModal
          onCancel={() => setPendingDeleteLocation(null)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  );
};

export default LocationList;

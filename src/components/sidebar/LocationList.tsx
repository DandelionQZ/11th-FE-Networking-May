import { useState } from 'react';
import './LocationList.css';
import LocationPin from './LocationPin';
import DeleteLocationModal from '../deleteModal/DeleteLocationModal';

interface Location {
  id: string;
  name: string;
}

function LocationList() {
  const [pendingDeleteLocation, setPendingDeleteLocation] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const confirmDelete = () => {
    if (!pendingDeleteLocation) return;
    setLocations((prev) => prev.filter(loc => loc.id !== pendingDeleteLocation));
    setSelectedIds((prev) => prev.filter(id => id !== pendingDeleteLocation));
    setPendingDeleteLocation(null);
  };

  const [locations, setLocations] = useState<Location[]>([
    { id: 'gangnam', name: '강남역 1번 출구' },
    { id: 'ratthat', name: 'RATTHAT' },
    { id: 'pi', name: '파이홀' },
    { id: 'cheong', name: '청수당공명' },
    { id: 'lotte', name: '롯데월드' },
    { id: 'gugan', name: '구관' },
    { id: 'osiu', name: 'Osiu' },
  ]);


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
        .map(selId => prev.find(loc => loc.id === selId))
        .filter(Boolean) as Location[];
  
      const unselected = prev.filter(loc => !newSelectedIds.includes(loc.id));
  
      return [...selected, ...unselected];
    });
  };
  

  return (
    <div className="location-list">
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
}

export default LocationList;

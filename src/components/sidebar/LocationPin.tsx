import { useShallow } from 'zustand/shallow';
import pinIcon from '../../assets/pin-front-clay.png';
import pinSelectedIcon from '../../assets/pin-front-color.png';
import trashIcon from '../../assets/trash-can-front-color.png';
import './LocationPin.css';
import { usePinSelecedStore } from '../../store/pinSelectedStore';
import type { locationType } from '../../types';

interface LocationPinProps {
  loc: locationType;
  onImageClick: () => void;
  onTrashClick: () => void;
  showBadge?: boolean;
}

function LocationPin({
  loc,
  onImageClick,
  onTrashClick,
  showBadge,
}: LocationPinProps) {
  const { setPinSelected } = usePinSelecedStore(
    useShallow((state) => ({
      setPinSelected: state.setPinSelected,
    }))
  );

  return (
    <div className={`location-pin-wrapper ${loc.isPinned ? 'selected' : ''}`}>
      <div
        className='pin-left'
        onClick={() => {
          setPinSelected(loc);
          console.log('setPinSelected에 넣은거 :::', loc);
        }}>
        <div
          className='pin-icon'
          style={{
            backgroundImage: `url(${loc.isPinned ? pinSelectedIcon : pinIcon})`,
          }}
          onClick={(e) => {
            e.stopPropagation();
            onImageClick();
          }}
        />

        <span className='pin-text'>{loc.locationName}</span>

        <img
          src={trashIcon}
          alt='delete'
          className='pin-trash'
          onClick={(e) => {
            e.stopPropagation();
            onTrashClick();
          }}
        />
      </div>

      {showBadge && <div className='pin-badge' />}
    </div>
  );
}

export default LocationPin;

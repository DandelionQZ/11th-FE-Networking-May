import pinIcon from '../../assets/pin-front-clay.png';
import pinSelectedIcon from '../../assets/pin-front-color.png';
import trashIcon from '../../assets/trash-can-front-color.png';
import './LocationPin.css';

interface LocationPinProps {
  text: string;
  isSelected: boolean;
  onImageClick: () => void;
  onTrashClick: () => void;
  showBadge?: boolean;
}

function LocationPin({
  text,
  isSelected,
  onImageClick,
  onTrashClick,
  showBadge,
}: LocationPinProps) {
  return (
    <div className={`location-pin-wrapper ${isSelected ? 'selected' : ''}`}>
      <div
        className='pin-left'
        onClick={(e) => {
          e.stopPropagation();
          onImageClick();
        }}>
        <div
          className='pin-icon'
          style={{
            backgroundImage: `url(${isSelected ? pinSelectedIcon : pinIcon})`,
          }}
        />

        <span className='pin-text'>{text}</span>

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

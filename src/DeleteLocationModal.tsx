import './DeleteLocationModal.css';
import nightStorm from './assets/Night Storm.png';


interface DeleteConfirmModalProps {
  onCancel: () => void;
  onConfirm: () => void;
}

function DeleteLocationModal({ onCancel, onConfirm }: DeleteConfirmModalProps) {
  return (
    <div className="delete-modal-overlay">
      <div className="delete-modal-content">
        <p className="delete-modal-text">정말로 삭제하시겠습니까?</p>
        <img className="night-storm" src={nightStorm} />
        <div className="delete-modal-buttons">
          <button className="delete-modal-cancel-button" onClick={onCancel}>
            <span className="delete-modal-cancel-text">취소</span>
          </button>
          <button className="delete-modal-confirm-button" onClick={onConfirm}>
            <span className="delete-modal-delete-text">삭제</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteLocationModal;

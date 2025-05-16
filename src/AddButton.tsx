import plusIcon from './assets/plus-front-clay.png';
import './AddButton.css';

function AddButton() {
  return (
    <div className="add-button-container">
      <button
        className="add-icon-button"
        style={{ backgroundImage: `url(${plusIcon})` }}
        aria-label="Add"
      />
      <h3 className="add-button-text">추가하기</h3>
    </div>
  );
}

export default AddButton;

import './Sidebar.css';
import AddButton from './AddButton'; 
import LocationList from './LocationList';
import mapPin from '../../assets/map-pin-front-color.png';

function Sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebar-home-container">
    <button
    className="home-button"
    style={{ backgroundImage: `url(${mapPin})` }}
    />
     <h2 className="sidebar-title">위치목록</h2>
    </div>
      <AddButton />
      <LocationList></LocationList>
    </div>
  );
}

export default Sidebar;

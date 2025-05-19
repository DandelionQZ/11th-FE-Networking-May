import './App.css';
import MainPage from './pages/MainPage';
// import Sidebar from '../src/components/sidebar/Sidebar';
import LocationManager from './components/sidebar/LocationManager';

function App() {
  return (
    <div>
      <MainPage />
      <LocationManager />
    </div>
  );
}

export default App;

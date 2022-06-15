import { Route, Routes } from 'react-router-dom';
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetups";
import MainNavigation from './components/layout/MainNavigation';

function App() {

  return (
    <div className="App">
      <MainNavigation/>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} exact/>
        <Route path="/new-meetup" element={<NewMeetupsPage />}/>   
        <Route path="/favorites" element={ <FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;

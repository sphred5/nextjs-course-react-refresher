import { Route, Routes } from 'react-router-dom';
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetups";
import Layout from './components/layout/Layout';

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} exact/>
        <Route path="/new-meetup" element={<NewMeetupsPage />}/>   
        <Route path="/favorites" element={ <FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

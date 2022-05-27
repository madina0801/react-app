import { Routes, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetup";
import FavouritesPage from "./pages/Favourites";
import MainNavigation from "./components/layout/MainNavigationComponent";
import Layout from "../components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupsPage />} />
        <Route path="/fav" element={<FavouritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

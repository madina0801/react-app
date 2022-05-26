import { Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetup";
import FavouritesPage from "./pages/Favourites";

function App() {
  return <div>
    <Route path='/' element={}></Route>
    <Route path='/new-meetup'>
      <NewMeetupsPage />
    </Route>
    <Route path="/favourites">
      <FavouritesPage/>
    </Route>
  </div>;
}

export default App;

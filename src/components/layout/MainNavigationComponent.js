import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <div>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All meetups</Link>
          </li>
          <li>
            <Link to="/new-meetups">New meetups</Link>
          </li>
          <li>
            <Link to="/fav">Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
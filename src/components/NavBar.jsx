import { Link } from "react-router-dom";
import logo from "../App/img/logo.svg";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <Link to="/home">
          <img src={logo} alt="" />
        </Link>
        <Link to="/areas">Areas</Link>
        <Link to="/reminders">Reminders</Link>
        <Link to="/profile">Profile</Link>
      </ul>
    </nav>
  );
};

export default NavBar;

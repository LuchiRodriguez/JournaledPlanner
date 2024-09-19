import { Link } from "react-router-dom";
import logo from "../App/img/logo.svg";
import { NavBarStyled } from "../App/Styles";

const NavBar = () => {
  return (
    <NavBarStyled>
      <ul>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div>
          <Link to="/areas">Areas</Link>
          <Link to="/reminders">Reminders</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </ul>
    </NavBarStyled>
  );
};

export default NavBar;

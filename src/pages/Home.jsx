import NavBar from "../components/NavBar";
import { StyledHome } from "../App/Styles";
import CalendarComponent from "../components/Calendar";

const Home = () => {
  return (
    <>
      <NavBar />
      <StyledHome>
        <CalendarComponent />
        <ul>
          <li>Calendar</li>
          <li>Journal</li>
        </ul>
      </StyledHome>
    </>
  );
};

export default Home;

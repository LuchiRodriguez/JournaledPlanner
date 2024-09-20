import NavBar from "../components/NavBar";
import { StyledHome } from "../App/Styles";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
// import { es as esLocale } from "date-fns/locale";
import { enUS as enLocale } from "date-fns/locale";

const Home = () => {
  const eventsList = [
    {
      start: new Date(2024, 8, 20),
      end: new Date(2024, 8, 21),
      title: "Event 1",
    },
  ];

  const getLocale = () => {
    const language = navigator.language;
    if (language.startsWith("enUS")) {
      return enLocale;
    } else {
      // return esLocale;
    }
  };

  const locale = getLocale();

  const localizer = dateFnsLocalizer({
    format: (date, formattingString) =>
      format(date, formattingString, { locale }),
    parse,
    startOfWeek,
    getDay,
    locales: { en: enLocale },
  });
  const capitalize = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };
  const formats = {
    dayHeaderFormat: (date) => {
      const formatString =
        locale === enLocale ? "EEEE, d 'de' MMMM" : "EEEE, MMMM d";
      return capitalize(format(date, formatString, { locale }));
    },
  };
  return (
    <>
      <NavBar />
      <StyledHome>
        <Calendar
          localizer={localizer}
          events={eventsList}
          startAccessor="start"
          endAccessor="end"
          views={["day", "week", "month"]}
          defaultView="day"
          formats={formats}
        />
        <ul>
          <li>Calendar</li>
          <li>Journal</li>
        </ul>
      </StyledHome>
    </>
  );
};

export default Home;

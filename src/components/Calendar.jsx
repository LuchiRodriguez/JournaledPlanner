import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import { es as esLocale } from "date-fns/locale";
import { enUS as enLocale } from "date-fns/locale";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import { useEffect, useState } from "react";
import { CalendarStyled, CreateEvent } from "../App/Styles";
import { createUser } from "../App/api/User";
import { createDay } from "../App/api/Day";

const CalendarComponent = () => {
  const DnDCalendar = withDragAndDrop(Calendar);
  const [eventsList, setEvents] = useState([]);
  const [showform, setShowform] = useState(false);
  const [title, setTitle] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();

  //Localizer

  const getLocale = () => {
    const language = navigator.language;
    if (language.startsWith("enUS")) {
      return enLocale;
    } else {
      return esLocale;
    }
  };

  const locale = getLocale();

  const localizer = dateFnsLocalizer({
    format: (date, formattingString) =>
      format(date, formattingString, { locale }),
    parse,
    startOfWeek,
    getDay,
    locales: { en: enLocale, es: esLocale },
  });

  const formats = {
    dayHeaderFormat: (date) => {
      const formatString =
        locale === esLocale ? "eeee, d 'de' MMMM" : "eeee MMMM d";
      return format(date, formatString, { locale });
    },
  };

  //Create an event

  const handleSelect = (data) => {
    setStart(data.start);
    setEnd(data.end);
    setShowform(true);
  };

  const handleCreate = async () => {
    try {
      await createDay({});
      localStorage.setItem("user", JSON.stringify({ email, password }));
      navigate("/");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  //Resize an event

  const handleEventResize = (data) => {
    const { start, end } = data;
    setEvents((eventsList) =>
      eventsList.map((event) =>
        event.title === data.event.title ? { ...event, start, end } : event
      )
    );
  };

  const handleEventDrop = (data) => {
    console.log(data);
  };

  useEffect(() => {
    console.log(localizer);
  }, []);

  return (
    <CalendarStyled>
      <DnDCalendar
        localizer={localizer}
        events={eventsList}
        startAccessor="start"
        endAccessor="end"
        views={["day", "week", "month"]}
        defaultView="day"
        formats={formats}
        onEventDrop={handleEventDrop}
        onEventResize={handleEventResize}
        resizable={true}
        selectable={true}
        onSelectSlot={handleSelect}
      />
      <CreateEvent $showform={showform}>
        <form action="">
          <button onClick={() => setShowform(false)}>X</button>
          <input
            type="text"
            placeholder="New event title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {/* <label htmlFor="start">Start</label>
          <input
            type="datetime-local"
            name="start"
            id="start"
            defaultValue={start}
            onChange={(e) => setStart(e.target.value)}
          />
          <label htmlFor="end">End</label>
          <input
            type="datetime-local"
            name="end"
            id="end"
            defaultValue={end}
            onChange={(e) => setEnd(e.target.value)}
          /> */}
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                setEvents((eventsList) => [
                  ...eventsList,
                  { title, start, end },
                ]);
                setTitle("");
                setShowform(false);
              }}
            >
              Save
            </button>
          </div>
        </form>
      </CreateEvent>
    </CalendarStyled>
  );
};

export default CalendarComponent;

import NavBar from "../components/NavBar";
import { StyledHome, Day } from "../App/Styles";
import { useState } from "react";
import DayHook from "../App/DayHook";

const Home = () => {
  const { today } = DayHook();
  const [view, setView] = useState("day");
  const [section, setSection] = useState("schedule");
  const handleView = (target) => {
    setView(target);
  };
  const handleSection = (target) => {
    setSection(target);
  };
  return (
    <>
      <NavBar />
      <StyledHome>
        <ul>
          <li onClick={() => handleView("day")}>DAY</li>
          <li onClick={() => handleView("week")}>WEEK</li>
          <li onClick={() => handleView("month")}>MONTH</li>
        </ul>

        <Day className={`view ${view === "day" ? "active" : ""}`}>
          <h1>{today}</h1>
          <section>
            <article>
              <div
                className={`section ${section === "schedule" ? "active" : ""}`}
              >
                <p>
                  00: <input type="text" name="" id="" />{" "}
                </p>
                <p>
                  01: <input type="text" name="" id="" />
                </p>
                <p>
                  02: <input type="text" name="" id="" />
                </p>
                <p>
                  03: <input type="text" name="" id="" />
                </p>
                <p>
                  04: <input type="text" name="" id="" />
                </p>
                <p>
                  05: <input type="text" name="" id="" />
                </p>
                <p>
                  06: <input type="text" name="" id="" />
                </p>
                <p>
                  07: <input type="text" name="" id="" />
                </p>
                <p>
                  08: <input type="text" name="" id="" />
                </p>
                <p>
                  09: <input type="text" name="" id="" />
                </p>
                <p>
                  10: <input type="text" name="" id="" />
                </p>
                <p>
                  11: <input type="text" name="" id="" />
                </p>
                <p>
                  12: <input type="text" name="" id="" />
                </p>
                <p>
                  13: <input type="text" name="" id="" />
                </p>
                <p>
                  14: <input type="text" name="" id="" />
                </p>
                <p>
                  15: <input type="text" name="" id="" />
                </p>
                <p>
                  16: <input type="text" name="" id="" />
                </p>
                <p>
                  17: <input type="text" name="" id="" />
                </p>
                <p>
                  18: <input type="text" name="" id="" />
                </p>
                <p>
                  19: <input type="text" name="" id="" />
                </p>
                <p>
                  20: <input type="text" name="" id="" />
                </p>
                <p>
                  21: <input type="text" name="" id="" />
                </p>
                <p>
                  22: <input type="text" name="" id="" />
                </p>
                <p>
                  23: <input type="text" name="" id="" />
                </p>
              </div>
              <div
                className={`section ${section === "journal" ? "active" : ""}`}
              >
                <textarea name="" id=""></textarea>
              </div>
            </article>
            <aside>
              <ul>
                <li onClick={() => handleSection("schedule")}>Schedule</li>
                <li onClick={() => handleSection("journal")}>Journal</li>
              </ul>
            </aside>
          </section>
        </Day>
        <div className={`view ${view === "week" ? "active" : ""}`}>
          <h1>WEEK</h1>
        </div>
        <div className={`view ${view === "month" ? "active" : ""}`}>
          <h1>MONTH</h1>
        </div>
      </StyledHome>
    </>
  );
};

export default Home;

import CalendarDays from "../logic/CalendarDays";
import CalendarHeader from "./CalendarHeader";

import "../../css/sections/MainMenu.css";

import { useState } from "react";

function MainMenu() {
  const today = new Date();

  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());

  return (
    <div className="mainmenu">
      <div className="container">
        <CalendarHeader
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          setSelectedMonth={setSelectedMonth}
          setSelectedYear={setSelectedYear}
        />
        <div className="calendar">
          <div className="split">
            <span>Monday</span>
            <span>Tuesday</span>
            <span>Wednesday</span>
            <span>Thursday</span>
            <span>Friday</span>
            <span>Saturday</span>
            <span>Sunday</span>
          </div>
          <CalendarDays
            selectedMonth={selectedMonth}
            selectedYear={selectedYear}
          />
        </div>
      </div>
    </div>
  );
}

export default MainMenu;

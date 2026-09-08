import CalendarDays from "../logic/CalendarDays";
import CalendarHeader from "./CalendarHeader";

import "../../css/sections/MainMenu.css";

import { useState } from "react";
import { useSession } from "../../context/SessionContext";

function MainMenu() {
  return (
    <div className="mainmenu">
      <div className="container">
        <CalendarHeader />
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
          <CalendarDays />
        </div>
      </div>
    </div>
  );
}

export default MainMenu;

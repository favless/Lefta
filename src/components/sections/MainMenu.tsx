import MonthArrow from "../buttons/MonthArrow";
import CalendarDays from "../logic/CalendarDays";

import { useState } from "react";

function MainMenu() {
  const today = new Date();

  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());

  const monthDisplay = new Date(selectedYear, selectedMonth).toLocaleString(
    "default",
    { month: "long", year: "numeric" },
  );

  function incrementMonth(increment: boolean) {
    const newDate = new Date(
      selectedYear,
      selectedMonth + (increment ? 1 : -1),
    );

    setSelectedMonth(newDate.getMonth());
    setSelectedYear(newDate.getFullYear());
  }

  return (
    <div className="mainmenu">
      <div className="container">
        <div className="calendar-header flex-2v">
          <div className="header-controls">
            <div className="month-selector">
              <MonthArrow increment={false} incrementMonth={incrementMonth} />
              <MonthArrow increment={true} incrementMonth={incrementMonth} />
              <span>{monthDisplay}</span>
            </div>
            <div className="buttons">
              <button className="add-expense">+ Expense</button>
            </div>
          </div>
          <div className="header-info">
            <div className="month-total">
              <span>$18.390</span>
              <p>Total expenses this month</p>
            </div>
            <div>placeholder</div>
          </div>
        </div>
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

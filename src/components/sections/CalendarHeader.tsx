import MonthArrow from "../buttons/MonthArrow";
import AddExpense from "../buttons/AddExpense";

import "../../css/sections/CalendarHeader.css";
import { useSession } from "../../context/SessionContext";

function CalendarHeader() {
  const { calendarDate, setCalendarDate } = useSession();

  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();

  const monthDisplay = calendarDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  function incrementMonth(increment: boolean) {
    const newDate = new Date(year, month + (increment ? 1 : -1));

    setCalendarDate(newDate);
  }

  return (
    <div className="calendar-header">
      <div className="header-controls">
        <div className="month-selector">
          <MonthArrow increment={false} incrementMonth={incrementMonth} />
          <MonthArrow increment={true} incrementMonth={incrementMonth} />
          <span>{monthDisplay}</span>
        </div>
        <div>
          <AddExpense text="+ Expense" for="" />
        </div>
      </div>
      <div className="header-info">
        <div className="month-total">
          <span>$18.390</span>
          <p>Total expenses this month</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default CalendarHeader;

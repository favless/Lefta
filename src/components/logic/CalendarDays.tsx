import { useSession } from "../../context/SessionContext";
import DayEntry from "./DayEntry";

function CalendarDays() {
  const { calendarDate } = useSession();
  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();

  // convert into Monday-based value instead of the default JS Sunday-based
  const firstDay = (new Date(year, month, 1).getDay() + 6) % 7;

  function formatDate(year: number, month: number, day: number) {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  }

  const days = [];
  const maxDays = 42;

  const startDate = new Date(year, month, 1 - firstDay);

  for (let i = 0; i < maxDays; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);

    const dateString = formatDate(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    );

    days.push(
      <DayEntry
        key={dateString}
        date={dateString}
        focused={date.getMonth() === month}
      />,
    );
  }

  return <div className="days">{days}</div>;
}

export default CalendarDays;

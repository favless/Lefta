import DayEntry from "./DayEntry";

type CalendarProps = {
  selectedMonth: number;
  selectedYear: number;
};

function CalendarDays(props: CalendarProps) {
  // convert into Monday-based value instead of the default JS Sunday-based
  const firstDay =
    (new Date(props.selectedYear, props.selectedMonth, 1).getDay() + 6) % 7;

  function formatDate(year: number, month: number, day: number) {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  }

  const days = [];
  const maxDays = 42;

  const startDate = new Date(
    props.selectedYear,
    props.selectedMonth,
    1 - firstDay,
  );

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
        focused={date.getMonth() === props.selectedMonth}
      />,
    );
  }

  return <div className="days">{days}</div>;
}

export default CalendarDays;

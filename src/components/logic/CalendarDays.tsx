import DayEntry from "./DayEntry";

type CalendarProps = {
  selectedMonth: number;
  selectedYear: number;
};

function CalendarDays(props: CalendarProps) {
  // convert into Monday-based value instead of the default JS Sunday-based
  const firstDay =
    (new Date(props.selectedYear, props.selectedMonth, 1).getDay() + 6) % 7;

  const daysInMonth = new Date(
    props.selectedYear,
    props.selectedMonth + 1,
    0,
  ).getDate();

  const days = [];
  const maxDays = 42;

  // fill in before month
  if (firstDay > 1) {
    const daysInPreviousMonth = new Date(
      props.selectedYear,
      props.selectedMonth,
      0,
    ).getDate();

    for (let i = 0; i < firstDay; i++) {
      const day = daysInPreviousMonth - firstDay + i + 1;
      days.push(<DayEntry key={`prev-${i}`} day={day} focused={false} />);
    }
  }

  // fill in month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(<DayEntry key={`current-${i}`} day={i} focused={true} />);
  }

  // fill in after month
  const remainingDays = 42 - (daysInMonth + firstDay);
  for (let i = 0; i < remainingDays; i++) {
    days.push(<DayEntry key={`after-${i}`} day={i + 1} focused={false} />);
  }

  return <div className="days">{days}</div>;
}

export default CalendarDays;

import MonthArrow from "../buttons/MonthArrow";
import AddExpense from "../buttons/AddExpense";

type headerProps = {
  selectedMonth: number;
  selectedYear: number;
  setSelectedMonth: React.Dispatch<React.SetStateAction<number>>;
  setSelectedYear: React.Dispatch<React.SetStateAction<number>>;
};

function CalendarHeader(props: headerProps) {
  const monthDisplay = new Date(
    props.selectedYear,
    props.selectedMonth,
  ).toLocaleString("default", { month: "long", year: "numeric" });

  function incrementMonth(increment: boolean) {
    const newDate = new Date(
      props.selectedYear,
      props.selectedMonth + (increment ? 1 : -1),
    );

    props.setSelectedMonth(newDate.getMonth());
    props.setSelectedYear(newDate.getFullYear());
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

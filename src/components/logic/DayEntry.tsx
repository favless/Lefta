import { useExpenses } from "../../context/ExpenseContext.tsx";
import { useSession } from "../../context/SessionContext.tsx";
import style from "../../css/logic/DayEntry.module.css";

type dayProps = {
  date: string;
  focused: boolean;
};

function DayEntry(props: dayProps) {
  const day = props.date.split("-")[2];
  const { selectedDate, setSelectedDate } = useSession();
  const selected = selectedDate === props.date;

  const { expenses } = useExpenses();
  const dayTotal = Number(
    expenses
      .filter((expense) => expense.date === props.date)
      .reduce((total, expense) => total + expense.amount, 0)
      .toFixed(2),
  );

  return (
    <div
      className={`${style.container} ${!props.focused ? style.unfocused : ""} ${selected ? style.selected : ""}`}
      onClick={() => setSelectedDate(props.date)}
    >
      <span className={style.day}>{day}</span>
      <span className={style.total}>{dayTotal <= 0 ? "" : `$${dayTotal}`}</span>
    </div>
  );
}

export default DayEntry;

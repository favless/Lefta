import IconBox from "../tools/IconBox";

import general from "../../css/infosection/General.module.css";
import style from "../../css/sections/Overview.module.css";
import { useSession } from "../../context/SessionContext";
import { useExpenses } from "../../context/ExpenseContext";

function Overview() {
  const { selectedDate } = useSession();
  const dateString = selectedDate.toISOString().slice(0, 10);
  const { expenses } = useExpenses();
  const dayWord = selectedDate.toLocaleString("default", {
    day: "numeric",
    weekday: "long",
  });

  const todaysExpenses = expenses.filter(
    (expense) => expense.date === dateString,
  );

  const total = todaysExpenses
    .reduce((total, expense) => total + expense.amount, 0)
    .toFixed(2);

  const highest = todaysExpenses.reduce(
    (max, expense) => (expense.amount > max ? expense.amount : max),
    0,
  );

  const lowest = todaysExpenses.reduce(
    (min, expense) => (expense.amount < min ? expense.amount : min),
    Infinity,
  );

  return (
    <div className={general.container}>
      <div className={general.header}>
        <span>{dayWord} Overview</span>
      </div>
      <div className={`${general.info} ${style.overview}`}>
        <IconBox
          icon="app/euro"
          toptext="Total Expenses"
          bottomtext={`$${total}`}
        />
        <IconBox
          icon="app/arrow-up"
          toptext="Highest Expense"
          bottomtext={`$${highest}`}
        />
        <IconBox
          icon="app/credit-card"
          toptext="Total Transactions"
          bottomtext={String(todaysExpenses.length)}
        />
        <IconBox
          icon="app/arrow-down"
          toptext="Lowest Expense"
          bottomtext={`$${lowest}`}
        />
      </div>
    </div>
  );
}

export default Overview;

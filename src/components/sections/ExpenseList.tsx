import ExpenseEntry from "../logic/ExpenseEntry";
import ExpenseEntryAdd from "../logic/ExpenseEntryAdd";

import general from "../../css/infosection/General.module.css";
import style from "../../css/sections/ExpenseList.module.css";
import { useSession } from "../../context/SessionContext";
import { useExpenses } from "../../context/ExpenseContext";

function ExpenseList() {
  const { selectedDate } = useSession();
  const { expenses } = useExpenses();

  const dayExpenses = expenses.filter(
    (expense) => expense.date === selectedDate,
  );

  return (
    <div className={general.container}>
      <div className={general.header}>
        <span>Expenses on {selectedDate}</span>
        <span>108.32$</span>
      </div>
      <div className={`${general.info} ${style.list}`}>
        {dayExpenses.map((expense) => (
          <ExpenseEntry
            key={expense.id}
            name={expense.name}
            category={expense.category}
            price={expense.amount}
          />
        ))}
        <ExpenseEntryAdd />
      </div>
    </div>
  );
}

export default ExpenseList;

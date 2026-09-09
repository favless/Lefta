import ExpenseEntry from "../logic/ExpenseEntry";
import ExpenseEntryAdd from "../logic/ExpenseEntryAdd";
import Icon from "../tools/Icon";

import general from "../../css/infosection/General.module.css";
import style from "../../css/sections/ExpenseList.module.css";
import { useSession } from "../../context/SessionContext";
import { useExpenses } from "../../context/ExpenseContext";

function ExpenseList() {
  const { selectedDate, setAddingExpense } = useSession();
  const dateString = selectedDate.toISOString().slice(0, 10);
  const { expenses } = useExpenses();

  const dayExpenses = expenses.filter((expense) => expense.date === dateString);

  return (
    <div className={general.container}>
      <div className={general.header}>
        <span>
          Expenses on{" "}
          {selectedDate.toLocaleDateString("default", { weekday: "long" })}
        </span>
        <button className={style.addBtn} onClick={() => setAddingExpense(true)}>
          <Icon type="app/plus" />
        </button>
      </div>
      <div className={`${general.info} ${style.list}`}>
        {dayExpenses.map((expense) => (
          <ExpenseEntry key={expense.id} expense={expense} />
        ))}
        <ExpenseEntryAdd />
      </div>
    </div>
  );
}

export default ExpenseList;

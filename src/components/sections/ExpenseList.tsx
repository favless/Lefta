import ExpenseEntry from "../logic/ExpenseEntry";
import ExpenseEntryPlus from "../logic/ExpenseEntryPlus";

import general from "../../css/infosection/General.module.css";
import style from "../../css/sections/ExpenseList.module.css";

function ExpenseList() {
  return (
    <div className={general.container}>
      <div className={general.header}>
        <span>Expenses on Day</span>
        <span>108.32$</span>
      </div>
      <div className={`${general.info} ${style.list}`}>
        <ExpenseEntry name="expensename" category="something" />
        <ExpenseEntryPlus day="" />
      </div>
    </div>
  );
}

export default ExpenseList;

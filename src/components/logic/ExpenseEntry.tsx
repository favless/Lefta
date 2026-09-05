import Icon from "../tools/Icon";
import ExpenseEntryForm from "./ExpenseEntryForm";

import style from "../../css/logic/ExpenseEntry.module.css";
import { useCategories } from "../../context/CategoryContext";
import type { Expense } from "../../types/Expense";
import { useState } from "react";

type entryProps = {
  expense: Expense;
};

function ExpenseEntry(props: entryProps) {
  const [editing, setEditing] = useState(false);

  const { categories } = useCategories();
  const category = categories.find(
    (category) => category.name === props.expense.category,
  );

  function Entry() {
    return (
      <div onClick={() => setEditing(true)} className={style.clickable}>
        <div className={style.left}>
          <div
            className={style["icon-container"]}
            style={{ backgroundColor: `rgba(${category?.color}, 0.2)` }}
          >
            <Icon type={category?.icon} />
          </div>
          <div
            className={`${style["icon-container"]} ${style.edit}`}
            style={{ backgroundColor: `rgba(${category?.color}, 0.2)` }}
          >
            <Icon type="app/edit" />
          </div>
          <div className={style["label-container"]}>
            <span>{props.expense.name}</span>
            <span>{props.expense.category}</span>
          </div>
        </div>
        <div className={style.right}>
          <span>${props.expense.amount}</span>
        </div>
      </div>
    );
  }

  function stopEditing() {
    setEditing(false);
  }

  return (
    <div className={style.container}>
      {editing ? (
        <ExpenseEntryForm expense={props.expense} stopEditing={stopEditing} />
      ) : (
        <Entry />
      )}
    </div>
  );
}

export default ExpenseEntry;

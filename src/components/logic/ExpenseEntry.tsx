import Icon from "../tools/Icon";

import style from "../../css/logic/ExpenseEntry.module.css";
import { useCategories } from "../../context/CategoryContext";
import type { Expense } from "../../types/Expense";

type entryProps = {
  expense: Expense;
};

function ExpenseEntry(props: entryProps) {
  const { categories } = useCategories();
  const category = categories.find(
    (category) => category.name === props.expense.category,
  );

  console.log(category);

  return (
    <div className={style.container}>
      <div className={style.left}>
        <div
          className={style["icon-container"]}
          style={{ backgroundColor: `rgba(${category?.color}, 0.2)` }}
        >
          <Icon type={category?.icon} />
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

export default ExpenseEntry;

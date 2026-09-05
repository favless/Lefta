import Icon from "../tools/Icon";

import style from "../../css/logic/ExpenseEntryForm.module.css";
import type { Expense } from "../../types/Expense";
import { useState } from "react";
import { useCategories } from "../../context/CategoryContext";
import { useExpenses } from "../../context/ExpenseContext";

type entryProps = {
  expense: Expense;
  stopEditing: () => void;
};

function ExpenseEntryForm(props: entryProps) {
  const { categories } = useCategories();

  const { updateExpense } = useExpenses();

  const [name, setName] = useState(props.expense.name);
  const [category, setCategory] = useState(props.expense.category);
  const [amount, setAmount] = useState(props.expense.amount);

  function submitEdit() {
    const newExpense: Expense = {
      id: props.expense.id,
      date: props.expense.date,
      amount: amount,
      name: name,
      category: category,
    };

    updateExpense(newExpense);
    props.stopEditing();
  }

  return (
    <div>
      <div className={style.left}>
        <div className={style["icon-container"]} onClick={() => submitEdit()}>
          <Icon type="app/circle-check" />
        </div>
        <div className={style["label-container"]}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              Select a category
            </option>

            {categories.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={style.right}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

export default ExpenseEntryForm;

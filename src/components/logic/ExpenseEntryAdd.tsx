import Icon from "../tools/Icon";

import type { Expense } from "../../types/Expense";

import style from "../../css/logic/ExpenseEntryAdd.module.css";
import { useSession } from "../../context/SessionContext";
import { useState } from "react";
import { useCategories } from "../../context/CategoryContext";
import { useExpenses } from "../../context/ExpenseContext";

function ExpenseEntryAdd() {
  const { categories } = useCategories();
  const { selectedDate, addingExpense, setAddingExpense } = useSession();
  const { expenses, setExpenses } = useExpenses();

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  function submitExpense() {
    const newExpense: Expense = {
      id: String(crypto.randomUUID()),
      date: selectedDate.toISOString().slice(0, 10),
      amount: Number(amount),
      name: name,
      category: category,
    };

    setExpenses([...expenses, newExpense]);

    setAmount("");
    setName("");
    setCategory("");
    setAddingExpense(false);
  }

  return (
    <div
      className={style.container}
      style={addingExpense ? { display: "flex" } : { display: "none" }}
    >
      <div className={style.form}>
        <input
          type="text"
          value={name}
          placeholder="Expense name..."
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="" disabled>
            Select a category
          </option>

          {categories.map((category) => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <div className={style.buttons}>
          <button onClick={() => submitExpense()}>Add Expense</button>
          <button onClick={() => setAddingExpense(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default ExpenseEntryAdd;

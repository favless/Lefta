import type { Expense } from "../types/Expense";
import { expenses } from "../data/expenses";

export function loadExpenses(): Expense[] {
  const saved = localStorage.getItem("expenses");

  if (!saved) {
    return [];
  }

  return JSON.parse(saved);
}

export function saveExpenses(expenses: Expense[]) {
    localStorage.setItem("expenses", JSON.stringify(expenses))
}
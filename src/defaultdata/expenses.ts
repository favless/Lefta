import type { Expense } from "../types/Expense";

export const defaultExpenses: Expense[] = [
  {
    id: "1",
    date: "2026-08-24",
    name: "Coffee Shop",
    amount: 4.75,
    category: "Food & Drinks",
  },
  {
    id: "2",
    date: "2026-08-24",
    name: "Grocery Store",
    amount: 45.23,
    category: "Groceries",
  },
  {
    id: "3",
    date: "2026-08-23",
    name: "Metro Transit",
    amount: 3.25,
    category: "Transportation",
  }
]
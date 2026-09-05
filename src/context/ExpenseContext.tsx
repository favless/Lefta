import { createContext, useContext, useEffect, useState } from "react";
import type { Expense } from "../types/Expense";
import { loadData, saveData } from "../utils/storage";
import { defaultExpenses } from "../defaultdata/expenses.ts";

type ExpenseContextType = {
  expenses: Expense[];
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
  updateExpense: (expense: Expense) => void;
};

const ExpenseContext = createContext<ExpenseContextType | null>(null);

export function ExpenseProvider({ children }: { children: React.ReactNode }) {
  const [expenses, setExpenses] = useState<Expense[]>(
    loadData<Expense>("expenses", defaultExpenses),
  );

  function updateExpense(updatedExpense: Expense) {
    setExpenses((prev) =>
      prev.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense,
      ),
    );
  }

  useEffect(() => {
    saveData("expenses", expenses);
  }, [expenses]);

  return (
    <ExpenseContext.Provider value={{ expenses, setExpenses, updateExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
}

export function useExpenses() {
  const context = useContext(ExpenseContext);

  if (!context) {
    throw new Error("useExpense must be used within ExpenseProvider");
  }

  return context;
}

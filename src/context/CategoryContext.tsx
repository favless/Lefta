import { createContext, useContext, useState } from "react";
import type { Category } from "../types/Category";
import { loadData } from "../utils/storage";

type ExpenseContextType = {
  expenses: Category[];
  setExpenses: React.Dispatch<React.SetStateAction<Category[]>>;
};

const ExpenseContext = createContext<ExpenseContextType | null>(null);

export function ExpenseProvider({ children }: { children: React.ReactNode }) {
  const [expenses, setExpenses] = useState<Category[]>(
    loadData<Category>("categories"),
  );

  return (
    <ExpenseContext.Provider value={{ expenses, setExpenses }}>
      {children}
    </ExpenseContext.Provider>
  );
}

import { createContext, useContext, useEffect, useState } from "react";
import type { Category } from "../types/Category";
import { loadData, saveData } from "../utils/storage";
import { defaultCategories } from "../defaultdata/categories.ts";

type CategoryContextType = {
  categories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
};

const CategoryContext = createContext<CategoryContextType | null>(null);

export function CategoryProvider({ children }: { children: React.ReactNode }) {
  const [categories, setCategories] = useState<Category[]>(
    loadData<Category>("categories", defaultCategories),
  );

  useEffect(() => {
    saveData("categories", categories);
  }, [categories]);

  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategories() {
  const context = useContext(CategoryContext);

  if (!context) {
    throw new Error("useSession must be used within CategoryProvider");
  }

  return context;
}

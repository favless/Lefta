import { createContext, useContext, useState } from "react";
import type { Category } from "../types/Category";
import { loadData } from "../utils/storage";
import { defaultCategories } from "../defaultdata/categories";

type CategoryContextType = {
  categories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
};

const CategoryContext = createContext<CategoryContextType | null>(null);

export function CategoryProvider({ children }: { children: React.ReactNode }) {
  const [categories, setCategories] = useState<Category[]>(
    loadData<Category>("categories", defaultCategories),
  );

  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategory() {
  const context = useContext(CategoryContext);

  if (!context) {
    throw new Error("useSession must be used within CategoryProvider");
  }

  return context;
}

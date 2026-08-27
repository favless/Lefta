import Header from "./components/sections/Header";
import SideMenu from "./components/sections/SideMenu";
import InfoMenu from "./components/sections/InfoMenu";

import "./App.css";
import "./css/general/Layout.css";
import MainMenu from "./components/sections/MainMenu";
import { useEffect, useState } from "react";

import type { Expense } from "./types/Expense";
import { loadExpenses, saveExpenses } from "./utils/storage";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>(loadExpenses);

  useEffect(() => {
    saveExpenses(expenses);
  }, [expenses]);

  return (
    <>
      <Header />

      <main>
        <SideMenu />
        <MainMenu />
        <InfoMenu />
      </main>
    </>
  );
}

export default App;

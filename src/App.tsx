import { use, useState } from "react";

import Header from "./components/sections/Header";
import SideMenu from "./components/sections/SideMenu";
import InfoMenu from "./components/sections/InfoMenu";

import Icon from "./components/tools/Icon";
import TabButton from "./components/buttons/TabButton";
import MonthArrow from "./components/buttons/MonthArrow";
import CalendarDay from "./components/logic/DayEntry";

import "./App.css";
import "./css/general/Layout.css";
import MainMenu from "./components/sections/MainMenu";

function App() {
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

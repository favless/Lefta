import { use, useState } from "react";

import Header from "./components/sections/Header";
import SideMenu from "./components/sections/SideMenu";
import InfoMenu from "./components/sections/InfoMenu";

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

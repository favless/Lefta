import "../../css/sections/InfoMenu.css";

import Overview from "./Overview";
import ExpenseList from "./ExpenseList";

function InfoMenu() {
  return (
    <div className="infomenu">
      <Overview />
      <ExpenseList />
    </div>
  );
}

export default InfoMenu;

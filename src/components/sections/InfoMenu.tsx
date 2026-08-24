import "../../css/sections/InfoMenu.css";

import Overview from "../infosection/Overview";
import ExpenseList from "../infosection/ExpenseList";

function InfoMenu() {
  return (
    <div className="infomenu">
      <Overview />
      <ExpenseList />
    </div>
  );
}

export default InfoMenu;

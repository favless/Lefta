import "../../css/sections/InfoMenu.css";

import Overview from "./Overview";
import ExpenseList from "./ExpenseList";

type infoProps = {
  day: string;
};

function InfoMenu(props: infoProps) {
  return (
    <div className="infomenu">
      <Overview />
      <ExpenseList />
    </div>
  );
}

export default InfoMenu;

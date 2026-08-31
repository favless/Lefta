import IconBox from "../tools/IconBox";

import general from "../../css/infosection/General.module.css";
import style from "../../css/sections/Overview.module.css";

function Overview() {
  return (
    <div className={general.container}>
      <div className={general.header}>
        <span>Month Overview</span>
      </div>
      <div className={`${general.info} ${style.overview}`}>
        <IconBox
          icon="app/euro"
          toptext="Total Expenses"
          bottomtext="$1,583.32"
        />
        <IconBox
          icon="app/chart-line"
          toptext="Daily Average"
          bottomtext="$43.33"
        />
        <IconBox
          icon="app/credit-card"
          toptext="Total Transactions"
          bottomtext="73"
        />
        <IconBox
          icon="app/arrow-up"
          toptext="Highest Expense"
          bottomtext="$132"
        />
      </div>
    </div>
  );
}

export default Overview;

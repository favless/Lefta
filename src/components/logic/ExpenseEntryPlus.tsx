import Icon from "../tools/Icon";

import style from "../../css/logic/ExpenseEntryPlus.module.css";

type entryProps = {
  day: string;
};

function ExpenseEntryPlus(props: entryProps) {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <div className={style["icon-container"]}>
          <Icon type="app/plus" />
        </div>
        <span className={style.label}>Add Expense</span>
      </div>
    </div>
  );
}

export default ExpenseEntryPlus;

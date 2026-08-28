import Icon from "../tools/Icon";

import style from "../../css/logic/ExpenseEntryAdd.module.css";

type entryProps = {
  name: string;
  category: string;
};

function ExpenseEntry(props: entryProps) {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <div className={style["icon-container"]}>
          <Icon type="app/plus" />
        </div>
        <span className={style.label}></span>
      </div>
    </div>
  );
}

export default ExpenseEntry;

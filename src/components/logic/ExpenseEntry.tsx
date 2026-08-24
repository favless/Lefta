import Icon from "../tools/Icon";

import style from "../../css/logic/ExpenseEntry.module.css";

type entryProps = {
  name: string;
  category: string;
};

function ExpenseEntry(props: entryProps) {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <div className={style["icon-container"]}>
          <Icon type="money" />
        </div>
        <div className={style["label-container"]}>
          <span>{props.name}</span>
          <span>{props.category}</span>
        </div>
      </div>
      <div className={style.right}>
        <span>$103.33</span>
        <span>9:43 PM</span>
      </div>
    </div>
  );
}

export default ExpenseEntry;

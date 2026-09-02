import Icon from "../tools/Icon";

import style from "../../css/logic/ExpenseEntry.module.css";
import { useCategories } from "../../context/CategoryContext";

type entryProps = {
  name: string;
  category: string;
  price: number;
};

function ExpenseEntry(props: entryProps) {
  const { categories } = useCategories();
  const category = categories.find(
    (category) => category.name === props.category,
  );

  console.log(category);

  return (
    <div className={style.container}>
      <div className={style.left}>
        <div
          className={style["icon-container"]}
          style={{ backgroundColor: `rgba(${category?.color}, 0.2)` }}
        >
          <Icon type={category?.icon} />
        </div>
        <div className={style["label-container"]}>
          <span>{props.name}</span>
          <span>{props.category}</span>
        </div>
      </div>
      <div className={style.right}>
        <span>${props.price}</span>
      </div>
    </div>
  );
}

export default ExpenseEntry;

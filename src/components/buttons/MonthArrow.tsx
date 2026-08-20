import Icon from "../tools/Icon";
import style from "../../css/buttons/GeneralButtons.module.css";

type buttonProps = {
  increment: boolean;
};

function MonthArrow(props: buttonProps) {
  return (
    <button className={`${style.button} ${style.square}`}>
      {props.increment ? ">" : "<"}
    </button>
  );
}

export default MonthArrow;

import Icon from "../tools/Icon";
import style from "../../css/buttons/GeneralButtons.module.css";

type buttonProps = {
  increment: boolean;
  incrementMonth: (increment: boolean) => void;
};

function MonthArrow(props: buttonProps) {
  return (
    <button
      className={`${style.button} ${style.square}`}
      onClick={() => props.incrementMonth(props.increment)}
    >
      {props.increment ? ">" : "<"}
    </button>
  );
}

export default MonthArrow;

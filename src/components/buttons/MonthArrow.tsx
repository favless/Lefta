import Icon from "../tools/Icon";
import style from "../../css/buttons/GeneralButtons.module.css";

type buttonProps = {
  increment: boolean;
  incrementMonth: (increment: boolean) => void;
};

function MonthArrow(props: buttonProps) {
  const icon = props.increment ? "app/angle-right" : "app/angle-left";

  return (
    <button
      className={`${style.button} ${style.square}`}
      onClick={() => props.incrementMonth(props.increment)}
    >
      {<Icon type={icon} />}
    </button>
  );
}

export default MonthArrow;

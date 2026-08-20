import Icon from "../tools/Icon";
import style from "../../css/buttons/TabButton.module.css";

type buttonProps = {
  name: string;
  icon: string;
};

function TabButton(props: buttonProps) {
  return (
    <button className={style.button}>
      <Icon type={props.icon} />
      <span>{props.name}</span>
    </button>
  );
}

export default TabButton;

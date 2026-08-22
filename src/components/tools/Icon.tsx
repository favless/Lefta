import style from "../../css/tools/Icon.module.css";

type iconProps = {
  type: string;
};

function Icon(props: iconProps) {
  return <svg className={style[props.type]}></svg>;
}

export default Icon;

import Icon from "./Icon";

import style from "../../css/tools/IconBox.module.css";

type IconProps = {
  icon: string;
  toptext: string;
  bottomtext: string;
};

function IconBox(props: IconProps) {
  return (
    <div className={style.container}>
      <div className={style.icondiv}>
        <Icon type={props.icon} />
      </div>
      <div className={style.text}>
        <span>{props.toptext}</span>
        <span>{props.bottomtext}</span>
      </div>
    </div>
  );
}

export default IconBox;

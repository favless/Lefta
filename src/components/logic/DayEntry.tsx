import style from "../../css/DayEntry.module.css";

type dayProps = {
  day: number;
  focused: boolean;
};

function DayEntry(props: dayProps) {
  return (
    <div
      className={`${style.container} ${!props.focused ? style.unfocused : ""}`}
    >
      <span>{props.day}</span>
    </div>
  );
}

export default DayEntry;

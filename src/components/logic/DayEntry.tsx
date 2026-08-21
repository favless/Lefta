import style from "../../css/DayEntry.module.css";

type dayProps = {
  date: string;
  focused: boolean;
};

function DayEntry(props: dayProps) {
  const day = props.date.split("-")[2];

  return (
    <div
      className={`${style.container} ${!props.focused ? style.unfocused : ""}`}
    >
      <span>{day}</span>
    </div>
  );
}

export default DayEntry;

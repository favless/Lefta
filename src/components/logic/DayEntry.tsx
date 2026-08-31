import { useSession } from "../../context/SessionContext.tsx";
import style from "../../css/logic/DayEntry.module.css";

type dayProps = {
  date: string;
  focused: boolean;
};

function DayEntry(props: dayProps) {
  const day = props.date.split("-")[2];
  const { selectedDay, setSelectedDay } = useSession();
  const selected = selectedDay === props.date;

  return (
    <div
      className={`${style.container} ${!props.focused ? style.unfocused : ""} ${selected ? style.selected : ""}`}
      onClick={() => setSelectedDay(props.date)}
    >
      <span className={style.day}>{day}</span>
    </div>
  );
}

export default DayEntry;

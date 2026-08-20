import style from "../css/CalendarDay.module.css";

type dayProps = {
  day: number;
  total: number;
};

function CalendarDay(props: dayProps) {
  return (
    <div className={style.container}>
      <span>{props.day}</span>
    </div>
  );
}

export default CalendarDay;

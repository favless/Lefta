import style from "../../css/buttons/GeneralButtons.module.css";

type ButtonProps = {
  text: string;
  for: string;
};

function AddExpense(props: ButtonProps) {
  return (
    <button className={`${style.button} ${style.green}`}>{props.text}</button>
  );
}

export default AddExpense;

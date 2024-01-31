import style from "./index.module.css";

export default function Task(props) {
  return (
    <div className={style.task}>
      <h3 className={style.taskTitle}>{props.name}</h3>
      <button className={style.btnMove}>{props.btnText}</button>
    </div>
  );
}

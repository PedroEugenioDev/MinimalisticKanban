import Button from "../Button";
import style from "./index.module.css";

export default function Task(props) {
  const handleClick = () => {
    props.method(props.name);
  };

  return (
    <div className={style.task}>
      <h3 className={style.taskTitle}>{props.name}</h3>
      <Button taskName={props.name} type={props.type} />
    </div>
  );
}

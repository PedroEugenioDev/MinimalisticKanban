import useKanban from "../../hooks/useKanban";
import style from "./index.module.css";

export default function Button(props) {
  const { addTask, startTask, finishTask, deleteTask } = useKanban();
  let btnText, handler;
  switch (props.type) {
    case "add":
      btnText = "Add";
      handler = addTask;
      break;
    case "start":
      btnText = "Start";
      handler = startTask;
      break;
    case "finish":
      btnText = "Finish";
      handler = finishTask;
      break;
    case "delete":
      btnText = "Delete";
      handler = deleteTask;
      break;
    default:
      break;
  }

  const handleClick = () => {
    handler(props.taskName);
    if (props.set) {
      props.set();
    }
  };

  return (
    <button className={style.btnTask} onClick={handleClick}>
      {btnText}
    </button>
  );
}

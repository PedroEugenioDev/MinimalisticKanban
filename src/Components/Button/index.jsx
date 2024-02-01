import useKanban from "../../hooks/useKanban";
import style from "./index.module.css";

export default function Button(props) {
  const { startTask, finishTask, deleteTask } = useKanban();
  let btnText, handler;
  switch (props.type) {
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
  };

  return (
    <button className={style.btnMove} onClick={handleClick}>
      {btnText}
    </button>
  );
}

import { arrayOf, string } from "prop-types";
import Task from "../Task/Task";
import useKanban from "../../hooks/useKanban";
import style from "./index.module.css";

TaskList.propTypes = {
  name: string,
  list: arrayOf(Object),
};

export default function TaskList(props) {
  const { createNewTask, startTask } = useKanban();
  const handleNewTask = () => {
    createNewTask("Nova Tarefa");
  };
  let type = "";
  if (props.name === "To do") {
    type = "start";
  } else if (props.name === "Doing") {
    type = "finish";
  } else {
    type = "delete";
  }

  return (
    <>
      <div className={style.list}>
        <h2 className={style.listTitle}>{props.name}</h2>
        <div className={style.listItems}>
          {props.list.map((item) => {
            return <Task name={item.name} type={type} />;
          })}
        </div>
        {props.name === "To do" ? (
          <button className={style.createBtn} onClick={handleNewTask}>
            +
          </button>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

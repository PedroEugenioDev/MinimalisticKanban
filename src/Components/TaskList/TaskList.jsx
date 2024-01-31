import { arrayOf, string } from "prop-types";
import Task from "../Task/Task";
import useKanban from "../../hooks/useKanban";
import style from "./index.module.css";
import { GoPlus } from "react-icons/go";

TaskList.propTypes = {
  name: string,
  list: arrayOf(Object),
};

export default function TaskList(props) {
  const { createNewTask } = useKanban();
  const handleNewTask = () => {
    createNewTask("Nova Tarefa");
  };
  let buttonText = "";
  if (props.name === "To do") {
    buttonText = "Start";
  } else if (props.name === "Doing") {
    buttonText = "Finish";
  } else {
    buttonText = "Delete";
  }

  return (
    <>
      <div className={style.list}>
        <h2 className={style.listTitle}>{props.name}</h2>
        <div className={style.listItems}>
          {props.list.map((item) => {
            return <Task name={item.name} btnText={buttonText} />;
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

import { useState } from "react";
import useKanban from "../../hooks/useKanban";
import Button from "../Button";
import style from "./index.module.css";

export default function Task(props) {
  const { addTask } = useKanban();
  const [newTaskName, setNewTaskName] = useState("");
  const handleClick = () => {
    props.method(props.name);
  };

  const handleChange = (ev) => {
    setNewTaskName(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addTask(newTaskName);
    props.set();
  };

  if (props.type === "add") {
    return (
      <div className={style.task}>
        <form>
          <input
            type="text"
            name="taskName"
            id="taskName"
            placeholder="Task Name..."
            value={newTaskName}
            onChange={handleChange}
          />
          <button type="submit" onClick={handleSubmit}>
            Add
          </button>
        </form>
      </div>
    );
  }
  return (
    <div className={style.task}>
      <h3 className={style.taskTitle}>{props.name}</h3>
      <Button taskName={props.name} type={props.type} />
    </div>
  );
}

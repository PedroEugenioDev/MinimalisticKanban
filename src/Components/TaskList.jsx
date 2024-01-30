import { arrayOf, string } from "prop-types";
import Task from "./Task/Task";
import useKanban from "../hooks/useKanban";

TaskList.propTypes = {
  name: string,
  list: arrayOf(Object),
};

export default function TaskList(props) {
  const { createNewTask } = useKanban();
  const handleNewTask = () => {
    createNewTask("Nova Tarefa");
  };

  return (
    <>
      <div className="list">
        <h2>{props.name}</h2>
        <div>
          {props.list.map((item) => {
            return <Task name={item.name} />;
          })}
        </div>
        {props.name === "To do" ? (
          <button className="createButton" onClick={handleNewTask}>
            +
          </button>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

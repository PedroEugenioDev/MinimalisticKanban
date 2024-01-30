import TaskList from "../TaskList/TaskList";
import useKanban from "../../hooks/useKanban";
import style from "./index.module.css";

export default function KanbanBoard() {
  const { kanbanDatabase } = useKanban();

  const teste = () => {
    console.log(kanbanDatabase);
  };

  return (
    <>
      <div className={style.board}>
        <h1 className="title">Minimalistic Kanban</h1>
        <div className={style.container}>
          <TaskList name="To do" list={kanbanDatabase[0]} />
          <TaskList name="Doing" list={kanbanDatabase[1]} />
          <TaskList name="Done" list={kanbanDatabase[2]} />
        </div>
      </div>
    </>
  );
}

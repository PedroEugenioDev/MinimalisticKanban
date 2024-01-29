import TaskList from "./TaskList";

export default function KanbanBoard() {
  return (
    <>
      <div className="board">
        <h1 className="title">Minimalistic Kanban</h1>
        <div className="container">
          <TaskList name="To do" />
          <TaskList name="Doing" />
          <TaskList name="Done" />
        </div>
      </div>
    </>
  );
}

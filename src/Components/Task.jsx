export default function Task(props) {
  return (
    <div className="task">
      <h3 className="taskName">{props.name}</h3>
      <p></p>
      <Button>{"Move >>"}</Button>
    </div>
  );
}

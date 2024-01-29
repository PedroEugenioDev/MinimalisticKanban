import { PropTypes, string } from "prop-types";

TaskList.propTypes = {
  name: string,
};

export default function TaskList(props) {
  return (
    <>
      <div className="list">
        <h2>{props.name}</h2>
      </div>
    </>
  );
}

import React from "react";
import PropTypes from "prop-types";

export const ToDoListItem = ({ toDo, index, handleDelete, handleToggle }) => {
  return (
    <div>
      <li key={toDo.id} className="list-group-item">
        <p
          className={`${toDo.done && "complete"}`}
          onClick={() => handleToggle(toDo.id)}
        >
          {index + 1} - {toDo.desc}
        </p>
        <button
          className="btn btn-outline-danger"
          onClick={() => handleDelete(toDo.id)}
        >
          🗑
        </button>
      </li>
    </div>
  );
};

ToDoListItem.propTypes = {
  toDo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

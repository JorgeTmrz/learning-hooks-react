import React from "react";
import { ToDoListItem } from "./ToDoListItem";
import PropTypes from "prop-types";

export const ToDoList = ({ toDos, handleDelete, handleToggle }) => {
  return (
    <div className="col-7">
      <ul className="list-group list-group-flush">
        {toDos.map((toDo, index) => (
          <ToDoListItem
            key={toDo.id}
            toDo={toDo}
            index={index}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))}
      </ul>
    </div>
  );
};

ToDoList.propTypes = {
  toDos: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

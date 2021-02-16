import React, { useEffect, useReducer } from "react";
import "./styles.css";
import { toDoReducer } from "./toDoReducer";
import { ToDoList } from "./ToDoList";
import { ToDoAdd } from "./ToDoAdd";

const init = () => {
  return JSON.parse(localStorage.getItem("toDos")) || [];
};

export const TodoApp = () => {
  const [toDos, dispatch] = useReducer(toDoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  const handleDelete = (id) => {
    const action = {
      type: "DELETE",
      payload: id,
    };

    dispatch(action);
  };

  const handleToggle = (id) => {
    const action = {
      type: "TOGGLE",
      payload: id,
    };

    dispatch(action);
  };

  const handleAddToDo = (newToDo) => {
    dispatch({
      type: "ADD",
      payload: newToDo
    })
  }

  return (
    <div>
      <h1>TodoApp ({toDos.length}) </h1>
      <hr />
      <div className="row">
        <ToDoList
          toDos={toDos}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
        <ToDoAdd handleAddToDo = {handleAddToDo} />
      </div>
    </div>
  );
};

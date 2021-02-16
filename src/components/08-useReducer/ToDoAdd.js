import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from '../../hooks/useForm';

export const ToDoAdd = ({handleAddToDo}) => {

    const [{ desc }, handleInputChange, reset] = useForm({
        desc: "",
      });

    const handleSubmit = (e) => {
    e.preventDefault();

    if (desc.trim().length <= 1) {
        return;
    }

    const newToDo = {
        id: new Date().getTime(),
        desc: desc,
        done: false,
    };

    handleAddToDo(newToDo);
    reset();
    };

    return (
        <div className="col-5">
          <h3>Add ToDo</h3>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="desc"
              placeholder="Description..."
              autoComplete="off"
              className="form-control"
              value={desc}
              onChange={handleInputChange}
            />
            <button
              className="btn btn-outline-primary mt-2 btn-block"
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
    )
}

ToDoAdd.propTypes = {
    handleAddToDo: PropTypes.func.isRequired
}

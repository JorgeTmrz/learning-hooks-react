import React from "react";
import { useForm } from "../../hooks/useForm";
import "./effects.css";

export const FormWithCustomHook = () => {
  const [formState, setFormState] = useForm({
    name: "",
    email: "",
    pwd: "",
  });

  const { name, email, pwd } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit = {handleSubmit}>
      <h1>FormWithCustomHook</h1>
      <hr />

      <div class="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="your name"
          autoComplete="off"
          value={name}
          onChange={setFormState}
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="email@example.com"
          autoComplete="off"
          value={email}
          onChange={setFormState}
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          name="pwd"
          className="form-control"
          placeholder="**********"
          autoComplete="off"
          value={pwd}
          onChange={setFormState}
        />
      </div>

    <button type = "submit" className = "btn btn-primary">
        Save
    </button>

    </form>
  );
};

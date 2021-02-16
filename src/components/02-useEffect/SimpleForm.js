import React, { useEffect, useState } from "react";
import "./effects.css";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    //console.log("hey!");
  }, []);

  useEffect(() => {
    //console.log("formState changed!");
  }, [formState]);

  useEffect(() => {
    //console.log("email changed!");
  }, [email]);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div class="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="your name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
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
          onChange={handleInputChange}
        />
      </div>

      {name === "123" && <Message />}
    </>
  );
};

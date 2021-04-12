import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { create, edit, remove, toggleComplete } from "./todoSlice";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(create(inputText));
    setInputText("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        />

        <button type="submit">Create New</button>
      </form>
    </div>
  );
};

export default Todo;

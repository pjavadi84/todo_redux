import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { create, edit, remove, toggleComplete } from "./todoSlice";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const [isEditingToDo, setIsEditingTodo] = useState(-1);
  const [editText, setEditText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(create(inputText));
    setInputText("");
  };

  const handleDelete = (id) => () => {
    dispatch(remove(id));
  };

  const handleToggle = (id) => () => {
    dispatch(toggleComplete(id));
  };

  const handleEdit = (id, description) => () => {
    setIsEditingTodo(id);
    setEditText(description);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(edit({ id: isEditingToDo, description: editText }));
    setIsEditingTodo(-1);
    setEditText("");
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

      {todos.map((todo) => (
        <div key={todo.id}>
          {isEditingToDo === todo.id ? (
            <form onSubmit={handleUpdate}>
              <input onChange={(e) => setEditText(e.target.value)} />
              <button type="submit">Update</button>
            </form>
          ) : (
            <>
              {todo.description} {todo.isComplete ? "DONE" : ""}
              <button onClick={handleDelete(todo.id)}>Delete</button>
              <button onClick={handleToggle(todo.id)}>Toggle</button>
              <button onClick={handleEdit(todo.id, todo.description)}>
                Edit
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Todo;

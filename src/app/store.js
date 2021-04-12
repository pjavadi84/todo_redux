import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/counter/todo/todoSlice";

import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
});

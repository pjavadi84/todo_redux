import { createSlice } from "@reduxjs/toolkit";

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export const slice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    create: (state, action) => {
      const { payload } = action;

      state.push({
        id: uuidv4(),
        description: payload,
        isComplete: false,
      });
    },

    edit: (state, action) => {
      const { id, description } = action.payload;

      const todoToEdit = state.find((todo) => todo.id === id);

      if (todoToEdit) {
        todoToEdit.description = description;
      }
    },

    toggleComplete: (state, action) => {
      const { payload } = action;

      const todoToToggle = state.find((todo) => todo.id === payload);

      if (todoToToggle) {
        todoToToggle.isComplete = !todoToToggle.isComplete;
      }
    },

    remove: (state, action) => {
      const { payload } = action;
      const index = state.findIndex((todo) => todo.id === payload);

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { create, edit, toggleComplete, remove } = slice.actions;

export default slice.reducer;

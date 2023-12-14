import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";
import { Todo, data } from "./db";
import { RootState } from "./store";

export const todosSlice = createSlice({
  name: "todos",
  initialState: data,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<Todo>) =>
      state.filter((currTodo) => currTodo.id !== action.payload.id),
    editTodo: (state, action: PayloadAction<Todo>) =>
      state.map((currTodo) => {
        if (currTodo.id === action.payload.id) {
          currTodo = action.payload;
        }

        return currTodo;
      }),
  },
});

export const { addTodo, deleteTodo, editTodo } = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos;

export default todosSlice.reducer;

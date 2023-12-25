import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Todo } from "./db";
import { RootState } from "./store";

const tmp: Todo[] = [];

export const todosSlice = createSlice({
  name: "todos",
  initialState: tmp,
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
    initialTodos: (state, action: PayloadAction<Todo[]>) => action.payload,
  },
});

export const { initialTodos, addTodo, deleteTodo, editTodo } =
  todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos;

export default todosSlice.reducer;

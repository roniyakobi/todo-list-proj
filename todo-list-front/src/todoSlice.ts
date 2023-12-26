import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Todo } from "./db";
import { RootState } from "./store";

const tmp: Todo[] = [];

export const todosSlice = createSlice({
  name: "todos",
  initialState: tmp,
  reducers: {
    addTodo: (state, action: PayloadAction<String>) => {
      let newId: number;
      if (state.length) {
        newId = Math.max(...state.map((currTodo: Todo) => currTodo.id)) + 1;
      } else {
        newId = 1;
      }

      state.push({ id: newId, name: action.payload, isCompleted: false });
    },
    deleteTodo: (state, action: PayloadAction<number>) =>
      state.filter((currTodo) => currTodo.id !== action.payload),
    toggleTodo: (state, action: PayloadAction<number>) => {
      state.map((currTodo) => {
        if (currTodo.id === action.payload) {
          currTodo.isCompleted = !currTodo.isCompleted;
        }

        return currTodo;
      });
    },
    initialTodos: (state, action: PayloadAction<Todo[]>) => action.payload,
  },
});

export const { initialTodos, addTodo, deleteTodo, toggleTodo } =
  todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos;

export default todosSlice.reducer;

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
    deleteTodo: (state, action: PayloadAction<Todo>) => {
      const index = current(state).indexOf(action.payload);
      state.splice(index, 1);
    },
    editTodo: (state: Todo[], action: PayloadAction<Todo>) => {
      state.map((currTodo) => {
        if (currTodo.id === action.payload.id) {
          currTodo.isCompleted = action.payload.isCompleted;
          currTodo.name = action.payload.name;
        }

        return currTodo;
      });
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos;

export default todosSlice.reducer;

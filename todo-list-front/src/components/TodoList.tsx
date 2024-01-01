import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";
import { Grid, Paper, Typography } from "@mui/material";
import { Todo } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { initialTodos, selectTodos } from "../todoSlice";
import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";

const GET_TODOS = gql`
  query getTodos {
    todos {
      id
      name
      isCompleted
    }
  }
`;

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const todos: Todo[] = useSelector(selectTodos);
  const { data } = useQuery(GET_TODOS);

  useEffect(() => {
    if (data) {
      dispatch(initialTodos(data.todos));
    }
  }, [data, dispatch]);

  return (
    <Grid xs={6}>
      <Typography variant="h3">Todo List</Typography>

      <Paper sx={{ bgcolor: "background.paper", textAlign: "center" }}>
        {todos.map((task: Todo) => (
          <TodoItem key={task.id} item={task} />
        ))}
        <AddTodoForm />
      </Paper>
    </Grid>
  );
};
export default TodoList;

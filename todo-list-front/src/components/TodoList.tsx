import List from "@mui/material/List";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";
import { Grid, Typography } from "@mui/material";
import { Todo } from "../db";
import { useDispatch, useSelector } from "react-redux";
import { initialTodos, selectTodos } from "../todoSlice";
import { gql, useQuery } from "@apollo/client";

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
  const { loading, error, data } = useQuery(GET_TODOS);
  // dispatch(initialTodos(data))

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <Grid
      sx={{ textAlign: "center" }}
      style={{ width: "30%", justifyContent: "center", textAlign: "center" }}
    >
      <Typography>Todo List</Typography>

      <List sx={{ bgcolor: "background.paper", textAlign: "center" }}>
        {data.todos.map((task: Todo) => (
          <TodoItem key={task.id} item={task} />
        ))}
        <AddTodoForm />
      </List>
    </Grid>
  );
};
export default TodoList;

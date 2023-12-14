import List from "@mui/material/List";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";
import { Grid, Typography } from "@mui/material";
import { Todo } from "../db";
import { useSelector } from "react-redux";
import { selectTodos } from "../todoSlice";

const TodoList: React.FC = () => {
  const todos: Todo[] = useSelector(selectTodos);

  return (
    <Grid
      sx={{ textAlign: "center" }}
      style={{ width: "30%", justifyContent: "center", textAlign: "center" }}
    >
      <Typography>Todo List</Typography>

      <List sx={{ bgcolor: "background.paper", textAlign: "center" }}>
        {todos.map((task: Todo) => (
          <TodoItem key={task.id} item={task} />
        ))}
        <AddTodoForm />
      </List>
    </Grid>
  );
};
export default TodoList;

import List from "@mui/material/List";
import TodoItem from "./TodoItem ";
import AddTodoForm from "./AddTodoForm";
import { useReducer } from "react";
import { Grid, Paper, styled } from "@mui/material";
import { Todo, data } from "../db";

const TodoList = () => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const updateTask = (task: Todo) => {
    data.map((currTask) => {
      if (currTask.id === task.id) {
        currTask.isCompleted = task.isCompleted;
        currTask.name = task.name;
      }
    });

    forceUpdate();
  };

  const deleteTask = (task: Todo) => {
    const index = data.indexOf(task);
    data.splice(index, 1);
    forceUpdate();
  };

  const addTask = (newTask: string) => {
    const newId = data[data.length - 1].id + 1;
    data.push({
      id: newId,
      name: newTask,
      isCompleted: false,
    });
    forceUpdate();
  };

  return (
    <div>
      <h1>Todo List</h1>
      <Grid xs={8} justifyContent="center">
        <Item>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {data.map((task) => (
              <TodoItem
                item={task}
                deleteItem={deleteTask}
                updateTask={updateTask}
              />
            ))}
            <AddTodoForm addNewTask={addTask} />
          </List>
        </Item>
      </Grid>
    </div>
  );
};
export default TodoList;

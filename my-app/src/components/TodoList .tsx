import List from "@mui/material/List";
import TodoItem from "./TodoItem ";
import AddTodoForm from "./AddTodoForm";
import { useReducer, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { Todo, data } from "../db";
import { width } from "@mui/system";

const TodoList: React.FC = () => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [tasks, setTasks] = useState(data);

  const updateTask = (task: Todo) => {
    tasks.map((currTask) => {
      if (currTask.id === task.id) {
        currTask.isCompleted = task.isCompleted;
        currTask.name = task.name;
      }
    });

    forceUpdate();
  };

  const deleteTask = (task: Todo) => {
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
    forceUpdate();
  };

  const addTask = (newTask: string) => {
    const newId = tasks[tasks.length - 1].id + 1;
    tasks.push({
      id: newId,
      name: newTask,
      isCompleted: false,
    });
    forceUpdate();
  };

  return (
    <Grid
      sx={{  textAlign: "center" }}
      style={{ width: "30%", justifyContent: "center", textAlign:"center"
     }}
    >
      <Typography>Todo List</Typography>

      <List sx={{ bgcolor: "background.paper", textAlign: "center" }}>
        {tasks.map((task) => (
          <TodoItem
            item={task}
            deleteItem={deleteTask}
            updateTask={updateTask}
          />
        ))}
        <AddTodoForm addNewTask={addTask} />
      </List>
    </Grid>
  );
};
export default TodoList;

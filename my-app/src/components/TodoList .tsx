import List from "@mui/material/List";
import TodoItem from "./TodoItem ";
import AddTodoForm from "./AddTodoForm";
import { useReducer, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { Todo, data } from "../db";
import { width } from "@mui/system";
import { Provider } from "react-redux";
import store from "../store";

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState(data);

  const updateTask = (task: Todo) => {
    tasks.map((currTask) => {
      if (currTask.id === task.id) {
        currTask.isCompleted = task.isCompleted;
        currTask.name = task.name;
      }
    });

    setTasks([...tasks]);
  };

  const deleteTask = (task: Todo) => {
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
    setTasks([...tasks]);
  };

  const addTask = (newTask: string) => {
    const newId = tasks[tasks.length - 1].id + 1;

    setTasks(prevTasks => [...prevTasks, {
      id: newId,
      name: newTask,
      isCompleted: false,
    }])
  };

  return (
    <Provider store={store}>
      <Grid
        sx={{ textAlign: "center" }}
        style={{ width: "30%", justifyContent: "center", textAlign: "center" }}
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
    </Provider>
  );
};
export default TodoList;

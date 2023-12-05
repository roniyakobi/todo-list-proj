import List from "@mui/material/List";
import TodoItem from "./TodoItem ";
import AddTodoForm from "./AddTodoForm";
import React, { useReducer } from "react";
import { Grid, Paper, styled } from "@mui/material";

const TodoList = () => {
  //   let tasks: string[] = ["aaaaa", "bbbbb", "cccccc", "dddddd"];
  const [tasks, setTasks] = React.useState([
    "aaaaa",
    "bbbbb",
    "cccccc",
    "dddddd",
  ]);

  const [, forceUpdate] = useReducer(x => x + 1, 0);

  const deleteTask = (task: string) => {
    const index = tasks.indexOf(task, 0);

    if (index > -1) {
      tasks.splice(index, 1);
      forceUpdate();
    }
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const addTask = (newTask : string) =>{
    tasks.push(newTask);
    forceUpdate();
  }

  return (
    <div>
      <h1>Todo List</h1>
      <Grid xs={8} justifyContent="center">
        <Item>

      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {tasks.map((task) => (
          <TodoItem item={task} deleteItem={deleteTask} />
        ))}
        <AddTodoForm addNewTask={addTask}/>
      </List>
        </Item>
      </Grid>
    </div>
  );
};
export default TodoList;

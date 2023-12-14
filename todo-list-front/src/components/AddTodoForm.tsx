import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, selectTodos } from "../todoSlice";

const AddTodoForm: React.FC = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const [newItemValue, setNewItemValue] = useState("");

  const handleChange = () => {
    if (newItemValue) {
      let newId: number;

      if (todos.length) {
        newId = Math.max(...todos.map((currTodo) => currTodo.id)) + 1;
      } else {
        newId = 1;
      }

      dispatch(addTodo({ id: newId, name: newItemValue, isCompleted: false }));
      setNewItemValue("");
    }
  };

  return (
    <>
      <TextField
        id="newItem"
        variant="standard"
        onChange={(event) => {
          setNewItemValue(event.target.value);
        }}
        value={newItemValue}
        placeholder="Add new item"
      />
      <Button
        variant="contained"
        sx={{ bgcolor: "#3f51b5" }}
        onClick={handleChange}
      >
        ADD TODO
      </Button>
    </>
  );
};

export default AddTodoForm;

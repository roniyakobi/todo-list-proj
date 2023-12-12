import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, selectTodos } from "../todoSlice";

const AddTodoForm: React.FC = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const [newItemValue, setNewItemValue] = useState("");

  const handleChange = (event: any) => {
    setNewItemValue(event.target.value);
  };

  return (
    <>
      <TextField
        id="newItem"
        variant="standard"
        onChange={handleChange}
        value={newItemValue}
        placeholder="Add new item"
      />
      <Button
        variant="contained"
        sx={{ bgcolor: "#3f51b5" }}
        onClick={() => {
          if (newItemValue) {
            let newId;
            try {
              newId = todos[todos.length - 1].id + 1;
            } catch (error) {
              newId = 1;
            }
            dispatch(
              addTodo({ id: newId, name: newItemValue, isCompleted: false })
            );
            setNewItemValue("");
          }
        }}
      >
        ADD TODO
      </Button>
    </>
  );
};

export default AddTodoForm;

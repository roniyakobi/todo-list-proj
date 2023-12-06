import { Button, TextField } from "@mui/material";
import { useState } from "react";

interface TodoProps {
  addNewTask: any;
}

const AddTodoForm: React.FC<TodoProps> = ({ addNewTask }) => {
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
            addNewTask(newItemValue);
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

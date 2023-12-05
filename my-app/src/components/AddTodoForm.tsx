import { Button, TextField } from "@mui/material";
import { useState } from "react";

interface TodoProps {
  addNewTask: any;
}

const AddTodoForm = (props: TodoProps) => {
  const [newItemValue, setNewItemValue] = useState("");
  const { addNewTask } = props;

  const buttonStyle = {
    backgroundColor: "#3f51b5",
  };

  const handleChange = (event: { target: { value: any } }) => {
    setNewItemValue(event.target.value);
  };

  const addItem = () => {
    if (newItemValue){
        addNewTask(newItemValue);
        setNewItemValue("");
    }
  };

  return (
    <div className="AddTodoForm">
      <TextField
        id="newItem"
        variant="standard"
        onChange={handleChange}
        value={newItemValue}
        placeholder="Add new item"
      />
      <Button variant="contained" style={buttonStyle} onClick={addItem}>
        ADD TODO
      </Button>
    </div>
  );
};

export default AddTodoForm;

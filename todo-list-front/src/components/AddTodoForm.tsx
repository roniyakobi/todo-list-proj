import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";
import { addTodo } from "../todoSlice";

const ADD_TODO = gql`
  mutation addTodo($name: String!) {
    addTodo(name: $name) {
      id
    }
  }
`;

const AddTodoForm: React.FC = () => {
  const dispatch = useDispatch();
  const [newItemValue, setNewItemValue] = useState("");

  const [addTodoToDB] = useMutation(ADD_TODO);

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
        onClick={() => {
          if (newItemValue) {
            addTodoToDB({
              variables: { name: newItemValue },
            });
            dispatch(addTodo(newItemValue));

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

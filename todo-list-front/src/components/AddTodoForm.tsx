import { Button, ListItem, TextField } from "@mui/material";
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
  const [errorMessage, setErrorMessage] = useState("");

  const [addTodoToDB] = useMutation(ADD_TODO);

  return (
    <ListItem sx={{ justifyContent: "space-between" }}>
      <div>
        <TextField
          id="newItem"
          variant="standard"
          onChange={(event) => {
            setErrorMessage("");
            setNewItemValue(event.target.value);
          }}
          value={newItemValue}
          placeholder="Add new item"
          helperText={errorMessage}
          color= {errorMessage ? "error" : "primary"}
          focused
        />
      </div>
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
          } else {
            setErrorMessage("can not add empty todo");
          }
        }}
      >
        ADD TODO
      </Button>
    </ListItem>
  );
};

export default AddTodoForm;

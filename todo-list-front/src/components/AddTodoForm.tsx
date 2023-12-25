import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Todo } from "../db";
import { useDispatch } from "react-redux";
import { addTodo } from "../todoSlice";

const ADD_TODO = gql`
  mutation addTodo($todo: TodoInput) {
    addTodo(todo: $todo) {
      id
    }
  }
`;

const GET_TODOS = gql`
  query getTodos {
    todos {
      id
      name
    }
  }
`;

const AddTodoForm: React.FC = () => {
  const dispatch = useDispatch();
  const [newItemValue, setNewItemValue] = useState("");
  const {
    loading: todosLoading,
    error: todosError,
    data: todosData,
  } = useQuery(GET_TODOS);

  const [addTodoToDB, { data, loading, error }] = useMutation(ADD_TODO);

  const handleChange = () => {
    if (newItemValue) {
      let newId: number;

      if (todosData.todos.length) {
        newId =
          Math.max(...todosData.todos.map((currTodo: Todo) => currTodo.id)) + 1;
      } else {
        newId = 1;
      }

      addTodoToDB({
        variables: {
          todo: { id: newId, name: newItemValue, isCompleted: false },
        },
      });
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

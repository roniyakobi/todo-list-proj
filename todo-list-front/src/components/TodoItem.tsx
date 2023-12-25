import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Todo } from "../db";
import { gql, useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../todoSlice";

interface TodoProps {
  item: Todo;
}
const UPDATE_TODO = gql`
  mutation updateTodo($todo: TodoInput) {
    updateTodo(todo: $todo) {
      id
    }
  }
`;

const DELETE_TODO = gql`
  mutation delete($idToDelete: Int) {
    deleteTodo(idToDelete: $idToDelete) {
      id
    }
  }
`;

const TodoItem: React.FC<TodoProps> = ({ item }) => {
  const dispatch = useDispatch();
  const [updateTodo] = useMutation(UPDATE_TODO);
  const [deleteTodoById] = useMutation(DELETE_TODO);

  return (
    <ListItem
      key={item.id}
      secondaryAction={
        <IconButton
          edge="end"
          onClick={() => {
            dispatch(deleteTodo(item));
            deleteTodoById({ variables: { idToDelete: item.id } });
          }}
        >
          <DeleteIcon sx={{ color: "#f50057" }} />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton
        onClick={() => {
          const updatedTodo = {
            id: item.id,
            name: item.name,
            isCompleted: !item.isCompleted,
          };
          updateTodo({
            variables: {
              todo: updatedTodo,
            },
          });
          dispatch(editTodo(updatedTodo));
        }}
        style={
          item.isCompleted
            ? {
                textDecoration: "line-through",
                fontStyle: "italic",
                color: "gray",
              }
            : {}
        }
      >
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={item.isCompleted}
            sx={{
              "&.Mui-checked": {
                color: "#3f51b5",
              },
            }}
          />
        </ListItemIcon>
        <ListItemText primary={item.name} />
      </ListItemButton>
    </ListItem>
  );
};

export default TodoItem;

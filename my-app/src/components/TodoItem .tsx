import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Todo } from "../db";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../todoSlice";

interface TodoProps {
  item: Todo;
}

const TodoItem: React.FC<TodoProps> = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <ListItem
      key={item.id}
      secondaryAction={
        <IconButton edge="end" onClick={() => dispatch(deleteTodo(item))}>
          <DeleteIcon sx={{ color: "#f50057" }} />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton
        onClick={() =>
          dispatch(
            editTodo({
              id: item.id,
              name: item.name,
              isCompleted: !item.isCompleted,
            })
          )
        }
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

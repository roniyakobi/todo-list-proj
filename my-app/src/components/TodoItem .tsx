import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Todo } from "../db";

interface TodoProps {
  item: Todo;
  deleteItem: any;
  updateTask: any;
}

const TodoItem = (props: TodoProps) => {
  const { item, deleteItem, updateTask } = props;

  const hadleDelete = () => {
    deleteItem(item);
  };

  const taskCompleted = {
    textDecoration: "line-through",
    fontStyle: "italic",
    color: "gray",
  };

  const deleteIcon = {
    color: "#f50057",
  };

  return (
    <div className="TodoItem">
      {
        <ListItem
          key={item.id}
          secondaryAction={
            <IconButton edge="end" onClick={hadleDelete}>
              <DeleteIcon style={deleteIcon} />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton
            role={undefined}
            onClick={() =>
              updateTask({
                id: item.id,
                name: item.name,
                isCompleted: !item.isCompleted,
              })
            }
            style={item.isCompleted ? taskCompleted : {}}
            dense
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={item.isCompleted}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": item.name }}
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
      }
    </div>
  );
};

export default TodoItem;

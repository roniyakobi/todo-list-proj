import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

interface TodoProps {
  item: string;
  deleteItem: any;
}

const TodoItem = (props: TodoProps) => {
  const { item, deleteItem } = props;

  const [checked, setChecked] = React.useState(false);

  const hadleDelete = () =>{
    deleteItem(item);
  }

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
          key={item}
          secondaryAction={
            <IconButton id={item} edge="end" onClick={hadleDelete}>
              <DeleteIcon style={deleteIcon} />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton
            role={undefined}
            onClick={() => setChecked(!checked)}
            style={checked ? taskCompleted : {}}
            dense
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": item }}
                sx={{
                  "&.Mui-checked": {
                    color: "#3f51b5",
                  },
                }}
              />
            </ListItemIcon>
            <ListItemText id={item} primary={item} />
          </ListItemButton>
        </ListItem>
      }
    </div>
  );
};

export default TodoItem;

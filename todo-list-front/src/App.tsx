import { Grid } from "@mui/material";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Grid container sx={{ justifyContent: "center", textAlign: "center" }}>
      <TodoList></TodoList>
    </Grid>
  );
}

export default App;

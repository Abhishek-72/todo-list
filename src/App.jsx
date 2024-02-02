import AddTodo from "./component/AddTodo";
import AppName from "./component/AppName";
import Todoitemm1 from "./component/Todoitem1";
import Todoitemm2 from "./component/Todoitem2";
import "./App.css";
function App() {
  return (
    <center class="todo-container">
      <AppName />
      <AddTodo />
      <div class="items-container">
        <Todoitemm1 />
        <Todoitemm2 />
      </div>
    </center>
  );
}

export default App;

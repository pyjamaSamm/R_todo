import "./styles.css";
import { DataList } from "./Context";
import Form from "./Form";
import ToDoList from "./TodoList";
export default function App() {
  return (
    <div className="App">
      <DataList>
        <Form />
        <ToDoList />
      </DataList>
    </div>
  );
}
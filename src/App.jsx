import { useState } from "react";
import CreateTodoForm from "./components/CreateTodoForm";
import TodosList from "./components/TodosList";

const App = () => {

  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h3>My Todo</h3>

      <CreateTodoForm 
        todos={todos}
        setTodos={setTodos}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />

      <TodosList 
        todos={todos}
        setTodos={setTodos}
        setIsEditing={setIsEditing}
      />
    </div>
  )
}

export default App;
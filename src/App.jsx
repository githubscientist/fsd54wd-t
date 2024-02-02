import { useState } from "react";
import CreateTodoForm from "./components/CreateTodoForm";
import TodosList from "./components/TodosList";

const App = () => {

  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [newTodoItem, setNewTodoItem] = useState({
    name: '',
    description: '',
    status: 'Not Completed'
  });
  const [newItemIndex, setNewItemIndex] = useState(null);

  return (
    <div>
      <h3>My Todo</h3>

      <CreateTodoForm 
        todos={todos}
        setTodos={setTodos}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        newTodoItem={newTodoItem}
        setNewTodoItem={setNewTodoItem}
        newItemIndex={newItemIndex}
      />

      <TodosList 
        todos={todos}
        setTodos={setTodos}
        setIsEditing={setIsEditing}
        newTodoItem={newTodoItem}
        setNewTodoItem={setNewTodoItem}
        setNewItemIndex={setNewItemIndex}
      />
    </div>
  )
}

export default App;
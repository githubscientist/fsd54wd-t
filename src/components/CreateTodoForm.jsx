import React, { useEffect } from 'react';
import { useState } from 'react';

const CreateTodoForm = ({ todos, setTodos, isEditing, setIsEditing, newTodoItem, newItemIndex }) => {
    const [newTodo, setNewTodo] = useState({
        name: '',
        description: ''
    });
  
  useEffect(() => {
    if (isEditing) {
      setNewTodo({
        name: newTodoItem.name,
        description: newTodoItem.description
      });
      console.log(newItemIndex);
    }

  }, [newTodoItem, isEditing]);

    const addTodo = (e) => {
        e.preventDefault();

        setTodos([
        ...todos,
            {
                name: newTodo.name,
                description: newTodo.description,
                status: false
            }
        ]);

        setNewTodo({
            name: '',
            description: ''
        });
    }
  
  const updateTodo = (e) => {
    e.preventDefault();

    const newTodos = [...todos];

    newTodos[newItemIndex] = newTodo;

    setTodos(newTodos);

    setIsEditing(false);
  }

  return (
    <div>
        <form className="todo-form">
        <input 
          type="text"
          placeholder="Todo Name"
          value={newTodo.name}
          onChange={(e) => setNewTodo({
            ...newTodo,
            name: e.target.value
          })}
        />

        <input 
          type="text"
          placeholder="Todo Description"
          value={newTodo.description}
          onChange={(e) => setNewTodo({
            ...newTodo,
            description: e.target.value
          })
          }
        />

        {
          isEditing ? (
            <button onClick={updateTodo}>Update Todo</button>
          ) : (
            <button onClick={addTodo}>Add Todo</button>
          )
        }
      </form>
    </div>
  )
}

export default CreateTodoForm;
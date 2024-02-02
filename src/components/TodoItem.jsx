import '../components/TodoItem.css';

const TodoItem = ({ todo, setIsEditing, index }) => {

  const editTodoItem = () => {
    setIsEditing(true);

    console.log(todo);
  }

  return (
    <div className='todoItem'>
      <li>
        <p>Name: {todo.name}</p>
        <p>Description: {todo.description}</p>
        <p>Status:
          <select>
            <option>Not Completed</option>
            <option>Completed</option>
          </select>
        </p>
      </li>
      <button onClick={editTodoItem}>
        Edit
      </button>
      <button>
        Delete
      </button>
    </div>
  )
}

export default TodoItem;
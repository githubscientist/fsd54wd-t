import TodoItem from "./TodoItem";

const TodosList = ({ todos, setTodos, setIsEditing, newTodoItem, setNewTodoItem, setNewItemIndex }) => {
  return (
    <div>
        <h3>My Todos</h3>

          <ul className="todosList">
              {
                  todos.map((todo, index) => (
                      <TodoItem
                          todo={todo}
                          key={index}
                          index={index}
                          setIsEditing={setIsEditing}
                          newTodoItem={newTodoItem}
                      setNewTodoItem={setNewTodoItem}
                      setNewItemIndex={setNewItemIndex}
                      />
                  ))
              }
        </ul>
    </div>
  )
}

export default TodosList;
import TodoItem from "./TodoItem";

const TodosList = ({ todos, setTodos, setIsEditing}) => {
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
                      />
                  ))
              }
        </ul>
    </div>
  )
}

export default TodosList;
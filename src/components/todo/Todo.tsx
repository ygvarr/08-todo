interface PropsType {
  todo: {
    task: string
    id: number
  }
  deleteTodo: (todoId: number) => void
  toggleTodo: (todoId: number) => void
}

export const Todo: React.FC<PropsType> = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <>
      <div>
        <input type='checkbox' onChange={() => toggleTodo(todo.id)}></input>
        <span>{todo.task}</span>
        <button onClick={() => deleteTodo(todo.id)}>Remove</button>
      </div>
    </>
  )
}

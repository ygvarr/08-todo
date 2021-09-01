import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { actions } from '../../redux/todosReducer'
import { Todo } from '../todo/Todo'

export const Todos: React.FC = () => {
  const { todos } = useSelector((state: RootState) => state.todosReducer)
  const dispatch = useDispatch()
  const [todoText, setTodoText] = useState('')

  const todoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value)
  }

  const AddTodo = (todoText: string) => {
    if (todoText !== '') dispatch(actions.addTodo(todoText))
  }

  return (
    <>
      Todo list
      <div>
        <input value={todoText} onChange={todoChange}></input>
        <button onClick={() => AddTodo(todoText)}>Add</button>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  )
}

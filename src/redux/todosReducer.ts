import { AnyAction } from 'redux'

const initialState = {
  todos: [
    { id: 1, complited: false, task: 'shoping' },
    { id: 2, complited: false, task: 'dancing' },
    { id: 3, complited: false, task: 'sleeping' },
    { id: 4, complited: false, task: 'eat' },
  ],
}

export const todosReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodos = {
        id: state.todos.length + 1,
        complited: false,
        task: action.newTodosText,
      }
      return {
        ...state,
        todos: [newTodos, ...state.todos],
      }
    case 'DELETE_TODO':
      return {
        ...state,
        todos: [...state.todos].filter(todo => todo.id !== action.todoId),
      }
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: [...state.todos].filter(todo => {
          if (todo.id === action.todoId) {
            todo.complited = !todo.complited
          }
          return true
        }),
      }
    default:
      return state
  }
}

export const actions = {
  addTodo: (newTodosText: string) => ({
    type: 'ADD_TODO',
    newTodosText,
  }),
  deleteTodo: (todoId: number) => ({
    type: 'DELETE_TODO',
    todoId,
  }),
  toggleTodo: (todoId: number) => ({
    type: 'TOGGLE_TODO',
    todoId,
  }),
}

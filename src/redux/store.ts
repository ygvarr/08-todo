import { createStore, combineReducers } from 'redux'
import { todosReducer } from './todosReducer'

const rootReducer = combineReducers({
  todosReducer,
})

const enhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

export const store = createStore(rootReducer, enhancers())

export type RootState = ReturnType<typeof rootReducer>

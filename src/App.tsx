import { Todos } from './components/todos/Todos'
import './App.scss'
import { Header } from './components/header/Header'
import { Route, Switch } from 'react-router-dom'
import { Placeholder } from './components/placeholder/Placeholder'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <>
        <Switch>
          <Route path='/todo'>
            <Todos />
          </Route>
          <Route path='/placeholder'>
            <Placeholder />
          </Route>
          <Route path='/'>
            <Todos />
          </Route>
        </Switch>
      </>
    </>
  )
}

export default App

import { useState } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'
import initial_seed from './seed/initialseed'
import { ITodo } from './types'
import styles from './App.module.css'

function App() {
  const [todos, setTodos] = useState(initial_seed)

  const addTodo = (todo: ITodo) => {
    setTodos([...todos, todo])
  }

  const removeTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Todo List</h1>
      <TodoList todos={todos} removeTodo={removeTodo} />
      <Form addTodo={addTodo} />
    </div>
  )
}

export default App

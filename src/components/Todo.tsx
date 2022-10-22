import { ITodo } from '../types'
import styles from './Todo.module.css'
import { BsTrash } from 'react-icons/bs'

interface TodoProps {
  todos: ITodo[]
  removeTodo: (id: number) => void
}

const Todo = ({ todos, removeTodo }: TodoProps) => {
  return (
    <div>
      {todos.map((todo) => (
        <div className={styles.container} key={todo.id}>
          <div className={styles.title}>{todo.title}</div>
          <p className={styles.description}>{todo.description}</p>
          <button
            className={styles.removeBtn}
            onClick={() => removeTodo(todo.id)}
          >
            <BsTrash />
          </button>
        </div>
      ))}
    </div>
  )
}

export default Todo

import Todo from './Todo'
import { ITodo } from '../types'
import styles from './TodoList.module.css'

interface TodoListProps {
  todos: ITodo[]
  removeTodo: (id: number) => void
}

const TodoList = ({ todos, removeTodo }: TodoListProps) => {
  return (
    <div className={styles.container}>
      <Todo todos={todos} removeTodo={removeTodo} />
    </div>
  )
}

export default TodoList

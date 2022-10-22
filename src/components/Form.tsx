import React from 'react'
import { ITodo } from '../types'
import { useState } from 'react'
import styles from './Form.module.css'

interface FormProps {
  addTodo: (todo: ITodo) => void
}

const Form = ({ addTodo }: FormProps) => {
  const [newTodo, setNewTodo] = useState<ITodo>({
    id: 0,
    title: '',
    description: ''
  })

  const handleTitle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    if (newTodo.title.length < 1) throw new Error('Title is missing')

    addTodo({
      id: Math.floor(Math.random() * 10000),
      title: newTodo.title,
      description: newTodo.description
    })
    setNewTodo({
      id: 0,
      title: '',
      description: ''
    })
  }

  const clear = () => {
    setNewTodo({
      id: 0,
      title: '',
      description: ''
    })
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        className={styles.title}
        onChange={handleTitle}
        placeholder="Todo Title"
        name="title"
        value={newTodo.title}
      />

      <textarea
        className={styles.description}
        onChange={handleTitle}
        placeholder="Todo Description"
        name="description"
        value={newTodo.description}
      />
      <div className={styles.containerBtn}>
        <button className={styles.addBtn}>Add Todo</button>
        <button className={styles.clearBtn} onClick={clear}>
          Clear
        </button>
      </div>
    </form>
  )
}

export default Form

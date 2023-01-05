import React from 'react'
import styles from './Todo.module.css'

interface TodoProps {
  id: string
  text: string
  onRemoveTodo: (todoId: string) => void
}

const Todo: React.FC<TodoProps> = (props) => {
  const removeTodoHandler = (): void => {
    props.onRemoveTodo(props.id)
  }

  return (
    <li className={styles.item}>
      <p>{props.text}</p>
      <button type={'button'} onClick={removeTodoHandler}>
        Remove
      </button>
    </li>
  )
}
export default Todo

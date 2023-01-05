import React, { useContext } from 'react'
import styles from './Todo.module.css'
import TodosContext from '../store/todos-context'

interface TodoProps {
  id: string
  text: string
}

const Todo: React.FC<TodoProps> = (props) => {
  const { removeTodo } = useContext(TodosContext)
  const removeTodoHandler = (): void => {
    removeTodo(props.id)
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

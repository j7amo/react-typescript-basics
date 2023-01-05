import React, { useContext } from 'react'
import Todo from './Todo'
import styles from './Todos.module.css'
import TodosContext from '../store/todos-context'

const Todos: React.FC = () => {
  const { todos } = useContext(TodosContext)

  return (
    <ul className={styles.todos}>
      {todos.map(({ id, text }) => {
        return <Todo key={id} text={text} id={id} />
      })}
    </ul>
  )
}

export default Todos

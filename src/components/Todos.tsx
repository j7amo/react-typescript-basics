import React, { ReactNode } from 'react'
import { TodoModel } from '../models/todos'
import Todo from './Todo'
import styles from './Todos.module.css'

type PropsWithChildren<P> = P & { children?: ReactNode | undefined }

interface TodosProps {
  items: TodoModel[]
  onRemoveTodo: (todoId: string) => void
}

const Todos: React.FC<PropsWithChildren<TodosProps>> = (props) => {
  return (
    <ul className={styles.todos}>
      {props.items.map(({ id, text }) => {
        return (
          <Todo
            key={id}
            text={text}
            id={id}
            onRemoveTodo={props.onRemoveTodo}
          />
        )
      })}
    </ul>
  )
}

export default Todos

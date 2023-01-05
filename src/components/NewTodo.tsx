import React, { useRef } from 'react'
import styles from './NewTodo.module.css'

interface NewTodoProps {
  onSubmit: (text: string) => void
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null)
  const formSubmitHandler = (evt: React.FormEvent): void => {
    evt.preventDefault()

    if (textInputRef?.current === null) {
      return
    }

    const enteredTodoText = textInputRef.current.value

    if (enteredTodoText.trim().length === 0) {
      return
    }

    props.onSubmit(enteredTodoText)
    textInputRef.current.value = ''
  }

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <label htmlFor="todo-text">Your todo text</label>
      <input id="todo-text" type={'text'} ref={textInputRef} />
      <button type={'submit'}>Add Todo</button>
    </form>
  )
}

export default NewTodo

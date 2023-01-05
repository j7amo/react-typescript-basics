import React, { useCallback, useState } from 'react'
import Todos from './components/Todos'
import { TodoModel } from './models/todos'
import NewTodo from './components/NewTodo'

const DUMMY_TODOS: TodoModel[] = [
  {
    id: 't1',
    text: 'Learn Typescript'
  },
  {
    id: 't2',
    text: 'Learn NodeJS'
  }
]

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoModel[]>(DUMMY_TODOS)

  const todoAddHandler = useCallback((todoText: string) => {
    setTodos((prevTodos) => {
      const newTodo = {
        id: new Date().toISOString(),
        text: todoText
      }

      return [newTodo, ...prevTodos]
    })
  }, [])

  const todoRemoveHandler = useCallback((todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId))
  }, [])

  return (
    <>
      <NewTodo onSubmit={todoAddHandler} />
      <Todos items={todos} onRemoveTodo={todoRemoveHandler} />
    </>
  )
}

export default App

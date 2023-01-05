import React, { useCallback, useMemo, useState } from 'react'
import { TodoModel } from '../models/todos'

interface PropsWithChildren {
  children: React.ReactNode
}

interface ITodoContext {
  todos: TodoModel[]
  addTodo: (todoText: string) => void
  removeTodo: (todoId: string) => void
}

const initialState: TodoModel[] = [
  {
    id: 't1',
    text: 'Learn Typescript'
  },
  {
    id: 't2',
    text: 'Learn NodeJS'
  }
]

const TodosContext = React.createContext<ITodoContext>({
  todos: [],
  addTodo: (todoText: string) => {},
  removeTodo: (todoId: string) => {}
})

export const TodosContextProvider: React.FC<PropsWithChildren> = (props) => {
  const [todosList, setTodosList] = useState<TodoModel[]>(initialState)

  const todoAddHandler = useCallback((todoText: string) => {
    setTodosList((prevTodosList) => {
      const newTodo = {
        id: new Date().toISOString(),
        text: todoText
      }

      return [newTodo, ...prevTodosList]
    })
  }, [])

  const todoRemoveHandler = useCallback((todoId: string) => {
    setTodosList((prevTodosList) =>
      prevTodosList.filter((todo) => todo.id !== todoId)
    )
  }, [])

  const contextValue: ITodoContext = useMemo(
    () => ({
      todos: todosList,
      addTodo: todoAddHandler,
      removeTodo: todoRemoveHandler
    }),
    [todosList]
  )

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  )
}

export default TodosContext

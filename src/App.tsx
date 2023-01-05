import React from 'react'
import Todos from './components/Todos'
import NewTodo from './components/NewTodo'

const App: React.FC = () => {
  return (
    <>
      <NewTodo />
      <Todos />
    </>
  )
}

export default App

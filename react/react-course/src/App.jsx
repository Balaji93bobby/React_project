import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'
import TodoTitle from './components/TodoTitle'

function App() {
  return (
    <>
    <TodoTitle/>
    <Todo />
    <Todo />
    <Todo />
    <Todo />
    </>
  )
}

export default App

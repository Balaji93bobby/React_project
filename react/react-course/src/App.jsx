import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'
import TodoTitle from './components/TodoTitle'
import Popup from './components/Popup'
import Counter from './components/Counter'
// import { useState } from 'react'

function App() {
  const [popupOpen, setPopupOpen] = useState(false)


  return (
    <>
    <TodoTitle/>
    <div>
      <input type="text" onChange={(event) => {
          console.log(event.target.value)
      }}/>
      <button onClick={() => setPopupOpen(true)}>Add To Do</button>
    </div>
    <Todo 
    task='Learn React' 
    // description='Code Along and Take Notes'
    />
    <Todo 
    task='Finish ASAP frontend'
    // description='3 Hours Everyday'
    />
    <Todo 
    task='Land a job'
    // description='Apply to jobs everyday'
    />
    <Todo 
    task='Earn 10 LPA'
    // description='Live life and relax'
    />
    {popupOpen && <Popup message='Are you 100% sure?'/> }
    </>
  )
}

export default App

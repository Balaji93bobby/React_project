import { useState, useEffect } from 'react'
import './App.css'
import Todo from './components/Todo'
import TodoTitle from './components/TodoTitle'
import Popup from './components/Popup'
import Counter from './components/Counter'
// import { useState } from 'react'

function App() {
  const [popupOpen, setPopupOpen] = useState(false)
  function togglePopup(){
    setPopupOpen(true)
    console.log('parent Notified')
  }
  function cancelPopup(){
    setPopupOpen(false)
  }
  useEffect (() =>{
    console.log('only when the component loads')
  }, [])

  useEffect(() => {
    console.log(`component mounted and when popupOpen changes to ${popupOpen}`)
  }, [popupOpen])

  useEffect(() => {
    console.log('on every render')
  })


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
    task='Learn React' togglePopup={togglePopup} 
    // description='Code Along and Take Notes'
    />
    <Todo 
    task='Finish ASAP frontend' togglePopup={togglePopup}
    // description='3 Hours Everyday'
    />
    <Todo 
    task='Land a job' togglePopup={togglePopup}
    // description='Apply to jobs everyday'
    />
    <Todo 
    task='Earn 10 LPA' togglePopup={togglePopup}
    // description='Live life and relax'
    />
    {popupOpen && <Popup message='Are you 100% sure?' cancelPopup={ cancelPopup }/> }
    </>
  )
}

export default App

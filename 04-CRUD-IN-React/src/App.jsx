import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [todoList, steTodoList] = useState([])

  return (
    <div className='App'>
      <div className='addTask'>
        <input/>
        <button>Add task</button>
      </div>
      <div>"list"</div>
    </div>
  )
}

export default App

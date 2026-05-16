import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task_id = todoList.length == 0? 1: todoList[todoList.length - 1].id + 1; 
    setTodoList([...todoList, {id: task_id, task: newTask}]);
  };
  
  const deleteTask = (id) => {
    const tasks = todoList.filter((task) => task.id !== id)
    setTodoList(tasks);
  };

  return (
    <div className='App'>
      <div className='addTask'>
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add task</button>
      </div>
      <div>{todoList.map((task) => {
        return <div><h1>{task.task}</h1> <button onClick={()=> deleteTask(task.id)}>Delete</button></div>
      })}</div>
    </div>
  )
}

export default App

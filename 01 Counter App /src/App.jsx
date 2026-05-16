import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [count, changeCount] = useState(0);

  return <div className="App">(
    <button onClick={() => changeCount(count + 1)}>Increase</button>
    <button onClick={() => changeCount(count - 1)}>Decrease</button>
    <button onClick={() => changeCount(0)}>Set to Zero</button>
    <h1>{count}</h1>
    )
  </div>;
}

export default App;


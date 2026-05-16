import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
  <div>
    <Job company="Discovery" position="data engineer" salary={40000}/>
    <Job company="Amazon" position="ML engineer" salary={50000}/>
    <Job company="FNB" position="Data Scientist" salary={70000}/>
  </div>); 
}

export default App;


const Job = (props) => {
  return (
    <div>
      <h1 class="company">{props.company}</h1>
      <h2 class="datais">{props.position}</h2>
      <h2 class="details">{props.salary}</h2>
    </div>
   );
};

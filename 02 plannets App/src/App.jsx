import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const plannets = [
    {name: "earth", isGasPlannet: true},
    {name: "juptiter", isGasPlannet: true},
    {name: "mecury", isGasPlannet: false},
    {name: "venus", isGasPlannet: false},
    {name: "Naptune", isGasPlannet: true},
    {name: "mars", isGasPlannet: true},
  ]
  return  <div>
    {plannets.map((planet, key) => planet.isGasPlannet && <h1>{planet.name}</h1>)}
    </div>
}

export default App

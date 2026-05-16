import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
    <h1 className="bg-green-400 text-4xl font-bold text-blue-500">
      Tailwind is working!
    </h1>
    <Card username= "Chai aur react" btnText= "click me"/>
    <Card username="Sarika" btnText= "visit me"/>
    </>
  
  )
}

export default App

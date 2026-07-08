import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  console.log("App rendered", Math.random());
  
  const [value, setValue] = useState(1)

 // const [multipliedValue, setMultipliedValue] = useState(1)

//  const multipliedValue = value * 5

//   const multiplyByFive = () => {
      
//       setValue(value + 1)
//   }

  const clickMe = () => {
  //  console.log("logged");
    //setValue(value + 1)

    setValue(3)
  }

  return (
    <>
      <h1>Main value:{value} </h1>
      <button
         onClick={clickMe}
      >Click to Multiply by 5</button>
     { /* <h2>Multiplied value: {multipliedValue} </h2>*/}
    </>
  )
}

export default App

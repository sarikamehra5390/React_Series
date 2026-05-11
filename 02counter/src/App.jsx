import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  //hooks
  // useState is responsible for changing the state of the UI
   let [counter, setCounter] = useState(15);
  //counter is a variable and setCounter is a function which is responsible for updating the counter

  // let counter = 15;
  const addValue = () => {
    if(counter < 20){
      setCounter(counter + 1)
    }
  };

  const removeValue = () =>{
    if(counter > 0){
      setCounter(counter - 1)
    }
  };

  return (
    <>
      <h1>CHAI AUR REACT</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>Footer:{counter}</p>
    </>
  );
}

export default App;

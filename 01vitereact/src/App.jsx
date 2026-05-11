import { Component } from "react"
import Chai from "./Chai"
function App() {

  const username = "chai aur code "
 
 return (
  <>
  <Chai /> 
  <h1>chai aur react {username}</h1>
  <p>test para</p>
  </>
  
  )
}

export default App

// <> this is called fragment in react and is used to return different tags in react 
// for eg : <>
// <Chai />
// <h1>chai aur react</h1>
// <p>Test para</p>
// </>

//best practides to use react 
//1. when we are making a Component we should make sure that we name the function as capitalized.
//2.name the file name as captalized


// Babel is the Javascript compiler/transpiler which converts JSX into normal javascript so thet the browser can understand the code
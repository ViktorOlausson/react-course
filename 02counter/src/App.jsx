import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)
  
  //let counter = 69

  const addValue = () => {
    //setCounter(counter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1) 
  }

  return (
    <>
      <h1>react course {counter}</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>add value</button>
      <button onClick={removeValue}>remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App

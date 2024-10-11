import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>react course</h1>
      <h2>counter</h2>
      <button>add value</button>
      <button>remove value</button>
      <p>footer:</p>
    </>
  )
}

export default App

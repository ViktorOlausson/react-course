import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'
import Footer from './components/footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card username="viktor" post = "rikschef"/>
      <Card/>
      <Footer/>
      <Footer text = " yooo this is da footer"/>
    </>
  )
}

export default App

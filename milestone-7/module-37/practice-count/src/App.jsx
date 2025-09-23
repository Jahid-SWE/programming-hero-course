import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './Count'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Count></Count>
      </div>
    </>
  )
}

export default App

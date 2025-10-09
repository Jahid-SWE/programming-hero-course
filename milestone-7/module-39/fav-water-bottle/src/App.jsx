import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bottles from './components/Bottles/Bottles'

const bottlesPromise = fetch('./bottles.json').then(res=>res.json())

function App() {
  

  return (
    <>
     <h1>Buy Some Water Bottle</h1>
    <Suspense fallback={<p>Bottles are Loding</p>}>
      <Bottles bottlesPromise={bottlesPromise} ></Bottles>
    </Suspense>
    </>
  )
}

export default App

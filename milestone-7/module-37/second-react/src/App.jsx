import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Library from './Library'

function App() {
 
  const books= [
    {id:1, name:'Physics', price:500},
    {id:2, name:'Bangla', price:300},
    {id:3, name:'Enlish', price:800},
    {id:4, name:'Biology', price:200},
    {id:5, name:'Chemistry', price:700}
  ]
  return (
    <>
      <div>
        
      <h1>Vite + React</h1>
      <Library books={books}></Library>
      </div>
    </>
  )
}

export default App

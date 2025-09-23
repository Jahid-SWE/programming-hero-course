import { useState } from 'react'
import './App.css'
import ToDo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import Library from './Library'

function App() {

  // const actors=['Sakib', 'Bappa Mojumder', 'Rajjak', 'Abul Khair', 'AHakim', 'micale']
  const singer=[
  { id:1, name:'Bappa mojumdar', age:50},
  { id:2, name:'Asif', age:20},
  { id:3, name:'Roni', age:26},
  { id:4, name:'Anik', age:30}
  ]

  const books=[
    {id:1, name:'Physics', price:500},
    {id:2, name:'Bangla', price:54},
    {id:3, name:'English', price:300},
    {id:4, name:'Hindi', price:100},
    {id:5, name:'Pakistani', price:35}
  ]
  return (
    <>
      <div>
      
        
        <h1>React Core Concept </h1>
        <ToDo task='Learn js' isDone={true}></ToDo>
        <ToDo task='Learn java' isDone={false}></ToDo>
        <ToDo task='Learn C++' isDone={true}></ToDo>

      {/* <Devise name="Laptop" brand="HP" price='5000'></Devise>
      <Devise name="Macq" brand="Apple" price='100000'></Devise>
      <Devise name="Dell" brand="HP" price='64855'></Devise>
      <Library books={books}></Library>
      <Riksha name='Rohim' age='25' rent='50'></Riksha>
      <Riksha name='kamla' age='30' rent='80'></Riksha> */}

      {/* {
        actors.map(actor=><Actor  actor={actor}></Actor>)
      } */}
      {/* {
        singer.map(singer=><Singer key={singer.id} singer={singer}></Singer>)
      } */}

      {/* <ToDo task="Learning React" isDone='true'></ToDo>
      <ToDo task="Revise js" isDone='false'></ToDo>
      <ToDo task="Go to sleep" isDone='true'></ToDo> */}



        {/* <h1>Vite + React</h1>
        <Person></Person>
        <Person></Person>
        <Student></Student>
        <Developer name='Hasnat' title='js'></Developer>
        <Developer name='kamal' ></Developer>
        <Player name='Tamim' runs='5000'></Player>
        <Player name='Musfiq' ></Player>

        */}
      
      </div>
    
    </>
  )
}

const Riksha=({name, age, rent})=>{
  return(
    <div className='riksha'>
      <h4>Name : {name}</h4>
      <h4>Age : {age}</h4>
      <h4>Rent : {rent}</h4>
    </div>
  )
}
const Devise=(props)=>{
  return(
    <div className='devise'>
      <h4>Devise name: {props.name} </h4>
      <h4>brand :{props.brand}</h4>
      <h4>price {props.price}</h4>
    </div>
  )
}


function Player({name, runs=1000}){
  return(
    <div className='student'>
      <h3>Player Name {name}</h3>
      <h3>Player Runs {runs} </h3>
    </div>
  )
}


function Person(props){
  // const age=20
  return(
    <div className='student'>{/* 1. App.css file created and crate a class for css and here call className student*/}
      <h4>Depert : </h4>
      <h4 className='para'>
        Name: 
      </h4>
    </div>
  )
}


function Student(){
  const studentStyle={
    color:'green',
    backgroundColor:"blue",
    borderRadius:'20px'
  }
  return(
    <div style={studentStyle}> {/* 2. variable declaring object  style css */}
      <p>S-Name</p>
      <p>Subject</p>
    </div>
  )
}

function Developer({name, title='java'}){
  return( 
    <div style={{                  
      border:'2px solid pink',
      borderRadius:'20px'
  
    }}>     {/* 3. variable declaring  strategies   style css */}
      <h3> Developer Name : {name} </h3>
      <h3> Developer Title : {title} </h3>
    </div>
  )
}


export default App




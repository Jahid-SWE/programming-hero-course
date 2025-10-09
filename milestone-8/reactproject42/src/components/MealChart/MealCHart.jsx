import React from 'react'
import { LineChart, Line, Tooltip, XAxis, YAxis } from 'recharts'

const person=[
  {
    "person_id": "P006",
    "name": "Sarah Wilson",
    "age": 19,
    "date_of_birth": "2006-02-14",
    "gender": "Female"
  },
  {
    "person_id": "P007",
    "name": "David Kim",
    "age": 23,
    "date_of_birth": "2002-09-25",
    "gender": "Male"
  },
  {
    "person_id": "P008",
    "name": "Lisa Patel",
    "age": 21,
    "date_of_birth": "2004-06-08",
    "gender": "Female"
  },
  {
    "person_id": "P009",
    "name": "Thomas Clark",
    "age": 20,
    "date_of_birth": "2005-11-30",
    "gender": "Male"
  },
  {
    "person_id": "P010",
    "name": "Anna Garcia",
    "age": 22,
    "date_of_birth": "2003-04-22",
    "gender": "Female"
  }
]
const MealCHart = () => {


  return (
    <div>
        <LineChart width={800} height={500} data={person}>
            <XAxis dataKey={"name"}></XAxis>
            <YAxis dataKey={"age"}></YAxis>
            <Tooltip></Tooltip>
            <Line dataKey={'age'} stroke='green'></Line>
            <Line dataKey={'name'} stroke='red'></Line>
            <Line dataKey={'person_id'} stroke='blue'></Line>
        </LineChart>
    </div>
  )
}

export default MealCHart
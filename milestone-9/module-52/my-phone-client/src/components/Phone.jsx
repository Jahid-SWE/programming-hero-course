import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Phone = () => {
    const phone= useLoaderData()
    console.log(phone)
  return (
    <div>
        <h1>Name : {phone.name}</h1>
        <img src={phone.image} alt="imag" />
    </div>
  )
}

export default Phone
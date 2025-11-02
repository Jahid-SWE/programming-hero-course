import React from 'react'
import { useLoaderData } from 'react-router'

const Phone = () => {
    const phone= useLoaderData()
    console.log(phone)
  return (
    <div>
        <h4>phone Name: {phone.name}</h4>
        <img src={phone.image} alt="" />

    </div>
  )
}

export default Phone
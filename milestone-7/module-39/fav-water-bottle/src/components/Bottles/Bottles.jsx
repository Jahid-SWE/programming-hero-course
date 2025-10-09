import React, { useState } from 'react'
import { use } from 'react'
import Bottle from '../Bottle/Bottle'
import './Bottles.css'

const Bottles = ({bottlesPromise}) => {
    const [cart, setCart]=useState([])
    const bottles = use(bottlesPromise)
    // console.log(bottles)

    const handlerAddToCart=(bottle)=>{
      // console.log('Add To cart button clicked',bottle)
      const newCart = [...cart, bottle]
      setCart(newCart)
    }
  return (
    <div >
        <h3>Bottles : {bottles.length}</h3>
        <h3>Added To Cart {cart.length}</h3>
        <div className='bottles-section'>
        {
            bottles.map(bottle=><Bottle 
                key={bottle.id} 
                bottle={bottle}
                handlerAddToCart={()=>handlerAddToCart(bottle)}
                ></Bottle>)
        }

        </div>
    </div>
  )
}

export default Bottles
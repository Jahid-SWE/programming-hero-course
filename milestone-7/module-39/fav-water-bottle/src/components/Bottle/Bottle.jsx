import React from 'react'
import './bottle.css'

const Bottle = ({bottle, handlerAddToCart}) => {
    // const {img}=bottle;
    const {name, img, price, stock}=bottle
    // console.log(bottle)
  return (
    <div className='card bottle'>
         <img src={img} alt="" />
         <h4>Product name :{name}</h4>
         <h4>Product Price :{price}</h4>
         <h4>Stock : {stock}</h4>
         <button onClick={handlerAddToCart}>Buy Now</button>
    </div>
  )
}

export default Bottle
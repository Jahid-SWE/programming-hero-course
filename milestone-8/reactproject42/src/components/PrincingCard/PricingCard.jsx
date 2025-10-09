import React from 'react'
import Feature from './Feature'

const PricingCard = ({pricing}) => {
    // console.log(pricing);
    const {name, price, description, features}=pricing;
  return (
    <>
    <div className='flex flex-col border-2  bg-cyan-500  rounded-2xl p-4'>
        {/* card Header */}
        <div >
          <h1 className='text-7xl'>{name}</h1>
          <h2 className='text-4xl'>{price}</h2>
        </div>
        {/* class body */}
        <div className='bg-fuchsia-300 p-4 rounded-2xl mt-10 flex-1'>
          <p className='py-5'>{description}</p>
          {
           features.map((feature,index)=><Feature  key={index} feature={feature}></Feature>)
          }
        </div>
        <button className="btn w-full rounded-4xl mt-5">Default</button>
    </div>
  
    
    </>
    
  )
}

export default PricingCard
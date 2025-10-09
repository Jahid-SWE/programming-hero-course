import React, { use } from 'react'
import PricingCard from '../PrincingCard/PricingCard'
import DaisyPricingCard from '../DaisyPricingCard/DaisyPricingCard'

const PricingOptions = ({pricingPromise}) => {
    // console.log(pricingPromise)
    const pricingData = use(pricingPromise)
  return (
    <div>
        <h2 className='text-2xl'>Get Our Membership</h2>
        <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-8 '>
            {/* {
                pricingData.map(pricing=><PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
            } */}
            {
              pricingData.map((pricing, index)=><DaisyPricingCard key={index} pricing={pricing}></DaisyPricingCard>)
            }
        </div>
    </div>
  )
}

export default PricingOptions
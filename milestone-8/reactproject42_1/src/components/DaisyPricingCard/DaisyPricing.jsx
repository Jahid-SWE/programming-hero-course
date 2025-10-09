import React, { use } from 'react'
import DaisyPriceingCard from './DaisyPriceingCard'

const DaisyPricing = ({pricingPromice}) => {
    // console.log(pricingPromice)
    const pricingData= use(pricingPromice)
    
    return (
        <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-3'>

            {
                pricingData.map(pricing=> <DaisyPriceingCard key={pricing.id} pricing={pricing}></DaisyPriceingCard>)
            }
        </div>
    )
}

export default DaisyPricing
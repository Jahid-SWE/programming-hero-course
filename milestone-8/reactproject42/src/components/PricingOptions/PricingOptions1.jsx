import React, { use } from 'react'
import PricingCard from '../PrincingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {
    console.log(pricingPromise)
    const pricingData=use(pricingPromise);
  return (
    <div>
        {
            pricingData.map(pricing=> <PricingCard key={pricing.id} pricing={pricing}></PricingCard> )
        }
    </div>
  )
}

export default PricingOptions
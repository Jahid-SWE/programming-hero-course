import { Suspense } from 'react'
import './App.css'
import DaisyPricing from './components/DaisyPricingCard/DaisyPricing'

const pricingPromice = fetch('/PricingData.json').then(res=>res.json())
function App() {


  return (
    <>
      <Suspense fallback={<span className="loading loading-spinner text-success"></span>}>
      <div className=''>
        <DaisyPricing pricingPromice={pricingPromice}></DaisyPricing>
      </div>
      </Suspense>

    </>
  )
}

export default App

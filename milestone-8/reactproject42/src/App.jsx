import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PricingOptions1 from './components/PricingOptions/PricingOptions1'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultChart from './components/ResultChart/ResultChart'
import MealCHart from './components/MealChart/MealCHart'
import axios from 'axios'
import MarksChart from './components/MarksChart/MarksChart'

// const pricingPromise= fetch('PricingData.json').then(res=>res.json())
const pricingPromise = fetch('PricingData.json').then(res=>res.json())

const marksPromise =axios.get('marksData.json')
function App() {


  return (
    <>
      <Navbar></Navbar>
      {/* <Suspense fallback={<span className="loading loading-spinner text-success"></span>} >
          <PricingOptions1 pricingPromise={pricingPromise}></PricingOptions1>
      </Suspense> */}
    <Suspense fallback={<span className="loading loading-spinner text-warning"></span>}>
      <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
    </Suspense> 
    <Suspense fallback={<span className="loading loading-spinner text-warning"></span>}>
    <MarksChart marksPromise={marksPromise}></MarksChart>
    </Suspense>

    <ResultChart></ResultChart>
    <MealCHart></MealCHart>
    </>
  )
}

export default App

'use client'

import { useState } from "react"
import CardsForm from "./CardsForm"

const CardsFree = () => {
  const [calculate, serCalculate] = useState(false)
  const [estimate, setEstimate] = useState({average:'',percentage:'',cards:'',months:''})


  const handleChange = (e) =>{
    setEstimate({...estimate , [e.target.name]:e.target.value})
  }  

  const handleClick = (e)=>{
    e.preventDefault()

    if( 
      estimate.average.length == 0 || 
      estimate.percentage.length == 0 || 
      estimate.cards.length == 0 || 
      estimate.months.length == 0 
      ){
        alert('Complete all the fields')
      }else if ( estimate.percentage < 0 || estimate.percentage>100 ) {
        alert('Percentage must be between 1 - 100');
      }  else {
        serCalculate(true)
      }
      
      
      // localStorage.setItem('data', JSON.stringify(data));
      // router.push('/funnel/spin');


  }
  
  return (
    <div className="flex flex-col justify-center items-center pt-3">

      <form id="formulario" className="flex flex-col px-4 pb-8 mx-5 bg-white rounded-lg shadow-md relative">

        {/* <p id="close" className=" absolute top-0 right-0">X</p> */}
        <p className='fontAlternative' style={{padding: "0.5rem 0 0.2rem 0"}}>How many referral marketing cards do you need for your business?</p>
        <p className='fontSubTitle' style={{padding: "0 0 0.2rem 0"}}>Input the information an estimate how many do you need:</p>


        {/* <label for="Average of customers per month" className="fontForm mb-1">
          Average No. of customers per month*
        </label>          */}
        <input
          type="number"
          name="average"
          onChange={handleChange}
          required
          placeholder="Average No. of customers per month"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput "
        />


        {/* <label for="Percentage of customers going to give the card to" className="fontForm mb-1">
          Percentage of customers going to give the cards to*
        </label>    */}
        <div className="flex justify-between items-center mb-4 rounded-lg border border-gray-300 focusInput">
            <input
            type="number"
            required
            className="w-full py-2 pl-4 pr-4 rounded-lg focusInput"
            placeholder="% of customers going to give the cards to"
            name="percentage"
            onChange={handleChange}
            min={1}
            max={100}
            // style={{borderRight: "0"}}
            />
            <div className="text-center text-2xl">%</div>
        </div>

        <label htmlFor="Card to each customer (2 or 3 cards per happy customer recommended)" className="fontForm mb-1" style={{fontSize: "12px"}}>
          (Give 2 or 3 cards per happy customer recommended)
        </label>   
        <input
          type="number"
          required
          name="cards"
          onChange={handleChange}
          placeholder="Cards to each customer "
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
        />

        {/* <label for="Number of months supply required" className="fontForm mb-1">
          Number of months supply required*
        </label>   */}
        <input
          type="number"
          required
          name="months"
          onChange={handleChange}
          placeholder="Number of months supply required"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
        />
        <div className="flex justify-center items-center">
          <p className=" fontAlternative" style={{paddingTop: "0"}}>{`Estimated: ${ Math.round((estimate.average * (estimate.percentage/100) * estimate.cards * estimate.months))}`}</p>
        </div>
        <button
          type="submit"
          className="px-4 py-2 buttonsMain"
          onClick={handleClick}
        >
          Calculate Total
        </button>
      </form>

      <span className="w-full  h-1 block"></span> 

      {calculate && <CardsForm estimate={Math.round((estimate.average * (estimate.percentage/100) * estimate.cards * estimate.months))}/>}



    </div>
  )
}

export default CardsFree
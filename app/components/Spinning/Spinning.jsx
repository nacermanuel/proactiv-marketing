'use client'
import React, { useEffect, useState } from 'react'
import './Spinning.css'


export const Spinning = () => {
  const [deg, setDeg] = useState(0)
  const [calc, setCalc] =useState(0)
  const [prize, setPrize] = useState('')

  const handleSpin = () => {
    setDeg(Math.ceil(Math.random() * 100000))
  }

  useEffect(()=>{
    setCalc(deg%360)
  },[deg])

  useEffect(()=>{

    if (calc >= 0 && calc <= 29) {
      setPrize("3 months FREE");
    } else if (calc >= 30 && calc <= 89) {
      setPrize("12 months FREE");
    } else if (calc >= 90 && calc <= 149) {
      setPrize("9 months FREE");
    } else if (calc >= 150 && calc <= 209) {
      setPrize("6 months FREE + 6 months half price");
    } else if (calc >= 210 && calc <= 269) {
      setPrize("6 months FREE");
    } else if (calc >= 270 && calc <= 329) {
      setPrize("3 months FREE + 3 months half price");
    } else if (calc >= 330 && calc <= 359) {
      setPrize("3 months FREE");
    }
    
    
  },[calc])

  return (

    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      {/* <p className="fontTitle">Spin The Wheel</p> */}
      {/* <p className="fontSubTitle whitespace-nowrap">To See How Many Free Months Use You Get</p>          */}
      <p className="fontTitle">Spin The Wheel To See How Many Free Months Use You Get To Go With Your 100 FREE Plastic Referral Marketing Cards (value £53)</p>         
      
      <div id='containerSpinner' className='h-auto w-[95%] flex flex-col justify-center items-center'>
        <p>test: {prize}</p>
        <div className='flex justify-center items-center my-7 px-2 transform scale-100'>
          <div class="containerCSS" style={{transform: `rotate(${deg}deg)`}}>
          {/* <div class={`containerCSS rotate-[${deg}deg]`}> */}
            <div class="containerDIV containerONE"><div className='text-center w-[42px] h-[115px]'> 3 Months <p className='inline w-fit pt-3'>FREE</p></div></div>
            <div class="containerDIV containerTWO"><div className='text-center w-[42px] h-[115px]'> 3M FREE + 3M <p className='text-sm inline'>1/2</p> price </div></div>
            <div class="containerDIV containerTHREE"><div className='text-center w-[42px] h-[115px]'>6 Months <p className='inline w-fit pt-3'>FREE</p> </div></div>
            <div class="containerDIV containerFOUR"><div className='text-center w-[42px] h-[115px]'>6M FREE + 6M <p className='text-sm inline'>1/2</p>  price</div></div>
            <div class="containerDIV containerFIVE"><div className='text-center w-[42px] h-[115px]'>9 Months <p className='inline w-fit pt-3'>FREE</p></div></div>
            <div class="containerDIV containerSIX"><div className='text-center w-[42px] h-[115px]'>12 Months <p className='inline w-fit pt-4'>FREE</p></div></div>
          </div>
          <span class="mid"></span>
          <div class="stoper"></div>
        </div>    
      </div>
      <button className='px-6 py-2 bg-[#a52a2a] text-lg text-white rounded-lg' onClick={handleSpin} >Spin!</button>

      <div id='software components' className='flex flex-col justify-center items-center w-[90%] rounded-lg shadow-lg pb-2 mb-3'>
        <p className="mt-5 mb-3 colorThird">Sofware Components</p>
        <ul className="fontGeneral">
          <li className=" flex justify-around items-center h-[65px]">
            <div className='border w-[50%] h-[100%] flex justify-center items-center'>
              <p className='fontGeneral text-center' style={{textAlign: 'center'}}>1.- Database</p>
            </div>
            <div className='border w-[50%] h-[100%] flex justify-center items-center'>
              <p className='fontGeneral' style={{textAlign: 'center'}}>2.- Referral Marketing &#40;NEW
          Customers&#41;</p>
            </div>
          </li>

          <li className=" flex justify-around items-center h-[75px]">
            <div className='border w-[50%] h-[100%] flex justify-center items-center'>
              <p className='fontGeneral text-center' style={{textAlign: 'center'}}>3.-Gift Cards &#40;Improve Cashflow&#41;</p>
            </div>
            <div className='border w-[50%] h-[100%] flex justify-center items-center'>
              <p className='fontGeneral' style={{textAlign: 'center'}}>4.- Loyalty / Incentives &#40;Increase revenue & Profits&#41;</p>
            </div>
          </li>

          <li className=" flex justify-around items-center h-[60px]">
            <div className='border w-[50%] h-[100%] flex justify-center items-center'>
              <p className='fontGeneral text-center' style={{textAlign: 'center'}}>5.- Digital Diary</p>
            </div>
            <div className='border w-[50%] h-[100%] flex justify-center items-center'>
              <p className='fontGeneral' style={{textAlign: 'center'}}>6.- Stock Control</p>
            </div>
          </li>


          <li className=" flex justify-around items-center h-[60px]">
            <div className='border w-[50%] h-[100%] flex justify-center items-center'>
              <p className='fontGeneral text-center' style={{textAlign: 'center'}}>7.- Invoicing</p>
            </div>
            <div className='border w-[50%] h-[100%] flex justify-center items-center'>
              <p className='fontGeneral' style={{textAlign: 'center'}}>8.- Email & Text Marketing</p>
            </div>
          </li>

        </ul>
      </div>




    </div>

  )
}

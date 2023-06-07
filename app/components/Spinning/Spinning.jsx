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
      <p className="fontTitle">Spinning Wheel</p>
      <div id='containerSpinner' className='h-auto w-[95%] flex flex-col justify-center items-center'>
        <p>{prize}</p>
        <div className='flex justify-center items-center my-7 px-2 transform scale-100'>
          <div class="containerCSS" style={{transform: `rotate(${deg}deg)`}}>
            <div class="containerDIV containerONE text-center w-[42px] h-[115px]">3 months FREE</div>
            <div class="containerDIV containerTWO text-center w-[42px] h-[115px]"> 3M free + 3M <p className='text-sm inline'>1/2</p> price </div>
            <div class="containerDIV containerTHREE text-center w-[42px] h-[115px]">6 months FREE</div>
            <div class="containerDIV containerFOUR text-center w-[42px] h-[115px]">6M free + 6M <p className='text-sm inline'>1/2</p>  price</div>
            <div class="containerDIV containerFIVE text-center w-[42px] h-[115px]">9 months FREE</div>
            <div class="containerDIV containerSIX text-center w-[42px] h-[115px]">12 months FREE</div>
          </div>
          <span class="mid"></span>
          <div class="stoper"></div>
        </div>    
      </div>
      <button className='px-6 py-2 bg-[#a52a2a] text-lg text-white rounded-lg' onClick={handleSpin} >Spin!</button>

    </div>

  )
}

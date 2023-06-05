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
    <div id='containerSpinner' className='h-auto w-full bg-slate-200 flex flex-col justify-center items-center'>
      <p>{prize}</p>
      <div className='flex justify-center max-w-[95%] items-center my-7 px-2'>
        <div class="containerCSS" style={{transform: `rotate(${deg}deg)`}}>
          <div class="containerDIV containerONE">3 months<br/>FREE</div>
          <div class="containerDIV containerTWO">3 mos. free<br/>+ 3 mos. half<br/>price</div>
          <div class="containerDIV containerTHREE">6 months<br/>FREE</div>
          <div class="containerDIV containerFOUR">6 mos. free<br/>+ 6 mos. half<br/>price</div>
          <div class="containerDIV containerFIVE">9 months<br/>FREE</div>
          <div class="containerDIV containerSIX">12 months<br/>FREE</div>
        </div>
        <span class="mid"></span>
        <div class="stoper"></div>
      </div>    
      <button id="spin" onClick={handleSpin}>Spin</button>
    </div>


  )
}

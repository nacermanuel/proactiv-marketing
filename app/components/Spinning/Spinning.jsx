'use client'
import React, { useEffect, useState } from 'react'
import './Spinning.css'


export const Spinning = ({setCongrats,setResult}) => {
  const [deg, setDeg] = useState(0)
  const [calc, setCalc] =useState(0)
  const [prize, setPrize] = useState({description:'',number:0,valued:0,days:0,date:''})
  const [clicked, setClicked] = useState(false)

  const handleSpin = () => {
    setDeg(Math.ceil(Math.random() * 100000))
    setClicked(true)

    setTimeout(()=>{
       setCongrats(false)
    },8000)  
  }

  useEffect(()=>{
    setResult(prize)

  },[prize])


  useEffect(()=>{
    setCalc(deg%360)
  },[deg])

  useEffect(()=>{

    const currentDate = new Date();
    const futureDate  = new Date();

    

    if (calc >= 0 && calc <= 29) {
      futureDate.setDate(currentDate.getDate() + 90);
      const futureMonth = futureDate.getMonth() + 1; // Add 1 because months are zero-based (0-11)
      const futureDay = futureDate.getDate();
      const futureYear = futureDate.getFullYear();    
      const dateUntil = `${futureDay}-${futureMonth}-${futureYear}`  
      setPrize({description:"3 months FREE",number:1, valued:179.97,days:90, date:dateUntil});
    } else if (calc >= 30 && calc <= 89) {
      futureDate.setDate(currentDate.getDate() + 360);
      const futureMonth = futureDate.getMonth() + 1; // Add 1 because months are zero-based (0-11)
      const futureDay = futureDate.getDate();
      const futureYear = futureDate.getFullYear();    
      const dateUntil = `${futureDay}-${futureMonth}-${futureYear}`  
      setPrize( {description:"12 months FREE",number:2, valued:719.88,days:360, date:dateUntil});
    } else if (calc >= 90 && calc <= 149) {
      futureDate.setDate(currentDate.getDate() + 270);
      const futureMonth = futureDate.getMonth() + 1; // Add 1 because months are zero-based (0-11)
      const futureDay = futureDate.getDate();
      const futureYear = futureDate.getFullYear();    
      const dateUntil = `${futureDay}-${futureMonth}-${futureYear}`  
      setPrize( {description:"9 months FREE",number:3, valued:539.91,days:270, date:dateUntil});
    } else if (calc >= 150 && calc <= 209) {
      futureDate.setDate(currentDate.getDate() + 180);
      const futureMonth = futureDate.getMonth() + 1; // Add 1 because months are zero-based (0-11)
      const futureDay = futureDate.getDate();
      const futureYear = futureDate.getFullYear();    
      const dateUntil = `${futureDay}-${futureMonth}-${futureYear}`  
      setPrize({description:"6 months FREE + 6 months half price",number:4, valued:539.91,days:180, date:dateUntil});
    } else if (calc >= 210 && calc <= 269) {
      futureDate.setDate(currentDate.getDate() + 180);
      const futureMonth = futureDate.getMonth() + 1; // Add 1 because months are zero-based (0-11)
      const futureDay = futureDate.getDate();
      const futureYear = futureDate.getFullYear();    
      const dateUntil = `${futureDay}-${futureMonth}-${futureYear}`  
      setPrize( {description:"6 months FREE",number:5, valued:359.94,days:180, date:dateUntil});
    } else if (calc >= 270 && calc <= 329) {
      futureDate.setDate(currentDate.getDate() + 90);
      const futureMonth = futureDate.getMonth() + 1; // Add 1 because months are zero-based (0-11)
      const futureDay = futureDate.getDate();
      const futureYear = futureDate.getFullYear();    
      const dateUntil = `${futureDay}-${futureMonth}-${futureYear}`        
      setPrize( {description:"3 months FREE + 3 months half price",number:6, valued:269.96,days:90, date:dateUntil});
    } else if (calc >= 330 && calc <= 359) {
      futureDate.setDate(currentDate.getDate() + 90);
      const futureMonth = futureDate.getMonth() + 1; // Add 1 because months are zero-based (0-11)
      const futureDay = futureDate.getDate();
      const futureYear = futureDate.getFullYear();    
      const dateUntil = `${futureDay}-${futureMonth}-${futureYear}`  
      setPrize( {description:"3 months FREE",number:1, valued:179.97,days:90, date:dateUntil});
    }
    
    
  },[calc])

  return (

    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      {/* <p className="fontTitle">Spin The Wheel</p> */}
      {/* <p className="fontSubTitle whitespace-nowrap">To See How Many Free Months Use You Get</p>          */}
      <p className="fontTitle" style={{color: "#f6513ba9"}}> <span className='block'>Spin The Wheel</span>To See How Many Free Months Use You Get To Go With Your <span className='font-bold text-[#ff0000]'>100 FREE</span>  Plastic Referral Marketing Cards (value £53)</p>         
      
      <div id='containerSpinner' className='h-auto w-[95%] flex flex-col justify-center items-center'>
        {/* <p>test: {prize}</p> */}
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

      {
        !clicked ?
        <button className='px-6 py-2 bg-[#a52a2a] text-lg text-white rounded-lg' onClick={handleSpin} >Spin!</button>
        :
        <button className='px-6 py-2 bg-[#a52a2a] text-lg text-white rounded-lg opacity-50' disabled >Spin!</button>
      }

      <div id='software components' className='flex flex-col justify-center items-center w-[90%] rounded-lg shadow-lg pb-2 mb-3'>
        <p className="mt-5 mb-3 colorThird">Software Components</p>
        <ul className="fontGeneral">
          <li className=" flex justify-around items-center h-[65px]">
            <div className='border w-[50%] h-[100%] flex justify-center items-center'>
              <p className='fontGeneral text-center' style={{textAlign: 'center'}}>1.- Database</p>
            </div>
            <div className='border w-[50%] h-[100%] flex justify-center items-center'>
              <p className='fontGeneral' style={{textAlign: 'center'}}>2.- Telephone / Email Marketing</p>
            </div>
          </li>

          <li className=" flex justify-around items-center h-[75px]">
            <div className='border w-[50%] h-[100%] flex justify-center items-center'>
              <p className='fontGeneral text-center' style={{textAlign: 'center'}}>3.- Referral Marketing</p>
            </div>
            <div className='border w-[50%] h-[100%] flex justify-center items-center'>
              <p className='fontGeneral' style={{textAlign: 'center'}}>4.- Gift Cards</p>
            </div>
          </li>

          <li className=" flex justify-around items-center h-[60px]">
            <div className='border w-[50%] h-[100%] flex justify-center items-center'>
              <p className='fontGeneral text-center' style={{textAlign: 'center'}}>5.- Loyalty / Incentive Marketing</p>
            </div>
            <div className='border w-[50%] h-[100%] flex justify-center items-center'>
              <p className='fontGeneral' style={{textAlign: 'center'}}>6.- Diary System</p>
            </div>
          </li>


          <li className=" flex justify-around items-center h-[60px]">
            <div className='border w-[50%] h-[100%] flex justify-center items-center'>
              <p className='fontGeneral text-center' style={{textAlign: 'center'}}>7.- Stock Control</p>
            </div>
            <div className='border w-[50%] h-[100%] flex justify-center items-center'>
              <p className='fontGeneral' style={{textAlign: 'center'}}>8.- Invoicing </p>
            </div>
          </li>

        </ul>
      </div>




    </div>

  )
}

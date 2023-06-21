'use client'
import React, { useEffect, useState } from 'react'

const KeyfobsPrice = () => {
    const [customers, setCustomers] = useState(0) 
    const [price, setPrice] = useState(0.39)


    useEffect(()=>{
        let averagecustomers = JSON.parse(localStorage.getItem('customers'));
        if(averagecustomers != ''){
            setCustomers( parseInt(averagecustomers))
        }
    },[])


    const handleChange = (e) =>{
        setCustomers(e.target.value)
    }


    useEffect(()=>{

        
      if((customers * 1) >= 1 && (customers * 1) <= 499 ){
        setPrice(0.39)
      }else if((customers * 1) >= 500 && (customers * 1) <= 999 ){
        setPrice(0.33)
      }else if((customers * 1) >= 1000 && (customers * 1) <= 2499 ){
        setPrice(0.30)
      }else if((customers * 1) >= 2500 && (customers * 1) <= 4999 ){
        setPrice(0.26)
      }else if((customers * 1) >= 5000 && (customers * 1) <= 9999 ){
        setPrice(0.24)
      }else if((customers * 1) >= 10000 ){
        setPrice(0.22)
      }

    },[customers])


    const handleClick = (e) =>{
        e.preventDefault()
    }


  return (

    <div className="flex flex-col mx-5 my-4 py-5 items-center bg-white rounded-lg shadow-md relative h-full">

      <p className="fontTitle text-center" style={{ fontWeight:'700', color:'#a52a2a' , padding: '5px 0 20px 0'}}>Keyfobs Prices</p>
      <table className="w-[90%] border rounded-lg">
        <thead>
          <tr className="border-b bg-[#7a94b3]">
            <th className="resize-text py-1 px-2 w-[37%] text-white" style={{fontWeight:'700'}}>Quantities</th>
            <th className="resize-text py-1 px-2 w-[30%] text-white" style={{fontWeight:'700'}}>Price per Card</th>
            <th className="resize-text py-1 px-2 w-[33%] text-white" style={{fontWeight:'700'}}>Quantity Discount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b bg-[#ffffff]">
            <td className="resize-text py-1 px-2">250-499</td>
            <td className="resize-text py-1 px-2">39p</td>
            <td className="resize-text py-1 px-2">0%</td>
          </tr>
          <tr className="border-b bg-[#96cfd1]">
            <td className="resize-text py-1 px-2">500–999</td>
            <td className="resize-text py-1 px-2">33p</td>
            <td className="resize-text py-1 px-2">15%</td>
          </tr>
          <tr className="border-b bg-[#ffffff]">
            <td className="resize-text py-1 px-2">1000-2499</td>
            <td className="resize-text py-1 px-2">30p</td>
            <td className="resize-text py-1 px-2">25%</td>
          </tr>
          <tr className="border-b bg-[#96cfd1]">
            <td className="resize-text py-1 px-2">2500-4999</td>
            <td className="resize-text py-1 px-2">26p</td>
            <td className="resize-text py-1 px-2">33%</td>
          </tr>
          <tr className="border-b bg-[#ffffff]">
            <td className="resize-text py-1 px-2">5000-9999</td>
            <td className="resize-text py-1 px-2">24p</td>
            <td className="resize-text py-1 px-2">40%</td>
          </tr>
          <tr className="border-b bg-[#96cfd1]">
            <td className="resize-text py-1 px-2">10000+</td>
            <td className="resize-text py-1 px-2">22p</td>
            <td className="resize-text py-1 px-2">45%</td>
          </tr>

        </tbody>
      </table>

    <div className='w-[90%] mt-4 flex flex-col justify-center items-center'>
        {/* <p style={{color:'#4a6bb6' , padding: "0 0 5px 0" , textAlign:'center', lineHeight: '1', fontSize:'0.8rem'}}>Average no. of customers per month:</p> */}

        
        <label htmlFor="Average no. of customers per month" className="fontForm mb-1 w-full text-left">
          Average no. of customers per month <br />(1 KF per customers)
        </label>      
        <input
            type="number"
            name="average"
            value={customers}
            required
            onChange={handleChange}
            placeholder="Average no. of customers per month"
            className="w-full px-2 py-2 mb-2 rounded-lg border border-gray-300 focusInput "
        />

        <label htmlFor="Total Price" className="fontForm mb-1 w-full text-left">
          Total price - EXTRA 50% discount today only
        </label>         
        <input
          value={`£${((price*(customers*1))*0.5).toFixed(2).replace(',', '.')}`}
          type="text"
          className="font-bold w-full px-2 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <button
          type="submit"
          className="px-4 py-2 buttonsMain mt-3"
          onClick={handleClick}
        >
          Place Order
        </button>   


    </div>



    </div>

  )
}

export default KeyfobsPrice
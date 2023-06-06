'use client'
import { useState } from "react"

const Comp03 = () => {
    const [freeCards, setFreeCards] = useState(100)
    const [aditionalCards, setAditionalCards] = useState(2100)
    const [price, setPrice] = useState(0.36)
    const [selectedOption, setSelectedOption] = useState(true);


  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen one">

      <div id="calculosOne" className="flex flex-col w-[90%] px-4 py-8 mx-5 bg-white rounded-lg shadow-md relative">

        <p className="fontForm">Number of free cards</p>
        <input
            disabled
            value={freeCards}
          type="number"
          placeholder="Please input number"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <p className="fontForm">Additionl number of cards</p>
        <input
            disabled
            value={aditionalCards}
          type="number"
          placeholder="Please input number"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <p className="fontForm">Total Number of Cards</p>
        <input
            disabled
            value={freeCards + aditionalCards}
          type="number"
          placeholder="Please input number"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <p className="fontForm">Card price (GBP)</p>
        <input
            disabled
            value={price * aditionalCards}
          type="number"
          placeholder="Please input number"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <p className="fontForm">Artwork/Design (GBP)</p>
        <input
            disabled
            value={37.5}
          type="number"
          placeholder="Please input number"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <p className="fontForm">Courier Delivery (GBP)</p>
        <input
            disabled
            value={14}
          type="number"
          placeholder="Please input number"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <p className="fontForm">Total Price (GBP)</p>
        <input
            disabled
            value={(price * aditionalCards) + 37.5 + 14}
          type="number"
          placeholder="Please input number"
          className="font-bold px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <p className="fontForm">Select a Payment Option</p>
        <div className="flex justify-evenly">
            <label><input type="radio" name="payment" checked onChange={()=>setSelectedOption(true)}  />Full payment</label> 
            <label><input type="radio" name="payment"  onChange={()=>setSelectedOption(false)} />Partial payment</label> 
        </div>
        <input
            
            value={(price * aditionalCards) + 37.5 + 14}
          type="number"
          placeholder="Please input number"
          className="font-bold px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>



    <div className="flex justify-center w-full items-center min-h-screen bg-gray-100">
      <form id="formulario" className="flex flex-col w-full px-4 py-8 mx-5 bg-white rounded-lg shadow-md relative">
        <p id="close" className=" absolute top-0 right-0">X</p>
        <p className="fontTitle">Please provide required information</p>
        <p className="fontForm">Your Name</p>
        <input
          type="text"
          placeholder="Your Name"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <p className="fontForm">Your Business Name</p>
        <input
          type="text"
          placeholder="Your Business Name"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <p className="fontForm">Industry</p>
        <input
          type="text"
          placeholder="Your Industry"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />        
        <p className="fontForm">Phone number</p>
        <input
          type="tel"
          placeholder="Your Contact Number"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <p className="fontForm">Email Address</p>
        <input
          type="email"
          placeholder="Your Email"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <p className="fontForm">Web site Address</p>
        <input
          type="url"
          placeholder="Web site Address"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <p className="fontForm">Address</p>
        <textarea
          type="url"
          placeholder="Provide your Address"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          rows={3}
        />
        <button
          type="submit"
          className="buttonsMain"
        >
          Place Order
        </button>
      </form>
    </div>




    </div>
  )
}

export default Comp03
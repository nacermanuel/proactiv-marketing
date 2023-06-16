'use client'
import { useState } from "react"
import Modal from 'react-modal';

const CardsForm = () => {
    const [freeCards, setFreeCards] = useState(100)
    const [aditionalCards, setAditionalCards] = useState(2100)
    const [price, setPrice] = useState(0.36)
    const [selectedOption, setSelectedOption] = useState(true);
    const [cardPrice] = useState(37.50)
    const [deliveryPrice] = useState(14.00)
    const [isModalOpen, setIsModalOpen] = useState(false);  


    const openModal = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };



  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">

      <div id="calculosOne" className="flex flex-col w-[90%] px-4 py-8 mx-5 bg-white rounded-lg shadow-md relative">

        <p className="fontTitle">100 FREE PLASTIC CARDS</p>

        <label for="Number of free cards" className="fontForm mb-1">
          Number of free cards
        </label>          
        <input
          disabled
          value={freeCards}
          type="number"
          placeholder="Please input number"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />


        <label for="Additionl number of cards" className="fontForm mb-1">
          Additionl number of cards
        </label>        
        <input
          disabled
          value={aditionalCards}
          type="number"
          placeholder="Please input number"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <label for="Total Number of Cards" className="fontForm mb-1">
          Total number of cards needed
        </label>        
        <input
          disabled
          value={freeCards + aditionalCards}
          type="number"
          placeholder="Please input number"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />



          <label for="Card price (GBP)" className="fontForm mb-1">
            Card price
          </label>          
        <div className="flex justify-between gap-2 items-center mb-4 "> 
          <input
            disabled
            value={ `£${(price * aditionalCards).toFixed(2).replace(',', '.')}`}
            type="text"
            placeholder="Please input number"
            className="w-[75%] py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button 
            id="cardPrices" 
            className="bg-[#96ade2] text-[#000000] py-2 w-[25%] rounded-lg border text-[12px] leading-[1]" 
            onClick={openModal}
            >
            See<br />prices
          </button>

          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Card Prices Modal"
          >
            {/* Place your modal content here */}
            <p className="absolute top-0 right-1" onClick={closeModal}>X</p>
            <div>
              varios contenidos
            </div>
          </Modal>


        </div>




        <label for="Artwork/Design (GBP)" className="fontForm mb-1">
          Artwork/Design
        </label>           
        <input
          disabled
          value={`£${cardPrice.toFixed(2).replace(',', '.')}`}
          type="text"
          placeholder="Please input number"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <label for="Courier Delivery (GBP)" className="fontForm mb-1">
          Courier delivery 
        </label>  
        <input
          disabled
          value={`£${deliveryPrice.toFixed(2).replace(',', '.')}`}
          type="text"
          placeholder="Please input number"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <label for="Total Price (GBP)" className="fontForm mb-1">
          Total price 
        </label>         
        <input
          disabled
          value={(price * aditionalCards) + 37.5 + 14}
          type="number"
          placeholder="Please input number"
          className="font-bold px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <label for="Select a Payment Option" className="fontForm mb-1">
          Select a payment option*
        </label>       
        <div className="flex justify-evenly">
            <label><input type="radio" name="payment" checked required onChange={()=>setSelectedOption(true)}  />Full payment</label> 
            <label><input type="radio" name="payment"  onChange={()=>setSelectedOption(false)} />Partial payment</label> 
        </div>
        <input 
          value={(price * aditionalCards) + 37.5 + 14}
          type="number"
          placeholder="Please input number"
          className="font-bold px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <p className="mb-4 text-xs">min GBP 50</p>
        <button
          type="submit"
          className="px-4 py-2 buttonsMain"
        >
          Place Order
        </button>        




        
      </div>




    {/* <div className="flex justify-center w-full items-center min-h-screen bg-gray-100">
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


    </div> */}




    </div>
  )
}

export default CardsForm
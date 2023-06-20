'use client'
import { useState } from "react"
import Modal from 'react-modal';
import PriceCards from "./PriceCards";

const CardsForm = ({estimate}) => {
    const [freeCards, setFreeCards] = useState(100)
    const [price, setPrice] = useState(0.36)
    const [selectedOption, setSelectedOption] = useState(true);
    const [cardPrice] = useState(37.50)
    const [deliveryPrice] = useState(14.00)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [addition, setAddition] = useState(estimate)  
    

    const openModal = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };

    const handleChange =(e)=>{
      setAddition(e.target.value)
    }



  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">

      <div id="calculosOne" className="flex flex-col w-[90%] px-4 py-8 mx-5 bg-white rounded-lg shadow-md relative">

        <p className="fontTitle text-center" style={{ fontWeight:'700', color:'#a52a2a' , padding: '5px 0 20px 0'}}>100 FREE PLASTIC CARDS</p>

        <label htmlFor="Number of free cards" className="fontForm mb-1">
          Number of free cards
        </label>          
        <input
          
          defaultValue={freeCards}
          type="number"
          placeholder="Please input number"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />


        <label htmlFor="Additionl number of cards" className="fontForm mb-1">
          Additional number of cards (adjust accordingly)
        </label>        
        <input
          
          value={addition}
          onChange={handleChange}
          type="number"
          placeholder="Please input number"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <label htmlFor="Total Number of Cards" className="fontForm mb-1">
          Total number of cards needed
        </label>        
        <input
          
          value={parseInt(freeCards) + parseInt(addition)}
          type="number"
          placeholder="Please input number"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />



          <label htmlFor="Card price (GBP)" className="fontForm mb-1">
            Cards price
          </label>          
        <div className="flex justify-between gap-2 items-center mb-4 "> 
          <input
            
            defaultValue={ `£${(price * parseInt(addition)).toFixed(2).replace(',', '.')}`}
            type="text"
            placeholder="Please input number"
            className="w-[75%] py-2 pl-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
            style={{
              overlay:{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',                                
              },
              content:{
                top: 'auto',
                left: 'auto',
                right: 'auto',
                bottom: 'auto',             
                backgroundColor: '#99acff9c',
                width: '90%',
                height: '600px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',                
              }
            }}
          >
            {/* Place your modal content here */}
            <p className="absolute top-0 right-1" onClick={closeModal}>X</p>
            <div className="flex flex-col justify-center items-center w-full h-full bg-[#99acff9c] rounded-lg shadow-md relative">
              <PriceCards/>
            </div>
          </Modal>


        </div>




        <label htmlFor="Artwork/Design (GBP)" className="fontForm mb-1">
          Artwork/Design
        </label>           
        <input
          
          defaultValue={`£${cardPrice.toFixed(2).replace(',', '.')}`}
          type="text"
          placeholder="Please input number"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <label htmlFor="Courier Delivery (GBP)" className="fontForm mb-1">
          Courier delivery 
        </label>  
        <input
          
          defaultValue={`£${deliveryPrice.toFixed(2).replace(',', '.')}`}
          type="text"
          placeholder="Please input number"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <label htmlFor="Total Price (GBP)" className="fontForm mb-1">
          Total price 
        </label>         
        <input
          
          value={`£${((price * parseInt(addition)) + 37.5 + 14).toFixed(2).replace(',', '.')}`}
          type="text"
          placeholder="Please input number"
          className="font-bold px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <label htmlFor="Select a Payment Option" className="fontForm mb-2">
          Select a payment option*
        </label>       
        <div className="flex justify-evenly">
            <label><input type="radio" name="payment" checked required onChange={()=>setSelectedOption(true)}  />Full Deposit</label> 
            <label><input type="radio" name="payment"  onChange={()=>setSelectedOption(false)} />Deposit<p className="mb-0 text-xs" style={{textAlign:'center'}}>min £50</p> </label> 
        </div>
        
        <input 
          value={`£${((price * addition) + 37.5 + 14).toFixed(2).replace(',', '.')}`}
          type="text"
          placeholder="Please input number"
          className="font-bold px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
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
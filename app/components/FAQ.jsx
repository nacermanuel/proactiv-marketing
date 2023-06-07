'use client'
import React, { useState } from 'react';

const FAQ = () => {

    const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };


  return (

    <div className="flex flex-col justify-center items-center  h-full w-[100vw]">



        <p className='fontTitle'>Frequently Asked Questions</p>


        <div id='FAQs' className='flex flex-col justify-center items-center gap-2 w-full mt-3'>

            {/* --------QUESTION START-------- */}
            <div className="w-[95%] border border-gray-300 rounded p-3 mb-4 ">
                <button
                    className="w-full flex justify-between items-center focus:outline-none pb-2"
                    onClick={handleToggle}
                >
                    <p style={{fontSize: "1.2rem", fontWeight: "400"}} className="fontTitle">
                    
                        What kind of customer data can I collect?
                    
                    </p>
                    <svg
                    className={`w-5 h-5 transition-transform duration-300 transform ${
                        isExpanded ? 'rotate-180' : ''
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    >
                    <path
                        fill="currentColor"
                        d="M16.5 9.5L12 14l-4.5-4.5L6 11l6 6 6-6z"
                    />
                    </svg>
                </button>
                {isExpanded && 
                    <p className="fontGeneral py-2 bg-white">
                    
                    When your customer registers their card with you, you can take as much or as little information as you see fit. We would recommend that you take as much as you can for potential future marketing opportunities – by email, text, telephone, etc. The software is fully GDPR compliant.
                    
                    </p>}
            </div>
            {/* --------QUESTION ENDS-------- */}


            {/* --------QUESTION START-------- */}
            <div className="w-[95%] border border-gray-300 rounded p-3 mb-4 ">
                <button
                    className="w-full flex justify-between items-center focus:outline-none pb-2"
                    onClick={handleToggle}
                >
                    <p style={{fontSize: "1.2rem", fontWeight: "400"}} className="fontTitle">
                    
                        What can I do with the customer data collected?
                    
                    </p>
                    <svg
                    className={`w-5 h-5 transition-transform duration-300 transform ${
                        isExpanded ? 'rotate-180' : ''
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    >
                    <path
                        fill="currentColor"
                        d="M16.5 9.5L12 14l-4.5-4.5L6 11l6 6 6-6z"
                    />
                    </svg>
                </button>
                {isExpanded && 
                    <p className="fontGeneral py-2 bg-white">

                        For starters, you can use the information you already have on your existing customers to target them with offers/deals/promotions, or simply a ‘hello, we’ve not seen you for a while…’ or ‘we see you last purchased xyz on (date) and wondered if you’d like us to reorder it for you’, or even a goodwill gesture such as ‘happy birthday’.
						Depending upon the depth of data you’ve collected when your customers sign up, our program will allow you to segment your data which is great for target marketing. You can see who your best customers are, who hasn’t been back in a while, what products are performing well and which ones aren’t making any sales. You can send customised, meaningful communications to your customers that are relevant to them.

                    </p>}
            </div>
            {/* --------QUESTION ENDS-------- */}




        </div>
 

    </div>

  )
}

export default FAQ


const ClaimGiftForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form id="formulario" className="flex flex-col px-4 py-8 mx-5 bg-white rounded-lg shadow-md relative">
        <p className="fontTitle">Claim your gift</p>
        
         <label for="Your Name" className="fontForm mb-1">
          Your Name*
        </label>       
        <input
          type="text"
          required
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
        />

         <label for="Your Business Name" className="fontForm mb-1">
          Your Business Name*
        </label> 
        <input
          type="text"
          required
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
        />

         <label for="Your Email" className="fontForm mb-1">
          Your Email*
        </label>         
        <input
          type="email"
          required
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
        />



        <label for="Your Contact Number" className="fontForm mb-1">
          Your Contact Number*
        </label>          
        <input
          type="tel"
          required
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
        />
        <button
          type="submit"
          className="px-4 py-2 buttonsMain"
        >
          Watch Video to Understand Benefits.
        </button>
      </form>
    </div>
  )
}

export default ClaimGiftForm
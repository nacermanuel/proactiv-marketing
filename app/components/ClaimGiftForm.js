

const ClaimGiftForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form id="formulario" className="flex flex-col px-4 py-8 mx-5 bg-white rounded-lg shadow-md relative">
        <p className="fontTitle">Free to 100 salon owners. Claim your gift today!</p>
        
         <label for="Name" className="fontForm mb-1">
          Full Name*
        </label>       
        <input
          type="text"
          required
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
        />

         <label for="Business Name" className="fontForm mb-1">
          Business Name*
        </label> 
        <input
          type="text"
          required
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
        />

         <label for="Email" className="fontForm mb-1">
          Email*
        </label>         
        <input
          type="email"
          required
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
        />



        <label for="Contact Number" className="fontForm mb-1">
          Contact Number*
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
          Click to claim your gift
        </button>
      </form>
    </div>
  )
}

export default ClaimGiftForm
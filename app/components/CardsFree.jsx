const CardsFree = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-3">

      <form id="formulario" className="flex flex-col px-4 pb-8 mx-5 bg-white rounded-lg shadow-md relative">

        {/* <p id="close" className=" absolute top-0 right-0">X</p> */}
        <p className='fontAlternative' style={{padding: "0.5rem 0 0.2rem 0"}}>How many referral marketing cards do you need for your business?</p>
        <p className='fontSubTitle' style={{padding: "0 0 0.2rem 0"}}>Input the information an estimate how many do you need:</p>


        {/* <label for="Average of customers per month" className="fontForm mb-1">
          Average No. of customers per month*
        </label>          */}
        <input
          type="number"
          name="average"
          required
          placeholder="Average No. of customers per month"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput "
        />


        {/* <label for="Percentage of customers going to give the card to" className="fontForm mb-1">
          Percentage of customers going to give the cards to*
        </label>    */}
        <div className="flex justify-between items-center mb-4 rounded-lg border border-gray-300 focusInput">
            <input
            type="number"
            required
            className="w-full py-2 pl-4 pr-4 rounded-lg focusInput"
            placeholder="% of customers going to give the cards to"
            name="percentage"
            min={1}
            max={100}
            // style={{borderRight: "0"}}
            />
            <div className="text-center text-2xl">%</div>
        </div>

        <label for="Card to each customer (2 or 3 cards per happy customer recommended)" className="fontForm mb-1" style={{fontSize: "12px"}}>
          (Give 2 or 3 cards per happy customer recommended)
        </label>   
        <input
          type="number"
          required
          name="cards"
          placeholder="Cards to each customer "
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
        />

        {/* <label for="Number of months supply required" className="fontForm mb-1">
          Number of months supply required*
        </label>   */}
        <input
          type="number"
          required
          name="months"
          placeholder="Number of months supply required"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
        />
        <button
          type="submit"
          className="px-4 py-2 buttonsMain"
        >
          Calculate
        </button>
      </form>
    </div>
  )
}

export default CardsFree
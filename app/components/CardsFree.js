const CardsFree = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">

      <form id="formulario" className="flex flex-col px-4 py-8 mx-5 bg-white rounded-lg shadow-md relative">

        <p id="close" className=" absolute top-0 right-0">X</p>
        <p className="fontTitle">100 FREE PLASTIC CARDS</p>



        <label for="Average of customers per month" className="fontForm mb-1">
          Average of customers per month*
        </label>         
        <input
          type="number"
          required
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
        />


        <label for="Percentage of customers going to give the card to" className="fontForm mb-1">
          Percentage of customers going to give the card to*
        </label>   
        <div className="flex justify-between px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput">
            <input
            type="number"
            required
            className="w-full"
            min={1}
            max={100}
            />
            <div type="submit">%</div>
        </div>

        <label for="Card to each customer (2 or 3 cards per happy customer recommended)" className="fontForm mb-1">
          Card to each customer (2 or 3 cards per happy customer recommended)*
        </label>   
        <input
          type="number"
          required
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
        />

        <label for="Number of months supply required" className="fontForm mb-1">
          Number of months supply required*
        </label>  
        <input
          type="number"
          required
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
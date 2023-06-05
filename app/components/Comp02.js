const Comp02 = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">

      <form id="formulario" className="flex flex-col px-4 py-8 mx-5 bg-white rounded-lg shadow-md relative">

        <p id="close" className=" absolute top-0 right-0">X</p>
        <p className="text-center text-lg">100 FREE PLASTIC CARDS</p>
        <p className="text-xs">Average of customers per month</p>
        <input
          type="number"
          placeholder="Please input number"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <p className="text-xs">Percentage of customers going to give the card to</p>
        <div className="flex justify-between px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <input
            type="number"
            placeholder="Please input a percentage"
            className="w-full"
            min={1}
            max={100}
            />
            <div type="submit">%</div>
        </div>
        <p className="text-xs">Card to each customer (2 or 3 cards per happy customer recommended)</p>
        <input
          type="number"
          placeholder="Please input number"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <p className="text-xs">Number of months supply required</p>
        <input
          type="number"
          placeholder="Please input number"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
        >
          Calculate
        </button>
      </form>
    </div>
  )
}

export default Comp02
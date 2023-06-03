

const Comp01 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="flex flex-col w-11/12 md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 py-8 bg-white rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Your Name"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Your Business Name"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          type="tel"
          placeholder="Your Contact Number"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
        >
          Watch Video to Understand Benefits.
        </button>
      </form>
    </div>
  )
}

export default Comp01
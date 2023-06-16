import React from 'react'

const PriceCards = () => {
  return (
    <div>


        <table className="table-auto mx-auto border-collapse border border-gray-300">
        <thead>
            <tr className="border-t">
            <th className="py-2 px-4 bg-[#8c9ba1b9]">Quantities</th>
            <th className="py-2 px-4 bg-[#8c9ba1b9]">Price</th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-b bg-[#72cbf1]">
            <td className="py-2 px-4">100 to 499</td>
            <td className="py-2 px-4">&pound;53</td>
            </tr>
            <tr className="border-b bg-[#b4e6fcc4]">
            <td className="py-2 px-4">500 to 999</td>
            <td className="py-2 px-4">&pound;45</td>
            </tr>
            <tr className="border-b bg-[#72cbf1]">
            <td className="py-2 px-4">1000 to 2499</td>
            <td className="py-2 px-4">&pound;40</td>
            </tr>
            <tr className="border-b bg-[#b4e6fcc4]">
            <td className="py-2 px-4">2500 to 4999</td>
            <td className="py-2 px-4">&pound;36</td>
            </tr>
            <tr className="border-b bg-[#72cbf1]">
            <td className="py-2 px-4">5000 to 9999</td>
            <td className="py-2 px-4">&pound;32</td>
            </tr>
            <tr className="border-b bg-[#b4e6fcc4]">
            <td className="py-2 px-4">10000+</td>
            <td className="py-2 px-4">&pound;30</td>
            </tr>
        </tbody>
        </table>




      {/* <table className="fontGeneral table-auto mx-auto">
        <thead>
          <tr className="border-t">
            <th className="py-1 px-2">Quantities</th>
            <th className="py-1 px-2">pcc</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b bg-neutral-200">
            <td className="py-1 px-2">100 to 499</td>
            <td className="py-1 px-2">&pound;53 </td>
          </tr>

          <tr className="border-b bg-neutral-200">
            <td className="py-1 px-2">500 to 999</td>
            <td className="py-1 px-2">&pound;45 </td>
          </tr>

          <tr className="border-b bg-neutral-">
            <td className="py-1 px-2">1000 to 2499</td>
            <td className="py-1 px-2">&pound;40 </td>
          </tr>

          <tr className="border-b bg-neutral-200">
            <td className="py-1 px-2">2500 to 4999</td>
            <td className="py-1 px-2">&pound;36 </td>
          </tr>

          <tr className="border-b bg-neutral-200">
            <td className="py-1 px-2">5000 to 9999</td>
            <td className="py-1 px-2">&pound;32 </td>
          </tr>

          <tr className="border-b bg-neutral-200">
            <td className="py-1 px-2">10000+</td>
            <td className="py-1 px-2">&pound;30 </td>
          </tr>

        </tbody>
      </table> */}

    </div>
  )
}

export default PriceCards
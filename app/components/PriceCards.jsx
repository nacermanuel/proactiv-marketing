import React from 'react'

const PriceCards = () => {
  return (
    <div>


      <p className="fontTitle text-center" style={{ fontWeight:'700', color:'#a52a2a' , padding: '5px 0 20px 0'}}>Card prices</p>
      <table className="w-full border rounded-lg">
        <thead>
          <tr className="border-b bg-[#7a94b3]">
            <th className="resize-text py-1 px-0 w-[50%] text-white" style={{fontWeight:'700'}}>Quantities</th>
            <th className="resize-text py-1 px-0 w-[50%] text-white" style={{fontWeight:'700'}}>Price</th>
            <th className="resize-text py-1 px-0 w-[50%] text-white" style={{fontWeight:'700'}}>Discount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b bg-[#ffffff]">
            <td className="resize-text py-1 px-0">Silver</td>
            <td className="resize-text py-1 px-0">Database + 1</td>
            <td className="resize-text py-1 px-0">Database + 1</td>
          </tr>
          <tr className="border-b bg-[#96cfd1]">
            <td className="resize-text py-1 px-0">Gold</td>
            <td className="resize-text py-1 px-0">Database + 3</td>
            <td className="resize-text py-1 px-0">Database + 1</td>
          </tr>
          <tr className="border-b bg-[#ffffff]">
            <td className="resize-text py-1 px-0">Diamond</td>
            <td className="resize-text py-1 px-0">All 8</td>
            <td className="resize-text py-1 px-0">Database + 1</td>
          </tr>
          <tr className="border-b bg-[#96cfd1]">
            <td className="resize-text py-1 px-0">Gold</td>
            <td className="resize-text py-1 px-0">Database + 3</td>
            <td className="resize-text py-1 px-0">Database + 1</td>
          </tr>
          <tr className="border-b bg-[#ffffff]">
            <td className="resize-text py-1 px-0">Diamond</td>
            <td className="resize-text py-1 px-0">All 8</td>
            <td className="resize-text py-1 px-0">Database + 1</td>
          </tr>
          <tr className="border-b bg-[#96cfd1]">
            <td className="resize-text py-1 px-0">Gold</td>
            <td className="resize-text py-1 px-0">Database + 3</td>
            <td className="resize-text py-1 px-0">Database + 1</td>
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
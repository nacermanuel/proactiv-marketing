import React from 'react'

const PriceCards = () => {
  return (
    <div>

      <table className="fontGeneral table-auto mx-auto">
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

          <tr className="border-b bg-neutral-200">
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
      </table>

    </div>
  )
}

export default PriceCards
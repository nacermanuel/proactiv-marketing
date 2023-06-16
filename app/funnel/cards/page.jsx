import React from 'react'
import CardsFree from '@/app/components/CardsFree'
import CardsForm from '@/app/components/CardsForm'
import RequiredInformation from '@/app/components/RequiredInformation'

const FunnelCards = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">   
        
        <CardsFree/>
        <span className="w-full  h-1 block"></span>    
        <CardsForm/>
   
          
      {/* <RequiredInformation/>        */}

    </div>
  )
}

export default FunnelCards
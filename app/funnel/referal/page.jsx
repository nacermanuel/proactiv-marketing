import React from 'react'
import ReferalMktText from '@/app/components/ReferalMktText'
import ReferalMktDiagram from '@/app/components/ReferalMktDiagram'
import Faqs from '@/app/components/Faqs'
import CardSamples from '@/app/components/CardSamples'
import CardsTestimonials from '@/app/components/CardsTestimonials'
import SoftwareForYou from '@/app/components/SoftwareForYou'
import ArtworkDelivery from '@/app/components/ArtworkDelivery.jsx'


const FunnelReferal = () => {
  return (
    <>
    
      <ReferalMktText />
      <span className="w-full bg-black h-1 block"></span>

      <ReferalMktDiagram />
      <span className="w-full bg-black h-1 block"></span>

      <Faqs/>
      <span className="w-full bg-black h-1 block"></span>

      <CardSamples/>
      <span className="w-full bg-black h-1 block"></span> 

      <CardsTestimonials/>
      <span className="w-full bg-black h-1 block"></span> 

      <SoftwareForYou/>
      <span className="w-full bg-black h-1 block"></span>     

      <ArtworkDelivery/>
      <span className="w-full bg-black h-1 block"></span>   

    </>

  )
}

export default FunnelReferal
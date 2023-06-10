import React from 'react'
import ReferalMktText from '@/app/components/ReferalMktText'
import ReferalMktDiagram from '@/app/components/ReferalMktDiagram'
import Faqs from '@/app/components/Faqs'
import CardSamples from '@/app/components/CardSamples'
import CardsTestimonials from '@/app/components/CardsTestimonials'
import SoftwareForYou from '@/app/components/SoftwareForYou'

const FunnelReferal = () => {
  return (
    <>
    
      <ReferalMktText />
      <span className="w-full bg-black h-1"></span>

      <ReferalMktDiagram />
      <span className="w-full bg-black h-1"></span>

      <Faqs/>
      <span className="w-full bg-black h-1"></span>

      <CardSamples/>
      <span className="w-full bg-black h-1"></span> 

      <CardsTestimonials/>
      <span className="w-full bg-black h-1"></span> 

      <SoftwareForYou/>
      <span className="w-full bg-black h-1"></span>     
    
    </>

  )
}

export default FunnelReferal
'use client'
import React, { useState } from 'react'


import Celebration from '@/app/components/Celebration'
import { Spinning } from '@/app/components/Spinning/Spinning'



const PageSpinning = () => {
  const [congrats, setCongrats] = useState(true)


  return (

    congrats ?

    <Spinning setCongrats={setCongrats}/>
    
    :

    <Celebration/>

  )
}

export default PageSpinning

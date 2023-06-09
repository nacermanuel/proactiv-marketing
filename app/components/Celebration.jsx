'use client'
import React, { useEffect, useState } from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const Celebration = () => {

    const [width , setWidth] =useState(0)
    const [height , setHeight] =useState(0)
    
    let { width1, height1 } = useWindowSize()
    
    useEffect(()=>{
        setWidth(width1)
        setHeight(height1)
    },[])

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#ccffee]">

        <p className='fontTitle'>Congratulations!</p>
        <img src="https://media.giphy.com/media/BrFuiMe3YUt3laSeEO/giphy.gif" alt="" />
        <p>we can replace the GIF by any in this web: <a href="https://giphy.com/" target="_blank">https://giphy.com/</a> </p>
        

        {   width == 'Infinity' || height == 'Infinity' ? null :
            <Confetti
                width={width}
                height={height}
                gravity={0.3}
                numberOfPieces={400}
            />
        }

    </div>
  )
}

export default Celebration


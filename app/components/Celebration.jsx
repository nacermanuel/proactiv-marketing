'use client'
import React, { useEffect, useState } from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { useRouter } from 'next/navigation';

const Celebration = () => {

    const [width , setWidth] =useState(0)
    const [height , setHeight] =useState(0)
    
    let { width1, height1 } = useWindowSize()
    
    useEffect(()=>{
        setWidth(width1)
        setHeight(height1)
    },[])

    const router = useRouter();
    const clickCongrat = () => {
        router.push('/funnel/software');
    }




  return (
    <div className="flex flex-col items-center min-h-screen bg-[#ccffee]" onClick={clickCongrat}>

        <p className='fontTitle'>
            Congratulations! You have won {`6 Months FREE`} software valued &#163;{`XX,XX`} to use for free up to --date- (our DIAMOND package) 
        </p>
        <img src="https://media.giphy.com/media/BrFuiMe3YUt3laSeEO/giphy.gif" alt="" />
        

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


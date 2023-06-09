'use client'
import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const Celebration = () => {
    const { width, height } = useWindowSize()
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">

        

        {   width == 'Infinity' || height == 'Infinity' ? null :
            <Confetti
                width={width}
                height={height}
            />
        }

    </div>
  )
}

export default Celebration


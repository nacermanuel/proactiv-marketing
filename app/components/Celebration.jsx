'use client'
import React, { useEffect, useState } from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { useRouter } from 'next/navigation';

const Celebration = ({result}) => {

    const [width , setWidth] =useState(0)
    const [height , setHeight] =useState(0)
    
    let { width1, height1 } = useWindowSize()
    
    useEffect(()=>{
        setWidth(width1)
        setHeight(height1)
    },[])

    const router = useRouter();
    const clickCongrat = () => {
        localStorage.setItem('software', JSON.stringify(result));
        router.push('/funnel/software');
    }


    useEffect(() => {
        const timer = setTimeout(() => {
        // Call your action here
        localStorage.setItem('software', JSON.stringify(result));
        router.push('/funnel/software');

        }, 5000);

        return () => clearTimeout(timer); // Clean up the timer on component unmount

    }, []);    


  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#331C8D] overflow-hidden" onClick={clickCongrat}>

        <p className='fontTitle absolute' style={{fontSize:"3rem" , color: 'white'}}>
            Congratulations! You have won {result.description} software valued &#163;{result.valued} to use for free up to {result.date} ! 
        </p>
        <img className='h-[100vh]' style={{ maxWidth: 'none'}} src="https://media.giphy.com/media/l4KhWPNyLHiB3TjVe/giphy.gif" alt="baloons" />
        {/* <img src="https://media.giphy.com/media/BrFuiMe3YUt3laSeEO/giphy.gif" alt="" /> */}
        

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


'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import ClaimGiftForm from '../components/ClaimGiftForm.jsx';

const Funnel = () => {
    const router = useRouter();

    const handleSubmit = (e) =>{
        e.preventDefault()
        router.push('/funnel/spin');
        
    }   

  return (

        <ClaimGiftForm handleSubmit={handleSubmit}/>

  )
}

export default Funnel
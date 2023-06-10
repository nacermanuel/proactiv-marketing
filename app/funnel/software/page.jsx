'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import SoftwareSubscription from '@/app/components/SoftwareSubscription'

const FunnelSoftware = () => {
    const router = useRouter();

    const handleSubmit = (e) =>{

        router.push('/funnel/referal');
        
    }  
  return (
    <SoftwareSubscription handleSubmit={handleSubmit}/>
  )
}

export default FunnelSoftware
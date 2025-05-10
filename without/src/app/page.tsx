'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const Home = () => {
  const router=useRouter()
  const handleFunc=()=>{
    router.push('/about')
    
  }
  return (
    <div className='flex justify-center items-center w-full h-screen border-[10px] border-white'>
      <h1 className='text-4xl text-red-600'>Home Page</h1>
      <button onClick={handleFunc} className='px-8 py-2 ml-4 rounded-full bg-gray-100 text-black'>Click Me</button>
    </div>
  )
}

export default Home

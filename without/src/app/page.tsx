'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Home = () => {
  const router=useRouter()
  const handleFunc=()=>{
    router.push('/about')
    
  }
  return (
    <div className='flex justify-center items-center w-full h-screen border-[10px] border-white'>
      {/*1st method of routing*/}
      <h1 className='text-4xl text-red-600'>Home Page</h1>
      <button onClick={handleFunc} className='px-8 py-2 ml-4 rounded-full bg-gray-100 text-black'>Click Me</button>
      {/* 2nd  Method of routing*/}
      <Link href={'/product'} className='px-6 py-2 rounded-full bg-red-400'>Product page</Link>
    </div>
  )
}

export default Home

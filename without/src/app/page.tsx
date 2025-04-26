'use client'
import React from 'react'
import Router from 'next/router'

const Home = () => {
  const handleFunc=()=>{
    Router.push('/about')
  }
  return (
    <div className='flex justify-center items-center w-full h-screen border-[10px] border-white'>
      <h1 className='text-4xl text-red-600'>Home Page</h1>
      <button onClick={handleFunc}>Click Me</button>
    </div>
  )
}

export default Home

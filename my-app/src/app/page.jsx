import Hero from '@/components/hero'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <h1>Technical Agency...</h1>
      <Link href={'/blog'}>Blog</Link>
      <Link href={'/about'}>About</Link>
 
    </div>
  )
}

export default Home

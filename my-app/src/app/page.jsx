import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='h-screen w-full'>
      <h1>Technical Agency...</h1>
      <div>
        <Link href={'/blog'}>Blog</Link><br />
      <Link href={'/about'}>About</Link>
      </div>
 
    </div>
  )
}

export default Home

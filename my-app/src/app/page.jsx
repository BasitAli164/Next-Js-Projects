import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo.png'

const Page = () => {
  return (
    <> 
    <header className='grid grid-cols-3 items-center border-white border-[4px]'>
      <div className='mt-1 ml-44'>
        <Image className='rounded-full' src={logo} alt={"log"} width={50}/>
      </div>
      <nav>
        <ul className='flex justify-center items-center gap-5'>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </nav>
      <div>
        <label htmlFor="serach">Search:</label>
        <input type="text" id="serach" className='rounded-lg mx-3 mt-1 '/>
      </div>
    </header>
   
    </>
  )
}

export default Page

import React from 'react'
import Link from 'next/link'

const Services = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-full bg-green-300'>
      <h2 className='font-bold text-black text-5xl'>Service Detail:</h2>
      <ul className='w-96 h-96 flex justify-center items-center gap-4 flex-col bg-gray-400 text-black rounded-md shadow-xl'>
        <Link className='px-10 py-3 rounded-full bg-red-300 hover:bg-amber-300 ]' href={"/services/basic"}>Html, Css and JavaScript</Link>
        <Link className='px-10 py-3 rounded-full bg-red-300 hover:bg-amber-300 ]' href={"/services/frontend"}>React , angular and Veu Js</Link>
        <Link className='px-10 py-3 rounded-full bg-red-300 hover:bg-amber-300 ]' href={"/backend"}>Node js and Express js</Link>
      </ul>
    </div>
  )
}

export default Services

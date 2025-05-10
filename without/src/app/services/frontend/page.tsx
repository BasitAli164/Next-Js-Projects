import Link from 'next/link'
import React from 'react'

const frontend = () => {
  return (
    <div className='my-10 mx-96 '>
      <h1 className='text-3xl font-bold font-serif'>Frontend Tool and software</h1>
      <Link href={"/"} className='px-8 py-2 rounded-full text-black bg-slate-50 block mt-10 text-center'>🏠 Home Page</Link>
    </div>
  )
}

export default frontend

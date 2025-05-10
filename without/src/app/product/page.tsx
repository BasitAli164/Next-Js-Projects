import React from 'react'
import Link from 'next/link'

const ProductPage = () => {
  return (
    <div className='h-screen gap-32 border-2 border-red-800  w-full flex flex-col justify-center items-center'>
        <h2 className='text-5xl text-center'>Product Page</h2>
        <Link href={"/"} className='px-6 py-2 bg-gray-100 rounded-xl text-black font-bold'>🏠 Home Page</Link>
      
    </div>
  )
}

export default ProductPage

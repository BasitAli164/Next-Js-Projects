import Link from 'next/link'
import React from 'react'

const BlogPage = () => {
  return (
    <div className='w-[600px] h-[200px] flex flex-col justify-center items-center bg-violet-200'>
        <h1 className='font-bold text-5xl text-black'>Technical Agency....</h1>
        <ul  >
            <Link href={'/blogs/'} className='text-3xl font-light text-black'>React js</Link>
            <Link href={'/blogs/'} className='text-3xl font-light text-black'>Express js</Link>
            <Link href={'/blogs/'} className='text-3xl font-light text-black'>Node js</Link>
        </ul>
      
    </div>
  )
}

export default BlogPage

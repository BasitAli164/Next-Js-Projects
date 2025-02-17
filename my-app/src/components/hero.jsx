import Image from 'next/image'
import React from 'react'
import image from 'public/img/img.jpg'

const Hero = () => {
  return (
    <div className='relative h-screen w-screen'>
      <div className='absolute inset-0 -z-10'>
        <Image
        src={image}
        alt='my-image'
        
        style={{objectFit:'cover'}}
               
        />
      </div>
      <div>
        <h1 className='font-bold text-4xl  text-sky-600'>My Picture is so beautifull</h1>
      </div>
    </div>
  )
}

export default Hero

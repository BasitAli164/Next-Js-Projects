import Image from 'next/image'
import React from 'react'
import image from 'public/img/img.jpg'

const Hero = () => {
  return (
    <div className='relative h-screen w-full'>
      <div className='absolute inset-0 -z-10'>
        <Image
        src={image}
        alt='my-image'
        fill
        style={{objectFit:'cover'}}
        

        
        />
      </div>
      <div className='relative'>
        <h1 className='font-bold text-3xl  text-gray-800 absolute top-[10rem] left-[10px]' title="Hi! I'm Basit Ali">My Picture is so beautifull</h1>
      </div>
    </div>
  )
}

export default Hero

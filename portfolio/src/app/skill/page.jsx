import { mySkills } from '@/assets/assest'
import Image from 'next/image'
import React from 'react'

const SkillPage = () => {
  return (
    <div className='full px-[12%] py-10 scroll-mt-10'>
      <h2 className='text-center text-5xl font-Ovo'>My Skill</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-lg'>I am a full stack developer with the experties in these skill or stack which are the top demanded skills in industry with 7 month experience </p>
      <div className='grid grid-cols-5 gap-8 my-10 items-center justify-center'>
        {
          mySkills.map(({icon,title,description},index)=>(
            <div key={index} className='border border-gray-400 rounded-lg flex flex-col justify-center items-center w-48 h-56 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 transition duration-500'>
              <Image src={icon} alt={title} className='w-14 rounded-md'/> <br />
              <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
              <p className='text-sm  text-gray-600  leading-6 text-center'>{description}</p>

            
            </div>
          ))
        }
      </div>
      
    </div>
  )
}

export default SkillPage

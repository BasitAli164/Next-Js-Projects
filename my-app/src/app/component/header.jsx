import React from 'react'
import {Bell,User} from "lucide-react"

const Header = () => {
  return (
    <header className='flex justify-between items-center border h-20 bg-[#e9e9e9] p-5 '>
      <div>
        <h1 className='text-4xl font-semibold'>Mountain Travels Pakistan</h1>
        
      </div>
      <div className='flex gap-10'>
        <Bell className='w-6 cursor-pointer '/>
        <User className='w-6 cursor-pointer '/>
      </div>
    </header>
  )
}

export default  Header

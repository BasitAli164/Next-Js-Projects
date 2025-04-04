import React from 'react'
import {Bell,User} from "lucide-react"

const Header = () => {
  return (
    <header className='flex justify-center items-center '>
      <div>
        <h1 className='text-4xl'>Mountain Travels Pakistan</h1>
        
      </div>
      <div className='flex'>
        <Bell className='w-6 '/>
        <User className='w-6 '/>
      </div>
    </header>
  )
}

export default  Header

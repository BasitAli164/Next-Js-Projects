import Link from 'next/link'
import React from 'react'

const WebDev = () => {
  return (
    <div>
      <p>Html -----80%</p>
      <p>Css -----60%</p>
      <p>JS -----70%</p>
      <Link href={'/'} className='px-8 py-2 rounded-full  bg-violet-500 '>go to home</Link>
    </div>
  )
}

export default WebDev

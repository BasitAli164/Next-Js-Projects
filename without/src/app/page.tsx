import React from 'react'


const Home = () => {
  const handleFunc=()=>{
  }
  return (
    <div className='flex justify-center items-center w-full h-screen border-[10px] border-white'>
      <h1 className='text-4xl text-red-600'>Home Page</h1>
      <button onClick={handleFunc}>Click Me</button>
    </div>
  )
}

export default Home

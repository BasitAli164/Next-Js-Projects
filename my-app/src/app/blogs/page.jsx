import React from 'react'

const Blogs = (props) => {
  console.log("Props is: ",props)
  const {params,searchParams}=props;
    console.log("Search params is:",searchParams)
    console.log("Params is: ",params)
  return (
    <div>
      <h1>Blog Page </h1>
    </div>
  )
}

export default Blogs

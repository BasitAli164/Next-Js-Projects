import React from 'react'

const Product = ({params}) => {
  // console.log(params.id)

  return (
    <div>
        <h1>Product { params.id }</h1>
      
    </div>
  )
}

export default Product

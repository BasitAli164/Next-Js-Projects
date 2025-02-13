import React from 'react'
import Link from 'next/link'

const LearnLink = () => {
  const id=1;
  return (
    <div>
      <Link href="/profile">Goo to </Link>
      <br />
      <Link href={`/products/${id}`}>Goo to products</Link>
    </div>
  )
}

export default LearnLink

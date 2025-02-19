import EditSnippet from '@/components/EditSnippet'
import { prisma } from '@/lib/prisma'
import React from 'react'

const EditSnippetPage = async ({params}:{params:Promise<{id:string}>}) => {
    const id=parseInt((await params).id)
    console.log("id is;",id)
    const snippet=await prisma.snippet.findUnique({
        where:{
            id
        }
    })
    console.log("snippet",snippet)
    if(!snippet)return <h1>Snippet not found</h1>
  return (
    <div>
        <EditSnippet snippet={snippet}/>
    </div>
  )
}

export default EditSnippetPage

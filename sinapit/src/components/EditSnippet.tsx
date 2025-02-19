'use client'
import { Editor } from '@monaco-editor/react'
import type { Snippet } from '@prisma/client'
import { useState } from 'react'
const EditSnippet = ({snippet}:{snippet:Snippet}) => {
    const [code,setCode]=useState(snippet.code)
  return (
    
    <div>
        <Editor
        
        height="40vh"
        defaultLanguage='javascript'
        defaultValue={code}
        theme='vs light'
        className='text-white'

        />
    </div>
  )
}

export default EditSnippet

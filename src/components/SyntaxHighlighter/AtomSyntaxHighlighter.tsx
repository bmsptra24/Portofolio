'use server'
import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface Props {
  language: string
  codeString: string
}
const AtomSyntaxHighlighter: React.FC<Props> = (props) => {
  const { language, codeString } = props
  return (
    <SyntaxHighlighter
      language={language}
      style={dracula}
      customStyle={{
        fontSize: '1rem',
        borderBottomLeftRadius: '1rem',
        borderBottomRightRadius: '1rem',
      }}
    >
      {codeString}
    </SyntaxHighlighter>
  )
}

export default AtomSyntaxHighlighter

'use client'
import { ReactElement, useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { IoCopyOutline } from 'react-icons/io5'

const SyntaxHighlighterComponent = ({
  children,
  codeString,
  language,
}: {
  children: ReactElement
  codeString: string
  language: string
}) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(codeString)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
      .catch((error) => console.error('Error copying to clipboard:', error))
  }

  return (
    <div className="bg-slate-700 mt-5 rounded-2xl">
      <div className="w-full flex px-4 pt-2 justify-between text-slate-100">
        <p className="text-sm">{language}</p>
        <button onClick={copyToClipboard}>
          {copied ? <FaCheck /> : <IoCopyOutline />}
        </button>
      </div>
      {children}
    </div>
  )
}

export default SyntaxHighlighterComponent

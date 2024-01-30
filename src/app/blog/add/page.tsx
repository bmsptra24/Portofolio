'use client'
import { preventRefresh } from '@/utils/preventRefresh'
import MarkdownIt from 'markdown-it'
import { useEffect, useRef } from 'react'
import MdEditor from 'react-markdown-editor-lite'
// import style manually
import 'react-markdown-editor-lite/lib/index.css'
// Initialize a markdown parser
const mdParser = new MarkdownIt()

const Page: React.FC = () => {
  const value = useRef('')

  const handleEditorChange = ({ html, text }: { [key: string]: string }) => {
    value.current = text
    console.log('handleEditorChange', html, text)
  }

  return (
    <main className="container mx-auto h-full">
      <MdEditor
        style={{ height: '860px', width: '100%' }}
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
      />
    </main>
  )
}

export default Page

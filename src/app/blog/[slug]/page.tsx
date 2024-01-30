'use server'
import Background from '@/components/Background/Background'
import { readBlogBySlug } from '@/server/blog/crud'
import { metadata } from '@/app/layout'
import { BlogItem } from '@/types/blog'
import markdownit from 'markdown-it'
import React, { ReactElement } from 'react'
const md = markdownit()

const Page = async ({ params }: { params: { slug: string } }) => {
  const blog = await readBlogBySlug(params.slug)

  if (!blog) {
    return <h1>Blog tidak ditemukan</h1>
  }

  metadata.title = `Blog: ${blog.title}`

  return (
    <article className="p-10 flex flex-col gap-5 w-[860px]">
      <Background />

      {/* prose untuk bisa pakai h1 di next js */}
      <section className="prose lg:prose-xl">{blog.body}</section>

      {/* <div>
        <h1 className="text-5xl font-bold leading-normal">{blog.title}</h1>
        <hr className="mb-5" />

        {blog.content.map((section) => {
          if (section.type === 'image') {
            return (
              <Image
                key={section.id}
                width={blog.width}
                height={blog.height}
                alt={section.title}
                src={section.body}
                className="max-h-[500px] shadow rounded-2xl my-5"
              />
            )
          }

          if (section.type === 'paragraph') {
            return (
              <div key={section.id}>
                <p className="text-slate-700 mt-3">{section.body}</p>
              </div>
            )
          }

          if (section.type === 'subtitle') {
            return (
              <div key={section.id}>
                <h2 className="font-extrabold mt-8">{section.body}</h2>
              </div>
            )
          }

          if (section.type === 'code') {
            return (
              <SyntaxHighlighterComponent
                key={section.id}
                language="javascript"
                codeString={section.body}
              >
                <AtomSyntaxHighlighter
                  language={section.language}
                  codeString={section.body}
                />
              </SyntaxHighlighterComponent>
            )
          }
        })}
      </div> */}
    </article>
  )
}

export default Page

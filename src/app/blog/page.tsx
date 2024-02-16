'use server'
import Background from '@/components/Background/Background'
import Card from '@/components/Card/Card'
import { readAllBlogs } from '@/server/blog/crud'
import React from 'react'

const Page = async () => {
  const blogs = await readAllBlogs()

  if (!blogs || blogs.length < 1) return <p>There is nothing...</p>

  return (
    <main className="container mx-auto h-full">
      <Background />

      <section className="grid grid-cols-1 px-5 md:grid-cols-2 gap-6 mt-6">
        {blogs &&
          blogs.map((blog, index) => (
            <Card
              key={index}
              url={`/blog/${blog.slug}`}
              src={`https://picsum.photos/seed/${blog.slug}/300/200`}
              title={blog.title}
              description={blog.body}
            />
          ))}
      </section>
    </main>
  )
}

export default Page

'use server'
import Background from '@/components/Background/Background'
import Card from '@/components/Card/Card'
import { readAllBlogs } from '@/server/blog/crud'
import React from 'react'
import style from '../../styles/blog/display.module.scss'

const Page = async () => {
  const blogs = await readAllBlogs()

  if (!blogs || blogs.length < 1) return <p>There is nothing...</p>

  return (
    <main className={style['display-container']}>
      <Background />

      <section>
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

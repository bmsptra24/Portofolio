'use client'

import {
  createBlog,
  deleteBlog,
  readAllBlogs,
  updateBlog,
} from '@/server/blog/crud'
import MarkdownIt from 'markdown-it'
import { useEffect, useState } from 'react'
import MdEditor from 'react-markdown-editor-lite'
// import style manually
import 'react-markdown-editor-lite/lib/index.css'
import Dropdown from '@/components/Dropdown/Dropdown'
import { BlogItem } from '@/types/blog'
import { generateSlug } from '@/utils/blog'
import ToastButton from '@/components/Toast/ToastButton'

const mdParser = new MarkdownIt()

const AddBlog = () => {
  const [blog, setBlog] = useState<BlogItem>({
    id: '',
    title: '',
    body: '',
    slug: '',
  })
  const [blogs, setBlogs] = useState<BlogItem[]>([])

  useEffect(() => {
    const fetchData = async () => {
      setBlog((prev) => ({ ...prev, slug: generateSlug(prev.title) }))
    }

    fetchData()
  }, [blog.title])

  useEffect(() => {
    const fetchData = async () => {
      const blogs = await readAllBlogs()
      setBlogs(blogs)
    }

    fetchData()
  }, [])

  const handleSelect = (slug: string) => {
    console.log('Selected option:', slug)
    const blog = blogs?.find((blog) => blog.slug === slug)
    if (!blog) {
      setBlog({
        id: '',
        title: '',
        body: '',
        slug: '',
      })
      return
    }
    setBlog({
      id: blog.id,
      title: blog.title,
      body: blog.body,
      slug: blog.slug,
    })
  }

  const handleEditorChange = ({ html, text }: { [key: string]: string }) => {
    setBlog((prevBlog) => ({
      ...prevBlog,
      body: text,
    }))
    console.log('handleEditorChange', html, text)
  }

  const handleDelete = async () => {
    if (!confirm('Are you sure want to delete this blog?')) return

    const response = await JSON.parse(await deleteBlog(blog.id))

    if (response?.success) {
      setBlogs((prevBlogs) =>
        prevBlogs.filter((prevBlog) => prevBlog.id !== blog.id),
      )
      setBlog({
        id: '',
        title: '',
        body: '',
        slug: '',
      })

      console.log(response?.message)
    } else {
      console.error(response?.message)
      alert(response?.message)
    }
  }

  const handleSave = async () => {
    if (!blog.title || !blog.body) return

    let response
    if (blog.id !== '') response = await JSON.parse(await updateBlog(blog))
    if (blog.id === '') {
      response = await JSON.parse(await createBlog(blog))
      setBlogs((prev) => [...prev, blog])
    }

    setBlogs((prevBlogs) =>
      prevBlogs?.map((blog) => {
        if (blog.id === blog.id) {
          return blog
        } else {
          return blog
        }
      }),
    )

    if (response?.success) {
      console.log(response?.message)
    } else {
      console.error(response?.message)
      alert(response?.message)
    }
  }

  return (
    <>
      <div className="flex justify-between my-5">
        <input
          type="text"
          placeholder="Title..."
          value={blog.title}
          className="px-3 w-1/2"
          onChange={(e) =>
            setBlog((prevBlog) => ({ ...prevBlog, title: e.target.value }))
          }
        />
        <div className="flex gap-5 items-center">
          {blog.slug !== '' && (
            <ToastButton
              buttonText="Delete"
              toastMessage="Deleting..."
              onClick={async () => await handleDelete()}
            />
          )}
          {blog.slug !== '' && (
            <ToastButton
              buttonText="Finall result"
              toastMessage="Saving..."
              onClick={async () => {
                await handleSave()
                const url = `${blog.slug}`
                window.open(url, '_blank')
              }}
            />
          )}

          {blogs.length > 0 && (
            <Dropdown
              options={blogs?.map((blog) => blog.slug) || []}
              onSelect={handleSelect}
            />
          )}
        </div>
      </div>
      <MdEditor
        style={{ height: '700px', width: '100%' }}
        renderHTML={(text) => mdParser.render(text)}
        value={blog.body}
        onChange={handleEditorChange}
      />
      <div className="flex justify-end my-5">
        <ToastButton
          buttonText="Save"
          toastMessage="Saving..."
          onClick={handleSave}
        />
      </div>
    </>
  )
}

export default AddBlog

'use server'
import { BlogItem } from '@/types/blog'
import { db } from '@/utils/db'
import {
  DocumentSnapshot,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore'
import markdownit from 'markdown-it'
import React from 'react'
import hljs from 'highlight.js'
import MarkdownIt from 'markdown-it'

const md: MarkdownIt = markdownit({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value
      } catch (__) {}
    }

    return (
      '<pre><code class="hljs">' + md.utils.escapeHtml(str) + '</code></pre>'
    )
  },
})

export const readAllBlogs = async () => {
  const blogsCollectionRef = collection(db, 'blog')
  const blogsQuerySnapshot = await getDocs(blogsCollectionRef)

  const blogs: BlogItem[] = []

  blogsQuerySnapshot.forEach((doc) => {
    const blogData = doc.data()

    const blog: BlogItem = {
      id: doc?.id,
      slug: blogData?.slug,
      title: blogData?.title,
      body: blogData?.body,
    }

    blogs.push(blog)
  })

  return blogs
}

export const readBlogBySlug = async (slug: string) => {
  const docRef = collection(db, 'blog')
  const querySnapshot = await getDocs(query(docRef, where('slug', '==', slug)))

  if (querySnapshot.empty) {
    console.log('No matching documents.')
    return null
  }

  const docSnap = querySnapshot.docs[0]
  const response = docSnap.data() as BlogItem

  const html = md.render(response.body)

  const blog = {
    title: response.title,
    slug: response?.slug,
    body: <div dangerouslySetInnerHTML={{ __html: html }} />,
  }

  return blog
}

// Function to create a new blog in Firestore
export const createBlog = async (blogData: BlogItem) => {
  try {
    const newBlogData = {
      slug: blogData.slug,
      title: blogData.title,
      body: blogData.body,
    } as Omit<BlogItem, 'id'>

    const blogCollectionRef = collection(db, 'blog')

    const docRef = await addDoc(blogCollectionRef, newBlogData)

    return generateResponse(true, 'Blog berhasil dibuat.', { id: docRef.id })
  } catch (error) {
    return generateResponse(false, 'Gagal membuat blog.', error)
  }
}

// Function to update an existing blog in Firestore
export const updateBlog = async (blogData: BlogItem) => {
  try {
    const updatedData = {
      slug: blogData.slug,
      title: blogData.title,
      body: blogData.body,
    }

    const docRef = doc(db, 'blog', blogData.id)
    const docSnapshot: DocumentSnapshot = await getDoc(docRef)

    if (docSnapshot.exists()) {
      await updateDoc(docRef, updatedData)
    } else {
      await setDoc(docRef, updatedData)
    }

    return generateResponse(true, 'Blog berhasil diperbarui.')
  } catch (error) {
    return generateResponse(false, 'Gagal memperbarui blog.', error)
  }
}

// Function to delete a blog from Firestore
export const deleteBlog = async (blogId: string) => {
  try {
    const docRef = doc(db, 'blog', blogId)
    const docSnapshot: DocumentSnapshot = await getDoc(docRef)

    if (docSnapshot.exists()) {
      await deleteDoc(docRef)
      return generateResponse(true, 'Blog berhasil dihapus.')
    } else {
      return generateResponse(false, 'Blog tidak ditemukan.')
    }
  } catch (error) {
    return generateResponse(false, 'Gagal menghapus blog.', error)
  }
}

const generateResponse = (
  success: boolean,
  message: string,
  data?: any,
): string => {
  return JSON.stringify({
    success: success,
    message: message,
    data: data || null,
  })
}

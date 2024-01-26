import image1 from '@/assets/image-1.jpg'
import { BlogItem } from '@/types/blog'
import { db } from '@/utils/db'
import { doc, getDoc } from 'firebase/firestore'

export const readBlogBySlug = async (slug: string) => {
  'use server'

  const docRef = doc(db, 'blog', slug)
  const docSnap = await getDoc(docRef)
  const blog = docSnap.data() as BlogItem
  console.log({ blog })

  //   const blog: BlogItem = {
  //     title: 'Tutorial Instalasi Node.JS Untuk Perkenalan Algoritma Dasar',
  //     alt: 'hero',
  //     width: 2000,
  //     height: 1500,
  //     content: [
  //       {
  //         id: '1fdsfsd',
  //         type: 'image',
  //         title: 'image-1',
  //         body: image1,
  //       },
  //       {
  //         id: '1fdsfsdd',
  //         type: 'subtitle',
  //         body: 'Introduction',
  //       },
  //       {
  //         id: '1fdsfcsd',
  //         type: 'paragraph',
  //         body:
  //           'Pertama, pastikan kita telah menginstall NodeJS untuk menjalankan program javascript kita. Jika kalian belum menginstall NodeJS kalian dapat mendownloadnya pada link berikut ini (https://nodejs.org/en/download).\n\nKita juga akan membutuhkan koneksi internet untuk mengakses API OpenAI. Selain itu, kita perlu mendaftar di OpenAI dan mendapatkan API Key kita.',
  //       },
  //       {
  //         id: '1fdssfsd',
  //         type: 'image',
  //         title: 'image-1',
  //         body: image1,
  //       },
  //       {
  //         id: '1fdrsfsd',
  //         type: 'subtitle',
  //         body: 'Introduction',
  //       },
  //       {
  //         id: '1fdsfbsd',
  //         type: 'paragraph',
  //         body:
  //           'Pertama, pastikan kita telah menginstall NodeJS untuk menjalankan program javascript kita. Jika kalian belum menginstall NodeJS kalian dapat mendownloadnya pada link berikut ini (https://nodejs.org/en/download).\n\nKita juga akan membutuhkan koneksi internet untuk mengakses API OpenAI. Selain itu, kita perlu mendaftar di OpenAI dan mendapatkan API Key kita.',
  //       },
  //     ],
  //   }
  return blog
}

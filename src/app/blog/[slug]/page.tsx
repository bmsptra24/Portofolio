import Image from 'next/image'
import React from 'react'
import image1 from '@/assets/image-1.jpg'

const Page = ({ params }: { params: { slug: string } }) => {
  const blog = [
    {
      title: 'Tutorial Instalasi Node.JS Untuk Perkenalan Algoritma Dasar',
      image: image1,
      alt: 'hero',
      width: 2000,
      height: 1500,
      content: [
        {
          title: 'Introduction',
          body:
            'Mungkin kalian sudah pernah mendengar tentang ChatGPT, chatbot yang dikembangkan oleh OpenAI. OpenAI adalah perusahaan yang mengembangkan teknologi AI, dan mereka telah merilis API yang memungkinkan para developer untuk mengakses model-model AI mereka. Dalam artikel ini, kita akan mencoba memakai OpenAI API dengan JavaScript.',
        },
        {
          title: 'Persiapan Proyek',
          body:
            'Pertama, pastikan kita telah menginstall NodeJS untuk menjalankan program javascript kita. Jika kalian belum menginstall NodeJS kalian dapat mendownloadnya pada link berikut ini (https://nodejs.org/en/download).\n\nKita juga akan membutuhkan koneksi internet untuk mengakses API OpenAI. Selain itu, kita perlu mendaftar di OpenAI dan mendapatkan API Key kita.',
        },
        {
          title: 'Mendapatkan API Key OpenAI',
          body:
            'Untuk mendapatkan API Key OpenAI kita perlu sign up terlebih dahulu pada website OpenAI-nya (https://openai.com/).\n\nSetelah membuat akun, pilih menu “API”. Kemudian di halaman “Overview”, klik “Personal” lalu pilih “View API keys”.',
        },
        {
          title: 'Membuat Projek NodeJS',
          body:
            'Buka terminal dan navigasikan ke direktori tempat kita ingin membuat proyek baru. Kemudian, buat direktori proyek dengan perintah berikut:\n\nSetelah masuk ke dalam direktori baru tersebut, kita akan menginisialisasi file package.json. Dengan begitu kita akan dapat menginstall berbagai dependensi pada projek kita.',
        },
        {
          title: 'FInishing',
          body:
            'Buka terminal dan navigasikan ke direktori tempat kita ingin membuat proyek baru. Kemudian, buat direktori proyek dengan perintah berikut:\n\nSetelah masuk ke dalam direktori baru tersebut, kita akan menginisialisasi file package.json. Dengan begitu kita akan dapat menginstall berbagai dependensi pada projek kita.',
        },
      ],
    },
  ]

  return (
    <article className="p-10 flex flex-col gap-5 w-[860px]">
      {blog.map((post, index) => (
        <div key={index}>
          <h1 className="text-5xl font-bold leading-normal">{post.title}</h1>
          <hr className="mb-5" />
          <Image
            width={post.width}
            height={post.height}
            alt={post.alt}
            src={post.image}
            className="max-h-[500px] shadow rounded-2xl"
          />
          {post.content.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className="font-extrabold mt-8">{section.title}</h2>
              <p className="text-slate-700 mt-3">{section.body}</p>
            </div>
          ))}
        </div>
      ))}
    </article>
  )
}

export default Page

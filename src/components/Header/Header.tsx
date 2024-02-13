'use server'
import { generateSlug } from '@/utils/blog'
import Link from 'next/link'
import React from 'react'
import style from '../../styles/header.module.scss'

const Header = () => {
  return (
    <section
      className={style['header-container']}
      // style={{ backgroundColor: '#2d4059' }}
    >
      <header className="container mx-auto flex justify-between p-6 w-full">
        <Link
          href={'/'}
          className="hover:font-semibold hover:-tracking-wider transition-all cursor-pointer hover:text-slate-150"
        >
          Bima Saputra
        </Link>
        <div className="flex gap-12">
          {['Blog'].map((item, index) => (
            <Link
              href={`/${generateSlug(item)}`}
              key={index}
              className="hover:underline cursor-pointer hover:text-slate-150"
            >
              {item}
            </Link>
          ))}
        </div>
      </header>
    </section>
  )
}

export default Header

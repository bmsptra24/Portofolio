'use server'
import { generateSlug } from '@/utils/blog'
import Link from 'next/link'
import React from 'react'
import style from '../../styles/header.module.scss'

type Props = {
  variant: 'dark' | 'light'
}

const Header: React.FC<Props> = (props) => {
  const { variant } = props

  return (
    <section
      className={
        variant === 'dark' ? style['header-dark'] : style['header-light']
      }
      // style={{ backgroundColor: '#2d4059' }}
    >
      <header className={variant === 'dark' ? '' : 'px-5'}>
        <Link
          href={'/'}
          className="hover:font-semibold hover:-tracking-wider transition-all cursor-pointer hover:text-slate-150"
        >
          <p>Bima Saputra</p>
        </Link>
        <div className="flex gap-12">
          {['Blog'].map((item, index) => (
            <Link
              href={`/${generateSlug(item)}`}
              key={index}
              className="cursor-pointer hover:text-slate-150"
            >
              <p>{item}</p>
            </Link>
          ))}
        </div>
      </header>
    </section>
  )
}

export default Header

'use client'

import { bebasNeue } from '@/styles/font'
import style from '../../styles/profil/puisi.module.scss'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const Puisi = () => {
  useEffect(() => {
    const pos = document.documentElement

    const updateMousePosition = (e: MouseEvent) => {
      pos.style.setProperty('--cursor-x', `${e.clientX}px`)
      pos.style.setProperty('--cursor-y', `${e.clientY}px`)
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return (
    <article className={style['puisi']}>
      <Link href={'/puisi'} target="_blank">
        <button className={style['btn-read-more']}>Read more!</button>
      </Link>
      <div className={style['background']}>
        <h1 className={`${bebasNeue.className} `}>POSEIDON POWER</h1>

        <div className={style['puisi-body']}>
          <p>The Poseidon, in doubt, spells out his power</p>
          <p>Debating between existence and void</p>
          <p>Is this a wise wisdom</p>
          <p>Or just an illusion creeping in emptiness</p>
          <br />
          <p>Poseidon contemplates the ocean all day</p>
          <p>New strength lurking within his soul</p>
          <p>Like Eros flowing in the blood of gods</p>
          <p>A new conception igniting in his sky</p>
        </div>
      </div>
      <h1 className={`${bebasNeue.className} `}>KEKUATAN POSEIDON</h1>

      <div className={style['puisi-body']}>
        <p>Sang Poseidon, dalam keraguan mengeja kekuatannya</p>
        <p>Memperdebatkan antara keberadaan dan kekosongan</p>
        <p>Apakah ini adalah kebijaksanaan yang bijaksana</p>
        <p>Atau hanya ilusi yang merayap dalam kehampaan</p>
        <br />
        <p>Poseidon merenungkan samudra sepanjang hari</p>
        <p>Kekuatan baru yang mengintai di dalam batinnya</p>
        <p>Seperti Eros yang mengalir dalam darah dewa</p>
        <p>Sebuah konsepsi baru yang menyala di langit-nya</p>
      </div>
    </article>
  )
}

export default Puisi

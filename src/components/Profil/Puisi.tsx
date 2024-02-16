'use client'

import { bebasNeue } from '@/styles/font'
import style from '../../styles/profil/puisi.module.scss'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const Puisi = () => {
  useEffect(() => {
    onHover()
    onLeave()
  }, [])
  const onHover = () => {
    // show bg
    const bg = document.querySelector('.background') as HTMLElement
    bg.style.opacity = '100%'

    // set the pointer
    const pos = document.documentElement

    const updateMousePosition = (e: MouseEvent) => {
      pos.style.setProperty('--cursor-clip-size', `200px`)
      pos.style.setProperty('--cursor-x', `${e.clientX}px`)
      pos.style.setProperty('--cursor-y', `${e.clientY}px`)
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => window.removeEventListener('mousemove', updateMousePosition)
  }

  const onLeave = () => {
    const bg = document.querySelector('.background') as HTMLElement
    bg.style.opacity = '0'
  }

  return (
    <article
      className={style['puisi']}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className={`${style['background']} background`}>
        <div className={style['description']}>
          <p>
            Besides coding, I also like to write blogs and poetry when I have
            free time.
          </p>
          <Link href={'/blog'} target="_blank">
            <button className={style['btn-read-more']}>Read more!</button>
          </Link>
        </div>
        <div className={style['description']}>
          <p>
            Besides coding, I also like to write blogs and poetry when I have
            free time.
          </p>
          <Link href={'/blog'} target="_blank">
            <button className={style['btn-read-more']}>Read more!</button>
          </Link>
        </div>
        <h1 className={`${bebasNeue.className} `}>
          BATTLE OF <span>CHAITRA</span>
        </h1>

        <div className={style['puisi-body']}>
          <p>In the battlefield, the Bhadrapada warriors stand alone</p>
          <p>
            The sun&apos;s rays reflect the sparkle of arunika in their hands
          </p>
          <p>Their footsteps, trembling the senses of the listeners</p>
          <p>Respected warriors, ready to face the calling of fate</p>
          <br />
          <p>The thick scent of blood carried by the blowing wind</p>
          <p>Fills their souls, igniting an unwavering spirit of immortality</p>
          <p>Yet, the unyielding cheers of the spirit</p>
          <p>
            The warriors themselves, in a battle of inner strength, relentless
            and tireless
          </p>
          <br />
          <p>Offering the fragrant scent of blooming jasmine</p>
          <p>
            In the midst of the silent battlefield, they narrate tales of valor
          </p>
          <p>In fragile tranquility, the whispers of their hearts are heard</p>
          <p>Hidden hopes, so that righteousness does not anger</p>
        </div>
      </div>
      <h1 className={`${bebasNeue.className} `}>PERTEMPURAN CHAITRA</h1>

      <div className={style['puisi-body']}>
        <p>Di medan perang, prajurit Bhadrapada sendiri</p>
        <p>Sinar mentari memantulkan kilau arunika di tangan</p>
        <p>Derap langkah mereka, menggetarkan indera pendengar</p>
        <p>Prajurit terhormat, siap menghadapi prema yang memanggil</p>
        <br />
        <p>Aroma darah yang tebal, terbawa angin yang berhembus</p>
        <p>
          Mengisi jiwa mereka, membangkitkan semangat amerta yang tak
          tergoyahkan
        </p>
        <p>Namun sorakan diwa yang tak dapat dilawan</p>
        <p>
          Prajurit sendiri, dalam pertarungan batin yang andala dan tak kenal
          lelah
        </p>
        <br />
        <p>Suguhkan aroma harum, dari bunga melati yang merekah</p>
        <p>Di tengah medan yang sunyi, mereka menceritakan kisah ragawacana</p>
        <p>Dalam ketenangan yang rapuh, terdengar bisikan hati mereka</p>
        <p>Harapan-harapan terpendam, agar dharma tidak murka</p>
      </div>
    </article>
  )
}

export default Puisi

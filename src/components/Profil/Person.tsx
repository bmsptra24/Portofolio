import { bebasNeue } from '@/styles/font'
import Image from 'next/image'
import style from '../../styles/profil/person.module.scss'
import React from 'react'

const Person = () => {
  return (
    <article className={style.person}>
      <section className={style.marquee}>
        <div className={`${bebasNeue.className} ${style.items}`}>
          <p>BIMA SAPUTRA</p>
          <p>BIMA SAPUTRA</p>
          <p>BIMA SAPUTRA</p>
          <p>BIMA SAPUTRA</p>
          <p>BIMA SAPUTRA</p>
          <p>BIMA SAPUTRA</p>
          <p>BIMA SAPUTRA</p>
          <p>BIMA SAPUTRA</p>
          <p>BIMA SAPUTRA</p>
          <p>BIMA SAPUTRA</p>
        </div>
      </section>

      <section className={style.intro}>
        <div className={style.text1}>
          <p>
            There is a dimension, beyond that which is known to bear. It is a
            dimension as vast as space and as timeless as infinity.
          </p>
          <p>
            It is the middle ground between light and shadow, between science
            and superstition, and it lies between the pit of bear’s fears and
            the summit of his knowledge. <span>It is Super Rare Bears.</span>
          </p>
          <div className={style.btn}>Contact me</div>
        </div>
        <div className={style.hero}>
          <Image
            className={style.image}
            width="600"
            height="600"
            src={require('../../assets/images/profil.jpg')}
            alt="profil"
          />
        </div>
        <div className={style.text2}>
          <p>
            It is the middle ground between light and shadow, between science
            and superstition, and it lies between the pit of bear’s fears and
            the summit of his knowledge. <span>It is Super Rare Bears.</span>
          </p>
        </div>
      </section>
    </article>
  )
}

export default Person

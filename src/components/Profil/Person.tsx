import { bebasNeue } from '@/styles/font'
import Image from 'next/image'
import React from 'react'

const Person = () => {
  return (
    <article className="person">
      <section className="marquee">
        <div className={`${bebasNeue.className} items`}>
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

      <section className="intro">
        <div className="text1">
          <p>
            There is a dimension, beyond that which is known to bear. It is a
            dimension as vast as space and as timeless as infinity.
          </p>
          <p>
            It is the middle ground between light and shadow, between science
            and superstition, and it lies between the pit of bear’s fears and
            the summit of his knowledge. <span>It is Super Rare Bears.</span>
          </p>
          <div className="btn">Contact me</div>
        </div>
        <div className="hero">
          <Image
            className="image"
            width="600"
            height="600"
            src={require('../../assets/images/profil.jpg')}
            alt="profil"
          />
        </div>
        <div className="text2">
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

import React from 'react'
import style from '../../styles/background/background.module.scss'

const Background = () => {
  return (
    <>
      <section className={style['background']}>
        <span />
        <span />
        <span />
      </section>
      <section className={style['blur-layer']}></section>
    </>
  )
}

export default Background

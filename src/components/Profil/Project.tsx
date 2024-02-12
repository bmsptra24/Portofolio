'use client'
import { bebasNeue } from '@/styles/font'
import React, { useEffect } from 'react'

const Project = () => {
  //! add anmimate
  const onItemHover = () => {
    const cover = document.querySelector('.project .cover') as HTMLElement
    cover.style.display = 'block'
    cover.style.opacity = '97%'
  }

  const onItemLeave = () => {
    const cover = document.querySelector('.project .cover') as HTMLElement
    cover.style.display = 'none'
    cover.style.opacity = '0%'
  }

  return (
    <article className="project">
      <h1 className={`${bebasNeue.className} `}>PROJECTS</h1>

      <div className="cover">
        <div className="ilustration-1">
          <div className="ilustration-2"></div>
        </div>
      </div>

      <div className="items">
        <div onMouseOver={onItemHover} onMouseLeave={onItemLeave}>
          <p>Nebeng</p>
          <p>React Native</p>
          <p>Launch</p>
        </div>
        <div onMouseOver={onItemHover} onMouseLeave={onItemLeave}>
          <p>Nebeng</p>
          <p>React Native</p>
          <p>Launch</p>
        </div>
        <div onMouseOver={onItemHover} onMouseLeave={onItemLeave}>
          <p>Nebeng</p>
          <p>React Native</p>
          <p>Launch</p>
        </div>
        <div onMouseOver={onItemHover} onMouseLeave={onItemLeave}>
          <p>Nebeng</p>
          <p>React Native</p>
          <p>Launch</p>
        </div>
      </div>
    </article>
  )
}

export default Project

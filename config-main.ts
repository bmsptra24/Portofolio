import astro from './public/techStack/astro.png'
import bootstrap from './public/techStack/bootstrap.png'
import css from './public/techStack/css.png'
import express from './public/techStack/express.png'
import firebase from './public/techStack/firebase.png'
import html from './public/techStack/html.png'
import js from './public/techStack/js.png'
import next from './public/techStack/next.png'
import node from './public/techStack/node.png'
import react from './public/techStack/react.png'
import tailwind from './public/techStack/tailwind.png'

// project
import img1 from './public/project/mbd/1.png'
import img2 from './public/project/mbd/2.png'
import img3 from './public/project/mbd/3.png'
import img4 from './public/project/mbd/4.png'

export const techStack = [
  next.src,
  react.src, //last
  tailwind.src,
  js.src,
  css.src,
  html.src,
  node.src,
  firebase.src,
  bootstrap.src,
  // astro.src,
  // express.src,
]

export const projectConfig = [
  {
    img: img4,
    title: 'Beet AI',
    link: 'https://beet-ai.vercel.app/',
  },
  {
    img: img1,
    title: 'Meja Belajar Digital',
    link: 'https://mejabelajardigital.web.app/',
  },
  {
    img: img3,
    title: 'Root of Life',
    link: 'https://bmsptra24.github.io/Root-of-Life/',
  },
  {
    img: img2,
    title: 'Web Portofolio 1',
    link: 'https://bmsptra24.github.io/Web-Portfolio/',
  },
]

interface starsConfigProps {
  total: number
  colors: string[]
}

export const starsConfig: starsConfigProps = {
  total: 200,
  // total: 50,
  colors: ['#D285F2', '#a855f7', '#f0abfc', '#fae8ff'],
}

interface cometsConfigProps {
  total: number
}

export const cometsConfig: cometsConfigProps = {
  // total: 0,
  total: 20,
}

export const sosmedLink = {
  mail: 'mailto:sbima2432@gmail.com',
  linkedin: 'https://www.linkedin.com/in/bmsptra24/',
  github: 'https://github.com/bmsptra24',
}

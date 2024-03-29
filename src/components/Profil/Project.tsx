'use client'
import { bebasNeue } from '@/styles/font'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import style from '../../styles/profil/project.module.scss'

const Project = () => {
  interface TProject {
    title: string
    tech: string
    ilustration1: any
    ilustration2: any
    url: string
  }

  const [ilustration, setIlustration] = useState<[string, string]>([
    require('../../assets/image-1.jpg'),
    require('../../assets/image-1.jpg'),
  ])

  const projectsList: TProject[] = [
    {
      title: 'Meja Belajar Digital',
      tech: 'React, Tailwind, Firebase',
      ilustration1: require('../../assets/images/projects/mbd.png'),
      ilustration2: require('../../assets/images/projects/mbd-2.png'),
      url: 'https://mejabelajardigital.web.app/',
    },
    {
      title: 'Root of Life',
      tech: 'Construct 2, Photoshop',
      ilustration1: require('../../assets/images/projects/root-of-life.png'),
      ilustration2: require('../../assets/images/projects/root-of-life-2.png'),
      url: 'https://bmsptra24.github.io/Root-of-Life/',
    },
    {
      title: 'Nebeng',
      tech: 'React Native',
      ilustration1: require('../../assets/images/projects/nebeng.png'),
      ilustration2: require('../../assets/images/projects/nebeng-2.png'),
      url: 'https://github.com/bmsptra24/nebeng',
    },
    {
      title: 'Beet AI',
      tech: 'Next.js, Tailwind, Docker, OpenAI API',
      ilustration1: require('../../assets/images/projects/beet-ai.png'),
      ilustration2: require('../../assets/images/projects/beet-ai-2.png'),
      url: 'https://beet-ai.vercel.app/',
    },
    {
      title: 'Portofolio V1',
      tech: 'HTML, CSS, JS',
      ilustration1: require('../../assets/images/projects/portofolio1.png'),
      ilustration2: require('../../assets/images/projects/portovolio1-2.png'),
      url: 'https://bmsptra24.github.io/Web-Portfolio/',
    },
    {
      title: 'Search Movie',
      tech: 'HTML, CSS, JS',
      ilustration1: require('../../assets/images/projects/search-movie.png'),
      ilustration2: require('../../assets/images/projects/search-movie-2.png'),
      url: 'https://bmsptra24.github.io/Search-Movies/',
    },
    {
      title: 'Portofolio V2',
      tech: 'Next JS, Tailwind',
      ilustration1: require('../../assets/images/projects/portofolio2.png'),
      ilustration2: require('../../assets/images/projects/portofolio2-2.png'),
      url: 'https://portofolio-bmsptra24.vercel.app/',
    },
    {
      title: 'Calculator',
      tech: 'HTML, CSS, JS',
      ilustration1: require('../../assets/images/projects/calculator2.png'),
      ilustration2: require('../../assets/images/projects/calculator2-2.png'),
      url: 'https://bmsptra24.github.io/Simple-Calculator-v2.0/',
    },
  ]
  //! add anmimate
  const onItemHover = async (project: TProject) => {
    setIlustration([project.ilustration1, project.ilustration2])

    const cover = document.querySelector('.project .cover') as HTMLElement
    cover.classList.replace('fadeOut', 'fadeIn')
  }

  const onItemLeave = () => {
    const cover = document.querySelector('.project .cover') as HTMLElement
    // cover.classList.replace('fadeIn', 'fadeIn')
    cover.classList.replace('fadeIn', 'fadeOut')
  }

  return (
    <article className={`${style['project']} project`}>
      <h1 className={`${bebasNeue.className} `}>PROJECTS</h1>

      <div className={`${style['cover']} fadeOut cover`}>
        <div className={`${style['ilustration-1']} floating-sm`}>
          <Image
            className={`${style['img']}`}
            alt="ilustration-1"
            src={ilustration[0]}
          />
          <div className={`${style['ilustration-2']} floating-md`}>
            <Image
              className={`${style['img']}`}
              alt="ilustration-1"
              src={ilustration[1]}
            />
          </div>
        </div>
      </div>

      <div className={`${style['items']}`}>
        <table>
          <tbody>
            {projectsList.map((project, index) => (
              <tr
                key={index}
                onMouseOver={() => onItemHover(project)}
                onMouseLeave={onItemLeave}
              >
                <td>{project.title}</td>
                <td>{project.tech}</td>
                <td>
                  <Link target="_blank" href={project.url}>
                    <span>
                      Launch{' '}
                      <FaArrowRightLong className={`${style['icon-arrow']}`} />
                    </span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  )
}

export default Project

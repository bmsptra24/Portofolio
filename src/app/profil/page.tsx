import React from 'react'

import '../../styles/profil.scss'
import Image from 'next/image'
import Header from '@/components/Header/Header'
import Puisi from '@/components/Profil/Puisi'
import { bebasNeue } from '@/styles/font'
import Project from '@/components/Profil/Project'

type Skill = {
  name: string
  iconSrc: string
}

type SkillItemProps = {
  skillName: string
  iconSrc: string
}

const SkillItem: React.FC<SkillItemProps> = ({ skillName, iconSrc }) => {
  return (
    <div>
      <Image
        className="img"
        width={100}
        height={100}
        alt={skillName}
        src={iconSrc}
      />
      <p>{skillName}</p>
    </div>
  )
}

const Page = () => {
  // marqueee skil berisi 5 skill
  const skillsMarqueee1: Skill[][] = [
    [
      { name: 'React', iconSrc: require('../../assets/icons/react.png') },
      { name: 'Next JS', iconSrc: require('../../assets/icons/nextjs.png') },
      { name: 'Node JS', iconSrc: require('../../assets/icons/nodejs.png') },
      { name: 'Javascript', iconSrc: require('../../assets/icons/js.png') },
      { name: 'Typescript', iconSrc: require('../../assets/icons/ts.png') },
    ],
    [
      { name: 'HTML', iconSrc: require('../../assets/icons/html.png') },
      { name: 'CSS', iconSrc: require('../../assets/icons/css.webp') },
      {
        name: 'Bootstrap',
        iconSrc: require('../../assets/icons/bootstrap.png'),
      },
      { name: 'Tailwind', iconSrc: require('../../assets/icons/tailwind.png') },
      { name: 'SASS', iconSrc: require('../../assets/icons/sass.png') },
    ],
  ]

  return (
    <main className="profil-container">
      <Header />

      <article className="header">
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

      <article className="about">
        <div className="title">
          <h1 className={`${bebasNeue.className}`}>SKILLS</h1>
        </div>
        <div className="marquee">
          <div className="items">
            {skillsMarqueee1[0].map((skill, index) => (
              <SkillItem
                key={index}
                skillName={skill.name}
                iconSrc={skill.iconSrc}
              />
            ))}
            {skillsMarqueee1[0].map((skill, index) => (
              <SkillItem
                key={index}
                skillName={skill.name}
                iconSrc={skill.iconSrc}
              />
            ))}
          </div>

          <div className="items">
            {skillsMarqueee1[1].map((skill, index) => (
              <SkillItem
                key={index}
                skillName={skill.name}
                iconSrc={skill.iconSrc}
              />
            ))}
            {skillsMarqueee1[1].map((skill, index) => (
              <SkillItem
                key={index}
                skillName={skill.name}
                iconSrc={skill.iconSrc}
              />
            ))}
          </div>
        </div>
      </article>

      <Puisi />

      <Project />
    </main>
  )
}

export default Page

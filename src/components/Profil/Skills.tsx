import { bebasNeue } from '@/styles/font'
import Image from 'next/image'
import React from 'react'
import style from '../../styles/profil/skill.module.scss'

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
        className={style['img']}
        width={100}
        height={100}
        alt={skillName}
        src={iconSrc}
      />
      <p>{skillName}</p>
    </div>
  )
}

const Skills = () => {
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
    <article className={style['skill-container']}>
      <div className={style['marquee']}>
        <div className={style['items']}>
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
          {skillsMarqueee1[0].map((skill, index) => (
            <SkillItem
              key={index}
              skillName={skill.name}
              iconSrc={skill.iconSrc}
            />
          ))}
        </div>

        <div className={style['items']}>
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
          {skillsMarqueee1[1].map((skill, index) => (
            <SkillItem
              key={index}
              skillName={skill.name}
              iconSrc={skill.iconSrc}
            />
          ))}
        </div>
      </div>
      <div className={style['title']}>
        <h1 className={`${bebasNeue.className}`}>SKILLS</h1>
      </div>
    </article>
  )
}

export default Skills

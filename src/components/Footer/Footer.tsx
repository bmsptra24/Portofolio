import React from 'react'
import style from '../../styles/footer.module.scss'
import { FaArrowRightLong } from 'react-icons/fa6'
import Link from 'next/link'

const Footer = () => {
  type TFooterItem =
    | {
        title: string
        variant: 'right'
        items: string
      }
    | {
        title: string
        variant: 'left'
        items: string[]
      }

  const footerItems: TFooterItem[] = [
    {
      title: 'About',
      variant: 'right',
      items:
        'Hi, I am a student from Informatics Management at Sriwijaya State Polytechnic who is interested in web development. I am actively participating in web development training and competitions.',
    },
    {
      title: 'Achievements',
      variant: 'left',
      items: [
        '3rd Place | Web Design Competition',
        '1st Place Best Poster | Create Informatics Innovation | KMIPN V',
      ],
    },
    {
      title: 'Languages',
      variant: 'left',
      items: [
        'English | Limited working proficiency',
        'Indonesian | Native or bilingual proficiency',
      ],
    },
    {
      title: 'Experience',
      variant: 'left',
      items: [
        'GDSC Sriwijaya State Polytechnic',
        'Assistant Mentor in Web Design Training',
      ],
    },
  ]

  return (
    <section className={style['footer-container']}>
      <footer>
        <div>
          {footerItems.map((item, index) => {
            return (
              item.variant === 'left' && (
                <div key={index}>
                  <h1>{item.title}</h1>
                  <ul>
                    {item.items.map((list, index) => (
                      <li key={index}>
                        <FaArrowRightLong className={style['icon-arrow']} />
                        <p>{list}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )
          })}
        </div>
        <div>
          {footerItems.map((item, index) => {
            return (
              item.variant === 'right' && (
                <div key={index}>
                  <h1>{item.title}</h1>
                  <p>{item.items}</p>
                </div>
              )
            )
          })}
          <div>
            <h1>Get in touch</h1>
            <p>
              I really like listening to music while coding, here are some of my
              playlists. And also here are some social media that I use
            </p>
            <ul>
              <li>
                <FaArrowRightLong className={style['icon-arrow']} />
                <Link
                  className={style['link']}
                  href={'mailto:sbima2432@gmail.com'}
                >
                  <p>MAIL</p>
                </Link>
              </li>
              <li>
                <FaArrowRightLong className={style['icon-arrow']} />
                <Link
                  className={style['link']}
                  href={'https://github.com/bmsptra24/'}
                >
                  <p>GITHUB</p>
                </Link>
              </li>
              <li>
                <FaArrowRightLong className={style['icon-arrow']} />
                <Link
                  className={style['link']}
                  href={'https://www.linkedin.com/in/bmsptra24/'}
                >
                  <p>LINKEDIN</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer

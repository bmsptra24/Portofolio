'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import React from 'react'
import style from '../../styles/card/card.module.scss'

interface Props {
  src: string
  title: string
  description: string
  url: string
}

const Card: React.FC<Props> = (props) => {
  const { src, title, description, url } = props
  const router = useRouter()

  const handleClick = () => {
    router.push(url)
  }

  return (
    <div className={style['card-container']} onClick={handleClick}>
      <Image
        width={300}
        height={200}
        src={src}
        alt="cover"
        className={style['image']}
      />
      <div className={style['item']}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card

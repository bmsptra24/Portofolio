'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import React from 'react'

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
    <div
      className="flex gap-3 shadow-md p-3 rounded-2xl h-36 border transition-all ease-in-out cursor-pointer hover:bg-sky-100"
      onClick={handleClick}
    >
      <Image
        width={300}
        height={200}
        src={src}
        alt="cover"
        className="rounded-xl"
      />
      <div className="text-ellipsis overflow-hidden">
        <h2 className="font-bold">{title}</h2>
        <p className="line-clamp-3">{description}</p>
      </div>
    </div>
  )
}

export default Card

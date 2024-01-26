import { StaticImageData } from 'next/image'

export type BlogItem = {
  title: string
  alt: string
  width: number
  height: number
  content: BlogContentItem[]
}

export type BlogContentItem =
  | {
      id: string
      type: 'image'
      title: string
      body: StaticImageData
    }
  | {
      id: string
      type: 'subtitle' | 'paragraph'
      body: string
    }

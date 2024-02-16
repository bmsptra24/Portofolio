import React from 'react'
import style from '../styles/profil/loading.module.scss'
import Bmsptra24 from '@/components/Decoration/Animation/Bmsptra24'

const loading = () => {
  return (
    <main className={style['loading-container']}>
      <Bmsptra24 />
    </main>
  )
}

export default loading

import React from 'react'

import '../../styles/profil.scss'
import Image from 'next/image'
import Header from '@/components/Header/Header'
import Puisi from '@/components/Profil/Puisi'
import { bebasNeue } from '@/styles/font'
import Project from '@/components/Profil/Project'
import Person from '@/components/Profil/Person'
import Skills from '@/components/Profil/Skills'

const Page = () => {
  return (
    <main className="profil-container">
      <Header />
      <Person />
      <Skills />
      <Puisi />
      <Project />
    </main>
  )
}

export default Page

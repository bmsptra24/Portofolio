import React from 'react'

import '../styles/profil.scss'
import Header from '@/components/Header/Header'
import Puisi from '@/components/Profil/Puisi'
import Project from '@/components/Profil/Project'
import Person from '@/components/Profil/Person'
import Skills from '@/components/Profil/Skills'
import Footer from '@/components/Footer/Footer'

const Page = () => {
  return (
    <>
      <main className="profil-container">
        <Header variant="dark" />
        <Person />
        {/* <Skills /> */}
        <Project />
        <Puisi />
        <Footer />
      </main>
      {/* <SmoothScrool classContainer="profil-container" /> */}
    </>
  )
}

export default Page

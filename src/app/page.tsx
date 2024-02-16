// 'use client'
import React, { useEffect, useState } from 'react'

import '../styles/profil.scss'
import Header from '@/components/Header/Header'
import Puisi from '@/components/Profil/Puisi'
import Project from '@/components/Profil/Project'
import Person from '@/components/Profil/Person'
import Skills from '@/components/Profil/Skills'
import Footer from '@/components/Footer/Footer'
import Loading from './loading'
const Page = () => {
  // const [welcomeAnimation, setWelcomeAnimation] = useState(true)

  // useEffect(() => {
  //   setWelcomeAnimation(false)
  // }, [])

  return (
    <>
      {/* {welcomeAnimation === false && ( */}
      <main className="profil-container">
        <Header variant="dark" />
        <Person />
        {/* <Skills /> */}
        <Project />
        <Puisi />
        <Footer />
      </main>
      {/* )} */}
      {/* {welcomeAnimation === true && <Loading />} */}
    </>
  )
}

export default Page
